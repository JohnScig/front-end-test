import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListOverlordComponent } from './invoice-list-overlord.component';

describe('InvoiceListOverlordComponent', () => {
  let component: InvoiceListOverlordComponent;
  let fixture: ComponentFixture<InvoiceListOverlordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceListOverlordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceListOverlordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
