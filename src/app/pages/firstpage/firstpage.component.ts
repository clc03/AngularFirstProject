import { Component } from '@angular/core';
import { CardCollectionComponent } from "../../ui/card-collection/card-collection.component";
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { KlDiscComponent } from "../../ui/kl-disc/kl-disc.component";

@Component({
  selector: 'app-firstpage',
  standalone: true,
  imports: [CardCollectionComponent, CarouselComponent, KlDiscComponent],
  templateUrl: './firstpage.component.html',
  styleUrl: './firstpage.component.scss'
})
export class FirstpageComponent {

}
