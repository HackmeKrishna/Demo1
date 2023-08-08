import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})


export class StudentListComponent {


  students: any[] = [];
  constructor(private http: HttpClient) {
    this.getStudentList();

  }

  getStudentList() {
    const apiUrl = "https://localhost:7079/api/studentcontact";
    this.http.get<any[]>(apiUrl).subscribe({

      next: (data) => {

        this.students = data;

        console.log('Successfully fetched all student details:', this.students);

      },

      error: (error) => {

        console.error('Error fetching student details:', error);

      }
    });
  }


  DeleteStudent(Id: number) {

    const apiUrl = `https://localhost:7079/api/studentcontact/${Id}`;

    this.http.delete(apiUrl).subscribe({

      next: () => {

        console.log('Successfully deleted student with ID:', Id);

        this.students = this.students.filter(student => student.id !== Id);

      },

      error: (error) => {

        console.error('Error deleting student:', error);

      }

    });
  }
  SaveStudent(student: any) {

    const apiUrl = `https://localhost:7079/api/studentcontact/${student.id}`;



    this.http.put(apiUrl, student).subscribe({

      next: () => {

        console.log('Successfully updated student with ID:', student.id);

        student.editing = false;

        delete student.originalData;

      },

      error: (error) => {

        console.error('Error updating student:', error);

      }

    });
  }
  EditStudent(student: any) {

    student.editing = true;

    student.originalData = { ...student };

  }
  CancelEdit(student: any) {

    student.editing = false;

    Object.assign(student, student.originalData);

    delete student.originalData;

  }
}
