import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CrudService } from './crud.service';
import { Product } from "../models/product.model";
describe('CrudService', () => {  
  let httpCtrl: HttpTestingController;
  const prod: Product =   {
    id: 1,
    title: "STARTER",
    amount: 1,
    status: "unsold",
    visible: true,        
    description: "Starter features for your business to grow."
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service).toBeTruthy();
  });

  it('should have get products', () => {
    const service: CrudService = TestBed.get(CrudService);
    expect(service.getProducts).toBeTruthy();
  });

  it('should have put product', () => {
    const service: CrudService = TestBed.get(CrudService);

    service.updateProduct(prod).subscribe(() => {
      const req = httpCtrl.expectOne(`${service.SERVER_URL}/offers/${prod.id}`);
      expect(req.request.method).toBe('PUT');
      req.flush(prod);
    });
  });
});


