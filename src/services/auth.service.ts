import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaRepository } from "src/repo/prisma.repository";

@Injectable()
export class AuthService {
  constructor (
    private readonly prismaRepository: PrismaRepository,
    private readonly jwtService: JwtService
  ) {}
}