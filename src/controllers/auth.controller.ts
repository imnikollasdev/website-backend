import { } from 'express';
import { Controller } from '@nestjs/common';

import { LoginDto } from '../dtos/auth/login.dto';
import { RegisterDto } from '../dtos/auth/register.dto';
import { AuthService } from '../services/auth.service';

@Controller( '/api/v1/auth' )
export class AuthController{

  constructor( private readonly authService ) {}

}