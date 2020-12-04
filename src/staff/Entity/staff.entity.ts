import { StaffType } from './stafftype.entity';
import { Education } from './education.entity';
import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  name: string;

  @Column()
  birthday: Date;

  @Column()
  @MinLength(1)
  @IsString()
  street: string;

  @Column()
  @MinLength(1)
  @IsString()
  postcode: number;

  @Column()
  @MinLength(1)
  @IsString()
  location: string;

  @Column()
  coronaPositiv: boolean;

  @Column()
  hiringDate: Date;

  @OneToMany(() => Education, (education) => education.staff)
  education: Education[];

  @ManyToMany(() => StaffType)
  @JoinTable()
  type: StaffType[];
}
