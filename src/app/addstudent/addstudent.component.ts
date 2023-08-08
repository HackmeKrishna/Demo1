import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class ADDSTUDENTComponent {

  constructor(private http: HttpClient) {

  }
  issuccess:boolean=false;
  name: string = "";
  course: string = "";
  gender: string = "";
  address: string = "";

  addStudent() {
    const formData={
      name:this.name,
      course:this.course,
      gender:this.gender,
      address:this.address
    }
    const apiUrl = "https://localhost:7079/api/studentcontact";
    this.http.post(apiUrl,formData).subscribe({
      next: (response) => {
        console.log('Successfully added student:', response);
        this.issuccess=true;

      },
      error: (error) => {
        console.error('Error adding student:', error);
      }
    });
  }
}
