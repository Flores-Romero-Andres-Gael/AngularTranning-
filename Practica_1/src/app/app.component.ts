import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonaComponent, PersonasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Mundo!!';
}
