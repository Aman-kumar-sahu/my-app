import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  key!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.key=new FormGroup({
      'fname':new FormControl(null,[Validators.maxLength(5)]),
      'lname':new FormControl(null),
      'email':new FormControl(null),
      'password':new FormControl(null)
    });
  }
  onSubmit(){
    console.log(this.key);
  }
 
}
