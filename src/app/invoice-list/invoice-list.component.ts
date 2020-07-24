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

  inputSearchElement: HTMLInputElement;

  filterMode = false;

  invoices: Invoice[];
  filteredInvoices: Invoice[];

  ngOnInit(): void {
    this.invoiceGeneratorService.getInvoices().subscribe(invoices => this.invoices = invoices);
    this.inputSearchElement = document.getElementById('search') as HTMLInputElement;
  }

  filter(event: any) {
    if (event.target.value === '') {
      this.filterMode = false;
    } else {
      this.filterMode = true;
    }

    const filterString = (event.target.value);

    this.filteredInvoices = this.invoices.filter(invoice => invoice.name.includes(filterString));

  }

}
