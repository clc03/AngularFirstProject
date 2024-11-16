import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { cardcomponents } from '../../interface/interfaces';
import { CardsComponent } from "../../ui/cards/cards.component";

@Component({
  selector: 'app-secoundpage',
  standalone: true,
  imports: [CarouselComponent, CardsComponent],
  templateUrl: './secoundpage.component.html',
  styleUrl: './secoundpage.component.scss'
})
export class SecoundpageComponent {

  DUcardList: cardcomponents[] =[
    {

      "title": "Thiruvananthapuram",
      "image": "images/experionLogo.png",
      "desc": "Du1"

}


]


}
