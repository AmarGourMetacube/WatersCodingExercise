import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CrudService } from "../../service/crud.service";
import { Product } from "../../models/product.model";
import { Color} from '../../shared/color';
import { String} from '../../shared/string';
@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.scss"]
})
export class SubscriptionComponent implements OnInit{
  @Input() products: Product[];
  @Output() buyProduct = new EventEmitter<boolean>();
  color = new Color();
  strings: any = String;
  constructor(private crudService: CrudService) {
  }
  
  styleColors(i){   
    let baseColor = this.color.colorBox[i-1];
    return baseColor;
  }
  ngOnInit(){
  }
  //
  // ─── UPDATE IN API ──────────────────────────────────────────────────────────────
  //
    
  public updateProduct(product, type) {
    let productDetail = product;
    
    if (type == "buy") {
      productDetail.status = "sold";
    }
    if (type == "cancle") {
      productDetail.status = "unsold";
    }
    
    /**
    |--------------------------------------------------
    | API Calling for update result
    |--------------------------------------------------
    */
    this.crudService.updateProduct(productDetail).subscribe(
      resp => {
        this.buyProduct.emit();
      },
      err => {
        console.error(err);
      }
    );
  }
}
