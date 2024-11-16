import { Component } from '@angular/core';
import { CardCollectionComponent } from "../../ui/card-collection/card-collection.component";
import { ApiService } from '../../api.service';
import { ProductcardsComponent } from "../../ui/productcards/productcards.component";
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { ProductCaroselComponent } from "../../ui/product-carosel/product-carosel.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardCollectionComponent, ProductcardsComponent, CarouselComponent, ProductCaroselComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {


constructor(public api: ApiService){}

data:any;
categories:any;

ngOnInit(){

  this.categories =this.api.getCategories().subscribe((res:any) =>{
    this.categories = res;
  })
}
}
