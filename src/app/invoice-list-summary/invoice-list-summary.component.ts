import { Component, OnInit, Input } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice-list-summary',
  templateUrl: './invoice-list-summary.component.html',
  styleUrls: ['./invoice-list-summary.component.scss']
})
export class InvoiceListSummaryComponent implements OnInit {

  @Input()
  set invoices(invoices: Invoice[]) {
    console.log('new Input');
    this.paidCount = invoices.filter(invoice => invoice.price > 0.5 ).length;
    this.unpaidCount = invoices.filter(invoice => invoice.price <= 0.5 ).length;
  }

  paidCount: number;
  unpaidCount: number;

  constructor() { }

  ngOnInit(): void {
  }
}
