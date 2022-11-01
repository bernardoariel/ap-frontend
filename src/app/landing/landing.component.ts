import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  btnVolver:boolean = false;
  constructor() { }

  ngOnInit(): void {
    if(window.location.href.includes('login')){
      this.btnVolver = true
    }else{
      this.btnVolver = false
    }
  }

}
