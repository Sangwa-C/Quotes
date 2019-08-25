import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updown',
  templateUrl: './updown.component.html',
  styleUrls: ['./updown.component.css']
})
export class UpdownComponent implements OnInit {
yup=0
nopu=0
san(){
  this.yup=this.yup+1
}
chel(){
  this.nopu=this.nopu+1
}
  constructor() { }

  ngOnInit() {
  }

}
