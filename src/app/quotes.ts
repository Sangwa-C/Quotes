export class Quotes {
  showDate: boolean;
  constructor( public id:number, public word: string ,public author:string, public nDate: Date){
    this.showDate=false;
  }

}
