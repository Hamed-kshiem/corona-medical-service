import { Education } from './Entity/education.entity';
import { Staff } from './Entity/staff.entity';
import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getConnection } from 'typeorm';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff) private staffRepository: Repository<Staff>,
    @InjectRepository(Education)
    private educationRepository: Repository<Education>,
  ) {}

  async create(createStaff: Staff): Promise<Staff> {
    return await this.staffRepository.save(createStaff);
  }

  async findAll(): Promise<Staff[]> {
    return await this.staffRepository.find();
  }

  async findOne(id: number) {
    return await this.staffRepository.findOne(id);
  }

  async update(id: number, updateStaffDto: Staff) {
    const editedStaff: Staff = await this.staffRepository.findOne(id);
    if (!editedStaff) {
      throw new NotFoundException('Note is not found');
    }
    if (editedStaff.name) {
      editedStaff.name = updateStaffDto.name;
    }
    if (editedStaff.birthday) {
      editedStaff.birthday = updateStaffDto.birthday;
    }
    if (editedStaff.coronaPositiv) {
      editedStaff.coronaPositiv = updateStaffDto.coronaPositiv;
    }
    if (editedStaff.hiringDate) {
      editedStaff.hiringDate = updateStaffDto.hiringDate;
    }
    if (editedStaff.location) {
      editedStaff.location = updateStaffDto.location;
    }
    if (editedStaff.postcode) {
      editedStaff.postcode = updateStaffDto.postcode;
    }
    if (editedStaff.street) {
      editedStaff.street = updateStaffDto.street;
    }
    Logger.log(editedStaff);
    await this.staffRepository.save(editedStaff);
    return editedStaff;
  }

  async remove(id: number) {
    return await this.staffRepository.delete(id);
  }

  async addEducation(id: number, education: Education) {
    const staff: Staff = await this.staffRepository.findOne(id);
    education.staff = staff;
    this.educationRepository.save(education);
    return staff;
  }
}
