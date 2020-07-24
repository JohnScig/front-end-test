import { Component, OnInit } from '@angular/core';

import { InvoiceGeneratorService } from './invoice-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'front-end-test';

  constructor(private invoiceGeneratorService: InvoiceGeneratorService) {}

  ngOnInit(): void {
    this.invoiceGeneratorService.generateInvoices(100);
  };

}
