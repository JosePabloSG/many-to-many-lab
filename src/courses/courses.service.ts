import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course)
    private coursesRepository: Repository<Course>,
  ) {}


  create(createCourseDto: CreateCourseDto) {
    const addCourse = this.coursesRepository.create(createCourseDto)
    this.coursesRepository.save(addCourse)
    return addCourse
  }

  findAll() {
    return this.coursesRepository.find();
  }

  findOne(id: number) {
    return this.coursesRepository.findOneBy({id})
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const updateCourse = await this.coursesRepository.update({id}, updateCourseDto);
    return updateCourse;
  }

  remove(id: number) {
    return this.coursesRepository.delete(id);
  }
}
