import { Supplier } from "../../supplier/models/supplier.model";

export interface Item {
    id: string;
    name: string;
    amount: string; 
    category: string;
    note: string;
    lastManager: string;
    lastInventory: Date;
    supplier: Supplier[];
}