import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
