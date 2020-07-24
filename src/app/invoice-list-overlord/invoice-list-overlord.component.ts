import { combineLatest, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Invoice } from '../models/invoice';
import { InvoiceGeneratorService } from './../invoice-generator.service';

@Component({
  selector: 'app-invoice-list-overlord',
  templateUrl: './invoice-list-overlord.component.html',
  styleUrls: ['./invoice-list-overlord.component.scss']
})
export class InvoiceListOverlordComponent implements OnInit {

  searchString = new BehaviorSubject<string>('');

  invoices: Invoice[];
  invoicesToDisplay: Invoice[];

  constructor(private invoiceGeneratorService: InvoiceGeneratorService) { }

  ngOnInit(): void {
    combineLatest(this.invoiceGeneratorService.getInvoices(), this.searchString, (invoices, searchString) => {
      this.invoicesToDisplay =  invoices.filter(invoice => invoice.name.includes(searchString));
    }).subscribe();
  }

  onSearchStringChanged(newSearchString: string) {
    this.searchString.next(newSearchString);
  }

}
