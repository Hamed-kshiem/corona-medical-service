import { StaffType } from './stafftype.entity';
import { Education } from './education.entity';
import { IsString, MaxLength, MinLength } from 'class-validator';
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Staff extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The age of a cat',
    minimum: 1,
    default: 'neme goes here',
    type: String,
  })
  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  name: string;

  @ApiProperty({
    description: 'staff birthday',
    minimum: 1,
    default: '2020-12-04 00:00:00',
    type: Date,
  })
  @Column()
  birthday: Date;

  @ApiProperty({
    description: 'Staff adress',
    minimum: 1,
    default: 'Altenbergerstrasse 69',
    type: String,
  })
  @Column()
  @MinLength(1)
  @IsString()
  street: string;

  @ApiProperty({
    description: 'Staff postcode',
    minimum: 1,
    default: 4040,
    type: Number,
  })
  @Column()
  @MinLength(1)
  @IsString()
  postcode: number;

  @ApiProperty({
    description: 'Staff adress city & country',
    minimum: 1,
    default: 'Linz - Austria',
    type: String,
  })
  @Column()
  @MinLength(1)
  @IsString()
  location: string;

  @ApiProperty({
    description: 'staff corona status',
    minimum: 1,
    default: true,
    type: String,
  })
  @Column()
  coronaPositiv: boolean;

  @ApiProperty({
    description: 'staff hiring Date',
    minimum: 1,
    default: '2020-12-04 00:00:00',
    type: Date,
  })
  @Column()
  hiringDate: Date;

  @ApiProperty({
    description: 'staff types',
    minimum: 1,
    default: [],
    type: [StaffType],
  })
  @ManyToMany(() => StaffType, {
    eager: true,
  })
  @JoinTable()
  type: StaffType[];

  @ApiProperty({
    description: 'staff Education',
    minimum: 1,
    default: [],
    type: [Education],
  })
  @OneToMany(() => Education, (education: Education) => education.staff, {
    eager: true,
  })
  @JoinColumn({ name: 'id' })
  education: Education[];
}
