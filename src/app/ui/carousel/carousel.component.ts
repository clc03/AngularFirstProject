import { Component,Input } from '@angular/core';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  carouselList = [
    { id: 1,
      image: 'images/beach.jpg'},
    { id: 2,
      image: 'images/monkey.jpg'},
    { id:3,
      image: 'images/hills.jpg'}
  ];
}
