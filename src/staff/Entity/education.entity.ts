import { Staff } from './staff.entity';
import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'staff education',
    minimum: 1,
    default: true,
    type: String,
  })
  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  education: string;

  @ManyToOne(() => Staff, (Staff) => Staff.education)
  staff: Staff;
}
