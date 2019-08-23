export class Quotes {
  public showDate: boolean;
  constructor( public word: string ,public author:string, public completeDate: Date){
    this.showDate=false;
  }

}
