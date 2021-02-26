import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products :any;
  public errMessage:any;
  constructor(private productsService :ProductsService) { }

  ngOnInit(){
    this.productsService.getProduct()
      .subscribe(data=>{
        this.products=data
      },
      err=>{
        this.errMessage=err.error.message;
      }
    )
  }


}
