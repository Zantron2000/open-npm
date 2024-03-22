import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { __decorate } from "tslib"; // Import the tslib module

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
