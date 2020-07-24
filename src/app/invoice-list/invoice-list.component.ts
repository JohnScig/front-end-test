import { Component, Input } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {

  constructor() { }

  inputSearchElement: HTMLInputElement;

  @Input() invoices: Invoice[];

  displayedInvoices: Invoice[];

  isPaid(price: number, type: string): any {
    if (price > 0.5) {
      if (type === 'string') {
        return 'Uhradená';
      } else {
        return true;
      }
    }

    if (type === 'string') {
      return 'Vystavená';
    } else {
      return false;
    }
  }

}
