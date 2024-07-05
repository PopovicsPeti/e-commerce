import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class AppComponent implements OnInit{

    ngOnInit() {
      localStorage.setItem('authorization_token', 'UG9wb3ZpY3NQZXRpOlRFU1RfUEFTU1dPUkQ=');
    }
}
