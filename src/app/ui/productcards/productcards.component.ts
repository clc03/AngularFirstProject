import { Component, Input } from '@angular/core';
import { productcards } from '../../interface/interfaces';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-productcards',
  standalone: true,
  imports: [SlicePipe],
  templateUrl: './productcards.component.html',
  styleUrl: './productcards.component.scss'
})
export class ProductcardsComponent {

  @Input() pro: productcards = {
    id: 0,
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
    rating: {
      rate: 0
    }
  };
}
