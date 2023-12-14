import { Component, OnInit } from '@angular/core';
import { AddItem } from '../models/add-item.model';
import { ItemPostService } from '../services/item-post.service';
import { Router } from '@angular/router';
import { SupplierService } from '../../supplier/services/supplier.service';
import { Observable } from 'rxjs';
import { Supplier } from '../../supplier/models/supplier.model';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  model: AddItem;
  supplier$?: Observable<Supplier[]>;

  constructor (private itemPostService: ItemPostService, private router: Router, private supplierService: SupplierService) {
    this.model = {
      name: '',
      amount: '',
      category: '',
      note: '',
      lastManager: '',
      lastInventory: new Date(),
      supplier: []
    }
  }
  ngOnInit(): void {
    this.supplier$ = this.supplierService.getAllSuppliers();
  }

  onFormSubmit(): void {
    console.log(this.model);
    this.itemPostService.createItem(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/items');
      }
    });
   // console.log(this.model);
  }
}
