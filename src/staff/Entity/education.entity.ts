import { Staff } from './staff.entity';
import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Education extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  education: string;

  @ManyToOne(() => Staff, (Staff) => Staff.education)
  staff: Staff;
}
