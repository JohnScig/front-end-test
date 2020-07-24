import { Component, OnInit, Input } from '@angular/core';
import { InvoiceGeneratorService } from '../invoice-generator.service';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {

  constructor(private invoiceGeneratorService: InvoiceGeneratorService) { }

  inputSearchElement: HTMLInputElement;

  @Input() invoices: Invoice[];

  displayedInvoices: Invoice[];

  isPaid(price: number): string {
    if (price > 0.5) {
      return 'zaplatena';
    }
    return 'neuhradena';
  }

}
