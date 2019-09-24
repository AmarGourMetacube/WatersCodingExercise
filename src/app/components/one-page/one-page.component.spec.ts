import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionComponent } from '../subscription/subscription.component';
import { OnePageComponent } from './one-page.component';
import { CrudService } from "../../service/crud.service";
import { Product } from "../../models/product.model";
import { MatCardModule } from "@angular/material/card";
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('OnePageComponent', () => {
  let component: OnePageComponent;
  let fixture: ComponentFixture<OnePageComponent>;
  let products: Product;
  let service: CrudService;
  const prod: Product =   {
    id: 1,
    title: "STARTER",
    amount: 1,
    status: "unsold",
    visible: true,        
    description: "Starter features for your business to grow."
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule, HttpClientTestingModule
      ],
      declarations: [ OnePageComponent, SubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(CrudService);
    fixture = TestBed.createComponent(OnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have getData', () => {
    expect(component.getData).toBeTruthy();
  });

  it('should have getData as array list', async () => {
    service.getProducts().subscribe(value => {
      let response = Object.getOwnPropertyNames(value[0]);
      let expectedResp = Object.getOwnPropertyNames(prod);
      expect(expectedResp).toEqual(response);
    });
  });

});
