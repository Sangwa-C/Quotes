import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QBodyComponent } from './q-body/q-body.component';
import { DCountingPipe } from './d-counting.pipe';
import { QuoteChildComponent } from './quote-child/quote-child.component';


@NgModule({
  declarations: [
    AppComponent,
    QBodyComponent,
    DCountingPipe,
    QuoteChildComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
