import { Injectable } from '@angular/core';
import { Invoice } from './models/invoice';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceGeneratorService {

  constructor() { }

  INVOICES: Invoice[];

  generateInvoice() {
    return Math.random().toString(36).substring(5);
  }

  generatePrice() {

    return Math.floor(Math.random() * Math.floor(10)) / 10;
  }

  generateInvoices(amount: number) {
    const invoices = [];
    for (let i = 0; i < amount; i++) {
      const newInvoice = {
        name: this.generateInvoice(),
        price: this.generatePrice(),
      };
      invoices.push(newInvoice);
    }

    this.INVOICES = invoices;
  }

  getInvoices(): Observable<Invoice[]> {
    if (!this.INVOICES) {
      this.generateInvoices(50);
    }
    return of(this.INVOICES);
  }

  addInvoice(invoiceName: string) {
    this.INVOICES.unshift({
      name: invoiceName,
      price: this.generatePrice()
    });
  }
}
