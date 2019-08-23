import { Component, OnInit,Input } from '@angular/core';
import {Quotes} from "../quotes"
@Component({
  selector: 'app-quote-child',
  templateUrl: './quote-child.component.html',
  styleUrls: ['./quote-child.component.css']
})
export class QuoteChildComponent implements OnInit {

  @Input() khaki:Quotes;
  
  constructor() { }

  ngOnInit() {
  }

}
