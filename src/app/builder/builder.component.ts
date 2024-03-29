import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PackageFormComponent } from './package-form/package-form.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { TypeFormComponent } from './type-form/type-form.component';
import { VariableFormComponent } from './variable-form/variable-form.component';

type CategoryItem = {
  name: string;
  editting: boolean;
};

type Category = {
  name: string;
  form: FormTypes;
  items: CategoryItem[];
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

type TypeDeclaration = {
  name: string;
  import: string;
  github: string;
  description: string;
  declaration: String;
};

enum FormTypes {
  Package = 0,
  Categories = 1,
  TypeDeclaration = 2,
  Variable = 3,
  Function = 4,
  Class = 5,
}

type Variable = {
  name: string;
  import: string;
  github: string;
  description: string;
  type: string;
  value: string;
  examples: {
    name: string;
    value: string;
  }[];
};

@Component({
  selector: 'app-builder',
  standalone: true,
  imports: [CommonModule, PackageFormComponent, CategoriesFormComponent, TypeFormComponent, VariableFormComponent],
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
  typeDeclarations: TypeDeclaration[] = [];
  variables: Variable[] = [];
  formTypes = FormTypes;
  activeForm = FormTypes.Package;
  activeCategoryItem: CategoryItem | null = null;
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

  openEditor(category: Category, categoryItem: CategoryItem) {
    if (this.activeCategoryItem) {
      this.activeCategoryItem.editting = false;
    }

    this.activeForm = category.form;
    this.editting = true;
    this.activeCategoryItem = categoryItem;
    this.activeCategoryItem.editting = true;
  }

  selectComponent(formType: FormTypes) {
    this.activeForm = formType;
  }

  cancelEdit() {
    this.editting = false;
    this.activeForm = FormTypes.Categories;
    if (this.activeCategoryItem) {
      this.activeCategoryItem.editting = false;
    }
    this.activeCategoryItem = null;
  }

  upsertTypeDeclaration(typeDeclaration: TypeDeclaration) {
    this.activeForm = FormTypes.Categories;
    const typeIndex = this.typeDeclarations.findIndex((type) => type.name === this.activeCategoryItem?.name);
    if (typeIndex === -1) {
      this.typeDeclarations.push(typeDeclaration);
    } else {
      this.typeDeclarations[typeIndex] = typeDeclaration;
    }

    this.upsertCategoryItem('Types', typeDeclaration.name, FormTypes.TypeDeclaration);
  }

  upsertVariable(variable: Variable) {
    this.activeForm = FormTypes.Categories;
    const variableIndex = this.variables.findIndex((variable) => variable.name === this.activeCategoryItem?.name);
    if (variableIndex === -1) {
      this.variables.push(variable);
    } else {
      this.variables[variableIndex] = variable;
    }

    this.upsertCategoryItem('Variables', variable.name, FormTypes.Variable);
  }

  upsertCategoryItem(categoryName: string, itemName: string, form: FormTypes) {
    const categoryIndex = this.categories.findIndex((category) => category.name === categoryName);

    if (categoryIndex === -1) {
      this.categories.push({
        name: categoryName,
        form: form,
        items: [
          { name: itemName, editting: false }
        ]
      });
    } else {
      const itemIndex = this.categories[categoryIndex].items.findIndex((item) => item.name === this.activeCategoryItem?.name);
      if (itemIndex === -1) {
        this.categories[categoryIndex].items.push({ name: itemName, editting: false });
      } else {
        this.categories[categoryIndex].items[itemIndex] = { name: itemName, editting: false };
      }
    }
  }

  getEditTypeDeclaration() {
    return this.typeDeclarations.find((type) => type.name === this.activeCategoryItem?.name) || {
      name: '',
      import: '',
      github: '',
      description: '',
      declaration: '',
    };
  }

  getEditVariable() {
    return this.variables.find((variable) => variable.name === this.activeCategoryItem?.name) || {
      name: '',
      import: '',
      github: '',
      description: '',
      type: '',
      value: '',
      examples: [],
    };
  }
}
