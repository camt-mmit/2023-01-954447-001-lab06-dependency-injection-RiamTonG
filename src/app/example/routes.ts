import { Routes } from '@angular/router';
import { ExampleInputComponent } from './router/example-input/example-input.component';
import { ExampleComponent } from './router/example/example.component';

export const routes: Routes = [
  {
    path: '',
    component: ExampleComponent,
    children: [
      { path: '', redirectTo: 'input', pathMatch: 'full' },
      { path: 'input', component: ExampleInputComponent },
    ],
  },
];
