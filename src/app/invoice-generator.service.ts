import { Injectable } from '@angular/core';
import { Invoice } from './models/invoice';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceGeneratorService {

  constructor() { }

  invoices: Invoice[];
  invoices$ = new BehaviorSubject<Invoice[]>([]);

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
    this.invoices = invoices;
    this.invoices$.next(invoices);
  }

  getInvoices(): Observable<Invoice[]> {
    return this.invoices$;
  }

  addInvoice(invoiceName: string) {
    this.invoices.unshift({
      name: invoiceName,
      price: this.generatePrice()
    });
    this.invoices$.next(this.invoices);
  }
}
