import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-invoice-list-search',
  templateUrl: './invoice-list-search.component.html',
  styleUrls: ['./invoice-list-search.component.scss']
})
export class InvoiceListSearchComponent {

  @Output() searchStringChanged = new EventEmitter<string>();

  searchString = '';

  constructor() { }

  onInput(event: any) {
    this.searchStringChanged.emit(
      event.target.value
    );
  }

}
