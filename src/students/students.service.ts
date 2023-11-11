import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ){}
  create(createStudentDto: CreateStudentDto) {
    const addStudent = this.studentsRepository.create(createStudentDto);
    this.studentsRepository.save(addStudent);
    return addStudent;
  }

  findAll() {
    return this.studentsRepository.find();
  }

  findOne(id: number) {
    return this.studentsRepository.findOneBy({id});
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const updateStudent = await this.studentsRepository.update({id}, updateStudentDto);
    return updateStudent;
  }

  remove(id: number) {
    return this.studentsRepository.delete(id);
  }
}
