import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceGeneratorComponent } from './invoice-generator/invoice-generator.component';
import { InvoiceListSummaryComponent } from './invoice-list-summary/invoice-list-summary.component';
import { AppRoutingModule } from './app-routing.module';
import { InvoicingComponent } from './invoicing/invoicing.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceListComponent,
    InvoiceGeneratorComponent,
    InvoiceListSummaryComponent,
    InvoicingComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
