import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'user password',
    minimum: 1,
    default: 'admin',
    type: String,
  })
  @Column()
  password: string;

  @ApiProperty({
    description: 'username name',
    minimum: 1,
    default: 'admin',
    type: String,
  })
  @Column()
  username: string;
}
