import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes"
@Component({
  selector: 'app-q-body',
  templateUrl: './q-body.component.html',
  styleUrls: ['./q-body.component.css']
})
export class QBodyComponent implements OnInit {

  khaki:Quotes[]=[

    new Quotes("“Don't cry because it's over, smile because it happened.”" , "― Dr. Seuss", new Date(2019,3,14)),
    new Quotes("“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" , "― Bernard M. Baruch", new Date()),
    new Quotes("“A room without books is like a body without a soul.”" , "― Marcus Tullius Cicero", new Date()),
    new Quotes("“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”" , "― William W. Purkey", new Date()),
    new Quotes("“You only live once, but if you do it right, once is enough.”" , "― Mae West", new Date()),
    new Quotes("“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”" , "― Marilyn Monroe", new Date()),
    new Quotes("“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”" , "― douglas adams", new Date()),
  ]
  constructor() { }

  ngOnInit() {
  }

}
