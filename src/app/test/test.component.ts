import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  logIn!:FormGroup;
  constructor(service:DataServiceService) { 
    
  }

  ngOnInit(): void {
    this.logIn=new FormGroup({
      'fname':new FormControl(null,[Validators.minLength(3),Validators.required]),
      'lname':new FormControl(null),
      'age':new FormControl(null),
      'address':new FormGroup({
      'street':new FormControl(null),
      'state':new FormControl(null)
      })
    });
  }
  onSubmit(){
    console.log(this.logIn);
  }
}
