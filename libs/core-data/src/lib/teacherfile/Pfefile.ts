import { Student } from '../student/Student';
import { Company } from '../student/Company';


export interface PfeFile {
    id:number
    description: String;
    fonctionality: String;
    keyWord : String;
    problematic: String;
    title: String;
    year: String;
    category: any;
    company: Company;
    student: Student;
    framer: any;
    modif: String;
    note_F:number;
    note_IR:number;
    valid:boolean;
}