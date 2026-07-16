import { PrismaService } from '@/prisma/prisma.sevices';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// NOTE: Replace with Prisma service on Day 2 when DB is connected



@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService)  {}

  async create(data: any) {
  let tenantId = data.tenantId;

  if (!tenantId) {
    const tenant = await this.prisma.tenant.create({
      data: {
        name: `${data.firstName}'s Organization`,
        slug: data.email.split('@')[0] + '-' + Date.now(),
      },
    });
    tenantId = tenant.id;
  }

  const user = await this.prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      tenantId,
    },
  });

  return user;
}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({where:{email:email} });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({where:{id:id} });
  }

  async saveRefreshToken(userId: string, token: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: token }
    });
  }

  async validateRefreshToken(userId: string, token: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { refreshToken: true }
    });
    return user?.refreshToken === token;
  }

  async revokeRefreshToken(userId: string, token: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null }
    });
  }

  async findAll(tenantId: string) {
    return this.prisma.user.findMany({
      where: { tenantId },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
        tenantId: true,
        createdAt: true,
        updatedAt: true,
      }
    });
  }
}


