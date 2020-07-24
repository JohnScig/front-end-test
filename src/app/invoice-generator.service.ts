import { Injectable } from '@angular/core';
import { Invoice } from './models/invoice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceGeneratorService {

  constructor() { }

  generateInvoice() {
    return Math.random().toString(36).substring(5);
  }

  generatePrice() {

    return Math.floor(Math.random() * Math.floor(10)) / 10;
  }

  generateInvoices(amount: number): Observable<Invoice[]> {
    const invoices = [];
    for (let i = 0; i < amount; i++) {
      const newInvoice = {
        name: this.generateInvoice(),
        price: this.generatePrice(),
      }
      invoices.push(newInvoice);
    }

    return of(invoices);
  }
}
