import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductcardsComponent } from '../productcards/productcards.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-product-carosel',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    ProductcardsComponent,
  ],
  templateUrl: './product-carosel.component.html',
  styleUrl: './product-carosel.component.scss',
})
export class ProductCaroselComponent {
  constructor(private api: ApiService) {}

  @Input() cat: any = '';
  products: any;

  ngOnInit() {
    console.log(this.cat);

    this.api.getProductByCategories(this.cat).subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 900,
    navText: ['<-', '->'],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore: any;
}
