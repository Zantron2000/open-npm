import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CodeModel } from '@ngstack/code-editor';
import { CodeEditorModule } from '@ngstack/code-editor';

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [RouterLink,CodeEditorModule],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {
  theme = 'vs-dark';

  model: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}'
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true
    }
  };

  onCodeChanged(value: string){
    console.log('CODE CHANGED', value);
  }

  // Remove npm package dependencies and only keep Angular module dependencies
  dependencies: string[] = [
    '@angular/core',
    '@angular/common',
    '@ngstack/code-editor'
  ];
  
}


