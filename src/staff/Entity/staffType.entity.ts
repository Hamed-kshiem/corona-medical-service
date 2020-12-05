import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StaffType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'staff type',
    minimum: 1,
    default: true,
    type: String,
  })
  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  typename: string;
}
