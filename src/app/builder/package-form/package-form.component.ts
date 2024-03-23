import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-package-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.css'
})
export class PackageFormComponent {
  package = {
    name: '',
    description: '',
    version: ''
  };
}
