import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// NOTE: Replace with Prisma service on Day 2 when DB is connected
const users: any[] = [];
const refreshTokens: Map<string, Set<string>> = new Map();

@Injectable()
export class UsersService {
  async create(data: any) {
    const user = {
      id: uuidv4(),
      ...data,
      role: data.role || 'VIEWER',
      tenantId: data.tenantId || 'default',
      createdAt: new Date(),
    };
    users.push(user);
    return user;
  }

  async findByEmail(email: string) {
    return users.find(u => u.email === email) || null;
  }

  async findById(id: string) {
    return users.find(u => u.id === id) || null;
  }

  async saveRefreshToken(userId: string, token: string) {
    if (!refreshTokens.has(userId)) refreshTokens.set(userId, new Set());
    refreshTokens.get(userId)!.add(token);
  }

  async validateRefreshToken(userId: string, token: string): Promise<boolean> {
    return refreshTokens.get(userId)?.has(token) ?? false;
  }

  async revokeRefreshToken(userId: string, token: string) {
    refreshTokens.get(userId)?.delete(token);
  }

  async findAll(tenantId: string) {
    return users.filter(u => u.tenantId === tenantId).map(({ password, ...u }) => u);
  }
}
