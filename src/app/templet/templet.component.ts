import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templet',
  templateUrl: './templet.component.html',
  styleUrls: ['./templet.component.css']
})
export class TempletComponent implements OnInit {
  show=false;
  show2=false;
  show3=false;
  constructor() { }

  ngOnInit(): void {
    
  }
  signup(logIn:any)
  {
    console.log(logIn);
  }
  lnameclick(){
    this.show=true;
  }
  emailclick(){
    this.show2=true;
  }
  passwordclick()
  {
    this.show3=true;
  }
}
