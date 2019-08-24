import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-q-form",
  templateUrl: "./q-form.component.html",
  styleUrls: ["./q-form.component.css"]
})
export class QFormComponent implements OnInit {
  newQuotes = new Quotes("", "", new Date());

  @Output() addQuotes = new EventEmitter<Quotes>();

  addquote() {
    this.addQuotes.emit(this.newQuotes);
  }

  constructor() {}

  ngOnInit() {}
}
