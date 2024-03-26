import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

type TypeDeclaration = {
  name: string;
  import: string;
  github: string;
  description: string;
  declaration: String;
};

@Component({
  selector: 'app-type-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './type-form.component.html',
  styleUrl: './type-form.component.css'
})
export class TypeFormComponent {
  @Input() currentTypeDeclaration: TypeDeclaration = {
    name: '', import: '', github: '', description: '',
    declaration: ''
  };
  @Input() newInstance: Boolean = true;
  typeDeclaration: TypeDeclaration = JSON.parse(JSON.stringify(this.currentTypeDeclaration));

  ngOnInit() {
    this.typeDeclaration = this.newInstance ? this.typeDeclaration : JSON.parse(JSON.stringify(this.currentTypeDeclaration));
  }

  adjustHeight(target: EventTarget | null) {
    const textarea = target as HTMLTextAreaElement;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
