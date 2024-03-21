import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  columns = [
    {
      header: 'Company',
      links: [
        { label: 'About', url: '/about' },
        { label: 'Careers', url: '/careers' },
        { label: 'Press', url: '/press' },
      ]
    },
    {
      header: 'Resources',
      links: [
        { label: 'Contact', url: '/contact' },
        { label: 'Support', url: '/support' },
        { label: 'FAQ', url: '/faq' },
      ]
    },
    {
      header: 'Policies',
      links: [
        { label: 'Terms', url: '/terms' },
        { label: 'Privacy', url: '/privacy' },
        { label: 'Cookie Settings', url: '/cookies' },
        { label: 'Acknowledgements', url: '/acknowledgements' },
      ]
    }
  ]
}
