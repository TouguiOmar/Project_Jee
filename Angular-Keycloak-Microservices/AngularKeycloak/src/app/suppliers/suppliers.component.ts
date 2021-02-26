import { Component, OnInit } from '@angular/core';
import {SuppliersService} from '../services/suppliers.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  public suppliers: any;
  public errMessage: any;
  constructor(public suppliersService:SuppliersService) { }

  ngOnInit() {
  this.suppliersService.getSuppliers()
  .subscribe(data=>{
  this.suppliers=data;
  },err=>{
  this.errMessage=err.error.message;
})
  }

}
