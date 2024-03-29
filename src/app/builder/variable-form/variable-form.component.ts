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
    value: '', type: '', examples: [{
      name: '', value: ''
    }]
  };
  @Input() newInstance: Boolean = true;
  errors: { [key: string]: string } = {};
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
  }

  removeExample(index: number) {
    this.variable.examples.splice(index, 1);

    if (this.variable.examples.length === 0) {
      this.addExample();
    }
  }
}
