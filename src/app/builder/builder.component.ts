import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PackageFormComponent } from './package-form/package-form.component';

type Category = {
  name: string;
  items: {
    name: string;
    editting: boolean;
  }[];
};

type SortMethod = {
  name: string;
  active: boolean;
};

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, PackageFormComponent],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  categories: Category[] = [];

  sortMethods: SortMethod[] = [
    { name: 'Types', active: true },
    { name: 'Tags', active: false },
  ];
}
