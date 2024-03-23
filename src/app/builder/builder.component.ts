import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  categories = [
    {
      name: 'Category 1',
      items: [
        { name: 'Item 1' },
        { name: 'Item 2' },
        { name: 'Item 3' },
      ]
    },
    {
      name: 'Category 2',
      items: [
        { name: 'Item 4' },
        { name: 'Item 5' },
        { name: 'Item 6' },
      ]
    },
    {
      name: 'Category 3',
      items: [
        { name: 'Item 7' },
        { name: 'Item 8' },
        { name: 'Item 9' },
      ]
    },
    {
      name: 'Category 4',
      items: [
        { name: 'Item 10', editting: true },
        { name: 'Item 11' },
        { name: 'Item 12' },
      ]
    }
  ];
  sortMethods = [
    { name: 'Types', active: true },
    { name: 'Tags', active: false },
  ];
}
