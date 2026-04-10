import {Component, OnInit, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './core/componenti/navbar/navbar';
import {Footer} from './core/componenti/footer/footer';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('pizzeria_toto');

  constructor(private meta: Meta, private titleS: Title) { }

  ngOnInit() {
    this.titleS.setTitle("Pizzeria Da Totò | Sant'Albano Stura");

    // I Meta Tag Social
    this.meta.addTags([
      { name: 'description', content: 'La vera pizza artigianale a Sant\'Albano Stura. Sfoglia il menù!' },
      { property: 'og:title', content: "Pizzeria Da Totò | Sant'Albano Stura" },
      { property: 'og:description', content: 'Vieni a provare le nostre specialità. Siamo a Sant\'Albano Stura!' },
      { property: 'og:image', content: 'https://datotosantalbano.it/assets/pizze/castelmagno.jpeg' },
      { property: 'og:url', content: 'https://datotosantalbano.it' }
    ]);
  }
}
