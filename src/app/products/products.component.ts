import { Component, OnInit } from '@angular/core';
import { InventoryAppService } from '../services/inventory-app.service';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public eCommerceSales: any = null;
  public inventoryAppProducts: any = null;
  public value = 'Basic Tee';
  public value1 = '15.99';
  public value2 = '99';
  public value3 = 'M050';

  constructor(
    private eCommerceService: ECommerceService,
    private inventoryAppService: InventoryAppService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.inventoryAppService.getProducts().subscribe(data => this.inventoryAppProducts = data);
    this.eCommerceService.getSales().subscribe(data => this.eCommerceSales = data);
  }
}
