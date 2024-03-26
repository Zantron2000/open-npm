import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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
  errors: { [key: string]: string } = {};
  typeDeclaration: TypeDeclaration = JSON.parse(JSON.stringify(this.currentTypeDeclaration));

  ngOnInit() {
    this.typeDeclaration = this.newInstance ? this.typeDeclaration : JSON.parse(JSON.stringify(this.currentTypeDeclaration));
  }

  adjustHeight(target: EventTarget | null) {
    const textarea = target as HTMLTextAreaElement;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  submit(form: NgForm) {
    let hasErrors = false;
    if (this.typeDeclaration.name.trim() === '') {
      hasErrors = true;
      this.errors['name'] = 'Name is required';
    } else {
      delete this.errors['name'];
    }

    if (this.typeDeclaration.import.trim() === '') {
      hasErrors = true;
      this.errors['import'] = 'Import is required';
    } else {
      delete this.errors['import'];
    }

    if (this.typeDeclaration.declaration.trim() === '') {
      hasErrors = true;
      this.errors['declaration'] = 'Declaration is required';
    } else {
      delete this.errors['declaration'];
    }

    if (!hasErrors) {
      console.log('No Errors')
    }
  }
}
