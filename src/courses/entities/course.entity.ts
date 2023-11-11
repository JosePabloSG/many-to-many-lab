import { Student } from "src/students/entities/student.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('course')
export class Course {
    @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
    id: number;

    @Column('varchar', { name: 'course_name', length: 255, unique: true })
    courseName: string;

    @ManyToMany(() => Student, student => student.courses,{onDelete: 'NO ACTION', onUpdate: 'NO ACTION',})
    students?: Student[];
}
