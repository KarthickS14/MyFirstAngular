import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm : FormGroup;
  name = '';
  number='';
  gender ='';
  age = '';
  doj = '';
  skills = '';

  // skillAdded ='';
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
      'skills' : new FormArray([])
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

  getcontrol(){
    return (<FormArray>this.employeeForm.get('skills')).controls;
  }
  onAdd(){
    const controls = new FormControl(null,Validators.required);
    (<FormArray>this.employeeForm.get('skills')).push(controls);
    // console.log(addskill.value);
    // this.skillAdded = addskill.value;
  }
  onClear(index: number){
    (<FormArray>this.employeeForm.get('skills')).removeAt(index);
  }
}
