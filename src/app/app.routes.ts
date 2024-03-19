import { Routes } from '@angular/router';
import { BuilderComponent } from './builder/builder.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ValidaterComponent } from './validater/validater.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'build', component: BuilderComponent },
    { path: 'view', component: ViewerComponent },
    { path: 'validate', component: ValidaterComponent },
    { path: '', component: HomeComponent }
];
