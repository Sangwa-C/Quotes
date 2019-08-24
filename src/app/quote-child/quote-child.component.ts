import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quotes} from "../quotes"
@Component({
  selector: 'app-quote-child',
  templateUrl: './quote-child.component.html',
  styleUrls: ['./quote-child.component.css']
})
export class QuoteChildComponent implements OnInit {

  
  @Output() isComplete = new EventEmitter<boolean>();

  removeQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  @Input() khaki:Quotes;
  
  constructor() { }

  ngOnInit() {
  }

}
