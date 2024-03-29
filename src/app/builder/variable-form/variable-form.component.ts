import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

type VariableErrors = {
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
}

@Component({
  selector: 'app-variable-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './variable-form.component.html',
  styleUrl: './variable-form.component.css'
})
export class VariableFormComponent {
  @Output() variableCreated = new EventEmitter<Variable>();
  @Output() cancelUpdates = new EventEmitter();
  @Input() currentVariable: Variable = {
    name: '', import: '', github: '', description: '',
    value: '', type: '', examples: []
  };
  @Input() newInstance: Boolean = true;
  errors: VariableErrors = { name: '', import: '', github: '', description: '', type: '', value: '', examples: [] };
  variable: Variable = JSON.parse(JSON.stringify(this.currentVariable));

  ngOnInit() {
    this.variable = this.newInstance ? this.variable : JSON.parse(JSON.stringify(this.currentVariable));
  }

  adjustHeight(target: EventTarget | null) {
    const textarea = target as HTMLTextAreaElement;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  submit(form: NgForm) {
    let hasErrors = false;

    if (!this.variable.name.trim()) {
      this.errors.name = 'Name is required';
      hasErrors = true;
    } else {
      this.errors.name = '';
    }

    if (!this.variable.import.trim()) {
      this.errors.import = 'Import is required';
      hasErrors = true;
    } else {
      this.errors.import = '';
    }

    this.variable.examples.forEach((example, index) => {
      if (!example.name.trim()) {
        this.errors.examples[index].name = 'Name is required';
        hasErrors = true;
      } else {
        this.errors.examples[index].name = '';
      }

      if (!example.value.trim()) {
        this.errors.examples[index].value = 'Value is required';
        hasErrors = true;
      } else {
        this.errors.examples[index].value = '';
      }
    });

    console.log(this.errors)

    if (!hasErrors) {
      this.variableCreated.emit(this.variable);
    }
  }

  cancelChanges() {
    this.cancelUpdates.emit();
  }

  addExample() {
    this.variable.examples.push({
      name: '',
      value: ''
    });
    this.errors.examples.push({ name: '', value: '' });
  }

  removeExample(index: number) {
    this.variable.examples.splice(index, 1);
    this.errors.examples.splice(index, 1);
  }
}
