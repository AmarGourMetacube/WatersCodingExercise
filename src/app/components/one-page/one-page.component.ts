import { Component, OnInit } from "@angular/core";
import { CrudService } from "../../service/crud.service";
import { Product } from "../../models/product.model";
@Component({
  selector: "app-one-page",
  templateUrl: "./one-page.component.html",
  styleUrls: ["./one-page.component.scss"]
})
export class OnePageComponent implements OnInit {
  products: Product[];
  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.getData();
  }

  public updateProduct(event) {
    this.getData();
  }

  //
  // ─── GET DATA FROM API ──────────────────────────────────────────────────────────
  //

  getData() {
    /**
    |--------------------------------------------------
    | API Calling for get results
    |--------------------------------------------------
    */
   this.crudService.getProducts().subscribe(
    (resp: any) => {
        this.products = this.crudService.changeVisiblity(resp); 
        this.products = this.products.slice(0, 2).map(res => res);
      },
    err => {
      console.error(err);
    }
  );
  }
}
