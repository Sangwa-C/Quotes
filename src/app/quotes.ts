export class Quotes {
  showDate: boolean;
  constructor( public word: string ,public author:string, public nDate: Date){
    this.showDate=false;
  }

}
