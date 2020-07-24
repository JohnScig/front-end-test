import { Component, Input } from '@angular/core';

import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice-list-item',
  templateUrl: './invoice-list-item.component.html',
  styleUrls: ['./invoice-list-item.component.scss']
})
export class InvoiceListItemComponent {

  @Input() invoice: Invoice;

  constructor() { }

  getTag(): string {
    if (this.invoice.price > 0.5) {
      return 'Uhradená';
    }
    return 'Vystavená';
  }

  getPaymentStatus(): boolean {
    return (this.invoice.price > 0.5);
  }

}
