import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ItemPostService } from '../services/item-post.service';
import { Item } from '../models/item-post.model';
import { SupplierService } from '../../supplier/services/supplier.service';
import { Supplier } from '../../supplier/models/supplier.model';
import { UpdateItem } from '../models/update-item.model';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit, OnDestroy {

  id: string | null = null;
  model?: Item;
  supplier$? : Observable<Supplier[]>;
  selectedSupplier?: string[]

  routeSubscription?: Subscription;
  updateItemSubscription?: Subscription;
  getItemSubscription?: Subscription;
  deleteItemSubscription? : Subscription;

  constructor(private route: ActivatedRoute, private itemPostService: ItemPostService, private supplierService: SupplierService, private router: Router){

  }

  
  ngOnInit(): void {

    this.supplier$ = this.supplierService.getAllSuppliers();


    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        // get item from api
        if(this.id){
          this.getItemSubscription = this.itemPostService.getItemById(this.id).subscribe({
            next: (response) => {
              this.model = response;
              this.selectedSupplier = response.supplier.map(x => x.id);
            }
          });
        }
      }
    });
  }

  onFormSubmit(): void {
    // convert model to request object
    if (this.model && this.id) {
      var updateItem: UpdateItem = {
        name : this.model.name,
        amount : this.model.amount,
        category : this.model.category,
        note : this.model.note,
        lastInventory : this.model.lastInventory,
        lastManager : this.model.lastManager,
        supplier : this.selectedSupplier ?? []
      };

      this.updateItemSubscription = this.itemPostService.updateItem(this.id, updateItem)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/items');
        }
      })
    }
  }

  onDelete(): void {
    if(this.id) {
      this.deleteItemSubscription = this.itemPostService.deleteItem(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/items');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.updateItemSubscription?.unsubscribe();
    this.getItemSubscription?.unsubscribe();
    this.deleteItemSubscription?.unsubscribe();
  }
}
