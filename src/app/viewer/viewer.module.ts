// viewer.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from './viewer.component';
import { CodeEditorModule } from '@ngstack/code-editor';

@NgModule({
  declarations: [],
  imports: [CommonModule,ViewerComponent,CodeEditorModule.forRoot()],
  exports: [ViewerComponent] // Exporting the component to use it in other modules
})
export class ViewerModule {}