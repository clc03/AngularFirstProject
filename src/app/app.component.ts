import { Component } from '@angular/core';
import { CarouselComponent } from "./ui/carousel/carousel.component";
import { CardsComponent } from "./ui/cards/cards.component";
import { RouterOutlet } from '@angular/router';
import { CardCollectionComponent } from "./ui/card-collection/card-collection.component";
import { KlDiscComponent } from "./ui/kl-disc/kl-disc.component";
import { PhotoCreditComponent } from "./ui/photo-credit/photo-credit.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselComponent, CardsComponent, CardCollectionComponent, KlDiscComponent, PhotoCreditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Chriswin Lingson';
}
