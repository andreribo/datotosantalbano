import {Component, HostListener, signal} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    const scrollY = window.scrollY;
    this.isScrolled = scrollY > 80;

    const opacity = Math.min(0.25 + (scrollY / 200) * 0.72, 0.97);
    const navbar = document.querySelector('.toto-navbar') as HTMLElement;
    if (navbar) {
      if (this.isScrolled) {
        navbar.style.background = 'rgba(8, 6, 4, 0.97)';
      } else {
        navbar.style.background = `rgba(8, 6, 4, ${opacity.toFixed(2)})`;
      }
    }
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu()  { this.menuOpen = false; }
}
