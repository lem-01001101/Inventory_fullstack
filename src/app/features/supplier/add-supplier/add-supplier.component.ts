import { Component, OnDestroy } from '@angular/core';
import { AddSupplierRequest } from '../models/add-supplier-request.model';
import { SupplierService } from '../services/supplier.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnDestroy {

  model:AddSupplierRequest; 
  private addSupplierSubscription?: Subscription;

  constructor (private supplierService: SupplierService,
    private router: Router) {
    this.model = {
      name: '',
      urlHandle: ''
    };
  }


  onFormSubmit() {
    this.addSupplierSubscription =  this.supplierService.addSupplier(this.model)
    .subscribe({
      next: (reponse) => {
        this.router.navigateByUrl('/admin/suppliers');
      }
    })
  }
  ngOnDestroy(): void {
    this.addSupplierSubscription?.unsubscribe();
  }
}
