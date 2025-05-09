import {
    IsEmail,
    IsString,
    MinLength,
    Matches,
    IsNotEmpty,
    Validate,
  } from 'class-validator';
  import { Match } from './match.decorator';
  
  export class SignupDto {
    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    email: string;
  
    @IsString()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/, {
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, and one number',
    })
    @IsNotEmpty({ message: 'Password is required' })
    password: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Confirm password is required' })
    @Validate(Match, ['password'], {
      message: 'Passwords do not match',
    })
    confirmPassword: string;
  
    @IsString()
    @IsNotEmpty({ message: 'Name is required' })
    @MinLength(2, { message: 'Name must be at least 2 characters long' })
    name: string;
  }