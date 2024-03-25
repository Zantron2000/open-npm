import { Component, EventEmitter, Input, Output } from '@angular/core';

enum FormTypes {
  Package = 0,
  Categories = 1,
  TypeDeclaration = 2,
  Variable = 3,
  Function = 4,
  Class = 5,
}

@Component({
  selector: 'app-categories-form',
  standalone: true,
  imports: [],
  templateUrl: './categories-form.component.html',
  styleUrl: './categories-form.component.css'
})
export class CategoriesFormComponent {
  @Output() selectCategory = new EventEmitter<FormTypes>();
  formTypes = FormTypes;

  selectCategoryType(type: FormTypes) {
    this.selectCategory.emit(type);
  }
}
