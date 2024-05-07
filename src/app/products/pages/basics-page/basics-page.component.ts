import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'leizar';
  public nameUpper: string = 'LEIZAR';
  public fullName: string = 'lEiZaR';

  public customDate: Date = new Date();
}
