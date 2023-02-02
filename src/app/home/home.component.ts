import { Component, OnInit } from '@angular/core';
import { InventoryAppService } from '../services/inventory-app.service';
import { ECommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public inventoryAppNewProducts: any = null;
  public eCommerceSales: any = null;
  public eCommerceRevenue: any = null;

  constructor(
    private inventoryAppService: InventoryAppService,
    private eCommerceService: ECommerceService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.inventoryAppService.getNewProducts().subscribe(data => this.inventoryAppNewProducts = data);
    this.eCommerceService.getSales().subscribe(data => this.eCommerceSales = data);
    this.eCommerceService.getRevenue().subscribe(data => this.eCommerceRevenue = data);
  }
}
