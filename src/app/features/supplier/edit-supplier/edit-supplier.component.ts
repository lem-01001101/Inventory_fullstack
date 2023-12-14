import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SupplierService } from '../services/supplier.service';
import { Supplier } from '../models/supplier.model';
import { UpdateSupplierRequest } from '../models/update-supplier-request.model';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit, OnDestroy {

  id: string | null = null; 

  paramSubscription?: Subscription;
  editSupplierSubscription?: Subscription;
  supplier? : Supplier;

  constructor(private route: ActivatedRoute, private supplierService: SupplierService, private router: Router){
    
  }

  ngOnInit(): void {
      this.paramSubscription = this.route.paramMap.subscribe({
        next: (params) => {
          this.id = params.get('id');

          if (this.id) {
            // get data from api for this supplier ID
            this.supplierService.getSupplierById(this.id).subscribe({
              next: (response) => {
                  this.supplier = response;
              }
            });
          }
        }
      });
  }

  onFormSubmit(): void {
    const updateSupplierRequest: UpdateSupplierRequest = {
      name: this.supplier?.name ?? '',
      urlHandle: this.supplier?.urlHandle ?? ''
    };

    // pass object to service
    if (this.id) {
      this.editSupplierSubscription = this.supplierService.updateSupplier(this.id, updateSupplierRequest)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/suppliers');
        }
      });
    }
  }

  onDelete(): void {
    if (this.id) {
      this.supplierService.deleteSupplier(this.id)
      .subscribe({
        next: (response) => {
          this.router.navigateByUrl('/admin/suppliers');
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.paramSubscription?.unsubscribe();
    this.editSupplierSubscription?.unsubscribe();
  }
}
