import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type Function = {
  name: string;
  import: string;
  github: string;
  description: string;
  examples: {
    name: string;
    value: string;
  }[];
  params: {
    name: string;
    type: string;
    description: string;
    default: string;
    required: boolean;
  }[];
  returns: {
    required: boolean;
    type: string;
    description: string;
  };
}

type FunctionErrors = {
  name: string;
  import: string;
  github: string;
  description: string;
  examples: {
    name: string;
    value: string;
  }[];
  params: {
    name: string;
    type: string;
    description: string;
    default: string;
    required: string;
  }[];
  returns: {
    required: string;
    type: string;
    description: string;
  };
}

@Component({
  selector: 'app-function-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './function-form.component.html',
  styleUrl: './function-form.component.css'
})
export class FunctionFormComponent {
  @Output() functionCreated = new EventEmitter<Function>();
  @Output() cancelUpdates = new EventEmitter();
  @Input() currentFunction: Function = {
    name: '', import: '', github: '', description: '',
    examples: [], params: [], returns: { required: true, type: '', description: '' }
  };
  @Input() newInstance: Boolean = true;
  errors: FunctionErrors = { name: '', import: '', github: '', description: '', examples: [], params: [], returns: { required: '', type: '', description: '' } };
  function: Function = JSON.parse(JSON.stringify(this.currentFunction));

  ngOnInit() {
    this.function = this.newInstance ? this.function : JSON.parse(JSON.stringify(this.currentFunction));
  }

  adjustHeight(target: EventTarget | null) {
    const textarea = target as HTMLTextAreaElement;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  cancelChanges() {
    this.cancelUpdates.emit();
  }

  addExample() {
    this.function.examples.push({
      name: '',
      value: ''
    });
    this.errors.examples.push({ name: '', value: '' });
  }

  removeExample(index: number) {
    this.function.examples.splice(index, 1);
    this.errors.examples.splice(index, 1);
  }

  addParam() {
    this.function.params.push({
      name: '',
      type: '',
      description: '',
      default: '',
      required: true
    });
    this.errors.params.push({ name: '', type: '', description: '', default: '', required: '' });
  }

  removeParam(index: number) {
    this.function.params.splice(index, 1);
    this.errors.params.splice(index, 1);
  }

  submit(form: NgForm) {

  }
}
