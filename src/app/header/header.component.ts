import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  links = [
    { path: '/build', label: 'Build' },
    { path: '/view', label: 'View' },
    { path: '/validate', label: 'Validate' }
  ];
  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  closeModal() {
    this.showModal = false;
  }
}
