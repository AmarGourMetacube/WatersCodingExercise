import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SubscriptionComponent } from './subscription.component';
import { CrudService } from "../../service/crud.service";
import { Product } from "../../models/product.model";

import { MatCardModule } from "@angular/material/card";
describe('SubscriptionComponent', () => {
  let component: SubscriptionComponent;
  let fixture: ComponentFixture<SubscriptionComponent>;
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
      declarations: [ SubscriptionComponent],
      imports: [
        HttpClientTestingModule, MatCardModule
      ],
      providers: [CrudService],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(CrudService);
    fixture = TestBed.createComponent(SubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have updateOffer', () => {
    expect(component.updateProduct).toBeTruthy();
  });
  
  it('should have update Offer if click buy', async () => {
    prod.status = "sold";
    service.updateProduct(prod).subscribe(value => {
      expect(value).toEqual(null);
    });
  });

  it('should have update Offer if click cancle', async () => {
    spyOn(component, 'updateProduct');
    prod.status = "unsold";
    service.updateProduct(prod).subscribe(value => {
      expect(value).toEqual(null);
    });
  });

});
