import { Routes } from '@angular/router';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { HomeComponent } from './pages/home/home.component';
import { SecoundpageComponent } from './pages/secoundpage/secoundpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
{
  path: '' , component: HomeComponent
},
{
  path: 'firstpage' , component: FirstpageComponent
},
{
  path: 'secoundpage' , component: SecoundpageComponent
},
{
  path: 'thirdpage' ,component:ThirdpageComponent
},
{
  path: 'productpage' ,component:ProductsComponent
}

];
