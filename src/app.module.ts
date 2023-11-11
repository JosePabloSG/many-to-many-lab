import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from './courses/entities/course.entity';
import { Student } from './students/entities/student.entity';

@Module({
  imports: [StudentsModule, CoursesModule,
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '2710',
    database: 'lab',
    entities:[Course,Student],
    autoLoadEntities: true,
    synchronize: true,
})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
