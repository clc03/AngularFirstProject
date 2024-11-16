import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { cardcomponents } from '../../interface/interfaces';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})



export class CardsComponent {
  @Input() data: cardcomponents = {
    title: '',
    desc: '',
    image: ''
  };
}


// @Input() discription: string = '<---nothing--->';
// @Input() title: string = '';
// @Input() image: string = ''
