import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class BonjourService {
  getMessage(): string {
    return 'Bonjour depuis le service ✨';
  }
}
