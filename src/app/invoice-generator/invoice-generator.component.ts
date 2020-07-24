import { InvoiceGeneratorService } from './../invoice-generator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-generator',
  templateUrl: './invoice-generator.component.html',
  styleUrls: ['./invoice-generator.component.scss']
})
export class InvoiceGeneratorComponent implements OnInit {

  constructor(private invoiceGeneratorService: InvoiceGeneratorService) { }

  inputElement: HTMLInputElement;

  ngOnInit(): void {
    this.inputElement = document.getElementById('newInvoiceName') as HTMLInputElement;
  }

  addNewInvoice() {
    if (this.inputElement.value) {
      this.invoiceGeneratorService.addInvoice(this.inputElement.value);
      this.inputElement.value = '';
    }
  }

}
