import { Component, OnInit } from '@angular/core';
import {Quotes} from "../quotes"
@Component({
  selector: 'app-q-body',
  templateUrl: './q-body.component.html',
  styleUrls: ['./q-body.component.css']
})
export class QBodyComponent implements OnInit {

  khaki:Quotes[]=[

    new Quotes(1,"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”" , "― Bernard M. Baruch", new Date(2017,5,14)),
    new Quotes(2,"“A room without books is like a body without a soul.”" , "― Marcus Tullius Cicero", new Date(2017,12,25)),
    new Quotes(3,"“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”" , "― William W. Purkey", new Date(2018,3,18)),
    new Quotes(4,"“You only live once, but if you do it right, once is enough.”" , "― Mae West", new Date(2018,7,18)),
    new Quotes(5,"“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”" , "― Marilyn Monroe", new Date(2019,1,27)),
    new Quotes(6,"“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”" , "― douglas adams", new Date(2019,6,27)),
  ]


  details(index){
    this.khaki[index].showDate = !this.khaki[index].showDate;
  }

  

  removeQuote(isComplete, index){
    if (isComplete) {
      this.khaki.splice(index,1);
    }
  }

  addNewQuotes(quote){
    let quotaLength = this.khaki.length;
    quote.id = quotaLength+1;
    quote.post = new Date(quote.post)
    this.khaki.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}


