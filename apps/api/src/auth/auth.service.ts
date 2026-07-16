import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcryptjs';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existing = await this.usersService.findByEmail(dto.email);
    if (existing) throw new ConflictException('Email already registered');
    const hash = await bcrypt.hash(dto.password, 12);
    const user = await this.usersService.create({ ...dto, password: hash });
    const tokens = await this.generateTokens(user.id, user.email, user.role, user.tenantId);
    await this.usersService.saveRefreshToken(user.id, tokens.refreshToken);
    const { password, ...safeUser } = user;
    return { user: safeUser, ...tokens };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const valid = await bcrypt.compare(dto.password, user.password);
    if (!valid) throw new UnauthorizedException('Invalid credentials');
    const tokens = await this.generateTokens(user.id, user.email, user.role, user.tenantId);
    await this.usersService.saveRefreshToken(user.id, tokens.refreshToken);
    const { password, ...safeUser } = user;
    return { user: safeUser, ...tokens };
  }

  async refreshTokens(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: this.config.get('JWT_REFRESH_SECRET'),
      });
      const isValid = await this.usersService.validateRefreshToken(payload.sub, refreshToken);
      if (!isValid) throw new UnauthorizedException();
      const user = await this.usersService.findById(payload.sub);
      if (!user) throw new UnauthorizedException('User not Found ');
      return this.generateTokens(user.id, user.email, user.role, user.tenantId);
    } catch {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async logout(userId: string, refreshToken: string) {
    await this.usersService.revokeRefreshToken(userId, refreshToken);
    return { message: 'Logged out successfully' };
  }

  private async generateTokens(userId: string, email: string, role: string, tenantId: string) {
    const payload = { sub: userId, email, role, tenantId };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, {
        secret: this.config.get('JWT_REFRESH_SECRET'),
        expiresIn: '7d',
      }),
    ]);
    return { accessToken, refreshToken };
  }
}
