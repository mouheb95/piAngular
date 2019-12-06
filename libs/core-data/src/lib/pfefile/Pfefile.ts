import { Student } from '../student/Student';

export interface PfeFile {
    id:number
    description: String;
    fonctionality: String;
    keyWord : String;
    problematic: String;
    title: String;
    currentYear: String;
    category: any;
    company: any;
    student: Student;
    framer: any;
    note_IR: number;
    note_F: number;
    
}