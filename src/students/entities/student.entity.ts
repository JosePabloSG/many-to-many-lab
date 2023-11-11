import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('student')
export class Student {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'student_name', length: 255, unique: true })
  studentName: string;
  
  @ManyToMany(() => Course, course => course.students,{onDelete: 'NO ACTION', onUpdate: 'NO ACTION'})
  @JoinTable({
        name: 'student_course',
        joinColumn: {
          name: 'student_id',
          referencedColumnName: 'id',
        },
        inverseJoinColumn: {
          name: 'course_id',
          referencedColumnName: 'id',
        },
      })
    courses?: Course[];
}
