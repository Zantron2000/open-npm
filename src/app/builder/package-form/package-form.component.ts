import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

type Package = {
  name: string;
  description: string;
  version: string;
};

@Component({
  selector: 'app-package-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './package-form.component.html',
  styleUrl: './package-form.component.css'
})
export class PackageFormComponent {
  @Output() packageCreated = new EventEmitter<Package>();
  @Input() package: Package = { name: '', description: '', version: '' };
  submitted = false;

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.packageCreated.emit(this.package);
      this.submitted = false;
    }
  }
}
