import { Component, OnInit } from '@angular/core';
import { InvoiceGeneratorService } from '../invoice-generator.service';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {

  constructor(private invoiceGeneratorService: InvoiceGeneratorService) { }

  invoices: Invoice[];

  ngOnInit(): void {
    this.invoiceGeneratorService.generateInvoices(20).subscribe(invoices => this.invoices = invoices);
  }

}
