import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-type-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-form.component.html',
  styleUrl: './type-form.component.css'
})
export class TypeFormComponent {
  code = 'asdf\nasdf\nasdf\n'
}
