import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OtherComponent } from './pages/other/other.component';

export const routes: Routes = [
    {path:  'home', component:  HomeComponent},
    {path:  'other', component:  OtherComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
