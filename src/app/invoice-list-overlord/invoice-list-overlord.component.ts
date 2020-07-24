import { InvoiceGeneratorService } from './../invoice-generator.service';
import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-invoice-list-overlord',
  templateUrl: './invoice-list-overlord.component.html',
  styleUrls: ['./invoice-list-overlord.component.scss']
})
export class InvoiceListOverlordComponent implements OnInit {

  searchString = '';

  invoices: Invoice[];
  invoicesToDisplay: Invoice[];

  constructor(private invoiceGeneratorService: InvoiceGeneratorService) { }

  ngOnInit(): void {
    this.invoiceGeneratorService.getInvoices().subscribe(invoices => {this.invoicesToDisplay = invoices; this.invoices = invoices; });
  }

  onSearchStringChanged(newSearchString: string) {
    this.searchString = newSearchString;
    this.invoicesToDisplay = this.invoices.filter(invoice => invoice.name.includes(this.searchString));
  }

}
