import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-logtem',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './logtem.component.html',
  styleUrl: './logtem.component.css'
  
})
export class LogtemComponent {
user: any ={
  name: '',
  password: '',
  email: '',
};

onSubmit(){
  console.log(this.user);
}

}

