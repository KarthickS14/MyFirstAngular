import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  genders = ['male','female']; 
  employeeForm : FormGroup;
  name = '';
  number='';
  gender ='';
  age = '';
  doj = '';
  skills = '';

  skillAdded ='';
  tableData : null;
  isShow = false;

  constructor() { }

  ngOnInit() {
    this.employeeForm = new FormGroup({
      'ename' : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'enumber' : new FormControl(null,[Validators.required,Validators.minLength(3)]),
      'gender' : new FormControl('null'),
      'age' : new FormControl(null,[Validators.required,Validators.minLength(2)]),
      'doj' : new FormControl(null,[Validators.required]),
      'skills' : new FormControl(null,[Validators.required,Validators.minLength(4)])
   
      });
      // this.employeeForm.setValue({
      //   'gender' : 'male'
      // });
  }
  onSubmit(){
    console.log(this.employeeForm); 
    this.name = this.employeeForm.get('ename').value;
    this.number = this.employeeForm.get('enumber').value;
    this.gender = this.employeeForm.get('gender').value;
    this.age = this.employeeForm.get('age').value;
    this.doj = this.employeeForm.get('doj').value;
    this.skills = this.employeeForm.get('skills').value;

    this.isShow = true;
  }
  onAdd(addskill){
    console.log(addskill.value);
    this.skillAdded = addskill.value;
  }
  onClear(){
  this.skillAdded = null;
  }
}
