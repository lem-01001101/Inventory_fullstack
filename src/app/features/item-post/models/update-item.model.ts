export interface UpdateItem {
    name: string;
    amount: string; 
    category: string;
    note: string;
    lastManager: string;
    lastInventory: Date;
    supplier: string[];
}