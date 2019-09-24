import { Component, OnInit } from "@angular/core";
import { CrudService } from "../../service/crud.service";
import { Product } from "../../models/product.model";
@Component({
  selector: "app-two-page",
  templateUrl: "./two-page.component.html",
  styleUrls: ["./two-page.component.scss"]
})
export class TwoPageComponent implements OnInit {
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
          this.products = resp;
          //Find Results
          let result = this.products.find(({ status }) => status == "sold");
          if (result) {
            this.products = this.products.map(res => {
              if (res.status !== "sold") {
                res.visible = false;
              }
              return res;
            });
          } else {
            this.products = this.products.map(res => {
              res.visible = true;
              return res;
            });
          }
          this.products = this.products.slice(2, 4).map(res => res);
        },
      err => {
        console.error(err);
      }
    );
  }
}
