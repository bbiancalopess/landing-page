import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgOptimizedImage,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  goToInsta(){
    window.location.href = "https://instagram.com"
  }

  goToFacebook(){
    window.location.href = "https://facebook.com"
  }
}
