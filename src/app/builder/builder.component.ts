import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PackageFormComponent } from './package-form/package-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { TypeFormComponent } from './type-form/type-form.component';

type Category = {
  name: string;
  form: FormTypes;
  items: {
    name: string;
    editting: boolean;
  }[];
};

type SortMethod = {
  name: string;
  active: boolean;
};

type Package = {
  name: string;
  description: string;
  version: string;
};

enum FormTypes {
  Package = 0,
  Categories = 1,
  TypeDeclaration = 2,
  Variable = 3,
  Function = 4,
  Class = 5,
}

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, PackageFormComponent, CategoriesFormComponent, TypeFormComponent],
  templateUrl: './builder.component.html',
  styleUrl: './builder.component.css'
})
export class BuilderComponent {
  categories: Category[] = [];
  package: Package = {
    name: '',
    description: '',
    version: '',
  };
  formTypes = FormTypes;
  activeForm = FormTypes.TypeDeclaration;
  activeCategory: Category | null = null;
  editting = false;

  sortMethods: SortMethod[] = [
    { name: 'Types', active: true },
    { name: 'Tags', active: false },
  ];

  updatePackage(newPackage: Package) {
    this.package = newPackage;
    this.activeForm = FormTypes.Categories;

    const packageIndex = this.categories.findIndex((category) => category.form === FormTypes.Package);
    if (packageIndex === -1) {
      this.categories.push({
        name: newPackage.name,
        form: FormTypes.Package,
        items: [
          { name: 'Package Data', editting: false }
        ]
      });
    } else {
      this.categories[packageIndex] = {
        name: newPackage.name,
        form: FormTypes.Package,
        items: [
          { name: 'Package Data', editting: false }
        ]
      };
    }
  }

  openEditor(category: Category) {
    this.activeForm = category.form;
    this.editting = true;
  }

  selectComponent(formType: FormTypes) {
    this.activeForm = formType;
  }

  cancelEdit() {
    this.editting = false;
    this.activeForm = FormTypes.Categories;
  }
}
