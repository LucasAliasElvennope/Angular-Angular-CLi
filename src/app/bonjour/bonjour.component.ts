import { Component } from '@angular/core';
import { BonjourService } from '../bonjour.service'; // ← importe ton service

@Component({
  selector: 'app-bonjour',
  standalone: true,
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.scss']
})
export class BonjourComponent {
  message: string = '';

  constructor(private bonjourService: BonjourService) {
    this.message = this.bonjourService.getMessage(); // ← récupère le message du service
  }
}
