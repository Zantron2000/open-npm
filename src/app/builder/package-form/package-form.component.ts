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
  @Output() cancelUpdates = new EventEmitter();
  @Input() currentPackage: Package = { name: '', description: '', version: '' };
  @Input() newInstance: Boolean = true;
  submitted = false;
  package: Package = JSON.parse(JSON.stringify(this.currentPackage));

  ngOnInit() {
    this.package = this.newInstance ? this.package : JSON.parse(JSON.stringify(this.currentPackage));
  }

  submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.packageCreated.emit(this.package);
      this.submitted = false;
    }
  }

  cancelChanges() {
    this.cancelUpdates.emit();
  }
}
