import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogtemComponent } from './logtem/logtem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogtemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FRM';
}
