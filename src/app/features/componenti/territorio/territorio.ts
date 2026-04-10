import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'territorio',
  imports: [RouterLink],
  templateUrl: './territorio.html',
  styleUrl: './territorio.css',
})
export class Territorio implements AfterViewInit {
  prodotti = [
    {
      nome: 'Burrata di Andria',
      categoria: 'Latticini',
      origine: 'Puglia',
      descrizione: "La regina dei latticini pugliesi: guscio di mozzarella che racchiude stracciatella cremosa e panna. La utilizziamo fresca, in uscita, per non alterarne la texture irresistibile.",
      foto: 'burratadiandria.png',
      layout: 'hero'
    },
    {
      nome: 'Crudo di Parma',
      categoria: 'Salumi',
      origine: 'Emilia Romagna',
      descrizione: "Stagionato minimo 24 mesi, dolce e profumato. Solo cosce selezionate di suino italiano, sale marino e aria delle colline parmensi.",
      foto: 'crudodiparma.png',
      layout: 'normale'
    },
    {
      nome: 'Mozzarella Fior di Latte',
      categoria: 'Latticini',
      origine: 'Piemonte',
      descrizione: "100% latte piemontese, prodotta localmente. La nostra base: fresca, filante, senza compromessi. La differenza si sente al primo morso.",
      foto: 'mozzarellafiordilatte.png',
      layout: 'normale'
    },
    {
      nome: 'Prosciutto Cotto Casa Modena',
      categoria: 'Salumi',
      origine: 'Emilia Romagna',
      descrizione: "Alta qualità garantita dal disciplinare Casa Modena. Sapore delicato e naturale, senza polifosfati aggiunti. Il prosciutto cotto che ti sorprende.",
      foto: 'cottocasamodena.png',
      layout: 'normale'
    },
    {
      nome: 'Spianata Calabra Piccante',
      categoria: 'Salumi piccanti',
      origine: 'Calabria',
      descrizione: "Insaccato di suino macinato grosso, speziato con peperoncino calabrese. Saporita, decisa, autentica. Non per i deboli di cuore — ma irresistibile per tutti gli altri.",
      foto: 'spianatacalabrapiccante.png',
      layout: 'grande'
    },
    {
      nome: 'Gorgonzola Biraghi',
      categoria: 'Formaggi',
      origine: 'Piemonte / Lombardia',
      descrizione: "Cremoso e dal gusto avvolgente. Il Biraghi è sinonimo di qualità nella tradizione erborinata italiana. Lo usiamo nelle bianche e nelle speciali per il suo carattere unico.",
      foto: 'gorgobiraghi.png',
      layout: 'normale'
    },
    {
      nome: 'Peperoni di Carmagnola',
      categoria: 'Ortofrutta locale',
      origine: 'Carmagnola, CN',
      descrizione: "IGP. Carnosi, dolci e profumati. Coltivati nelle pianure del Carmagnolese da secoli. Protagonisti assoluti della nostra pizza La Carmagnola.",
      foto: 'peperonidicarmagnola.png',
      layout: 'normale'
    },
    {
      nome: 'Porri di Cervere',
      categoria: 'Ortofrutta locale',
      origine: 'Cervere, CN',
      descrizione: "Presidio Slow Food. Lunghi, bianchi e delicatissimi, i porri di Cervere sono un patrimonio gastronomico piemontese. Li usiamo nella pizza La Cervere in loro onore.",
      foto: 'porridicervere.png',
      layout: 'normale'
    },
    {
      nome: 'Nocciole delle Langhe',
      categoria: 'Frutta secca',
      origine: 'Langhe, CN',
      descrizione: "Le nocciole più pregiate d'Italia, coltivate sulle colline UNESCO delle Langhe. Dolci, croccanti, inconfondibili. Le usiamo nel Castelmagno.",
      foto: 'noccioledellelanghe.png',
      layout: 'normale'
    },
    {
      nome: 'Salsiccia di Bra',
      categoria: 'Salumi piemontesi',
      origine: 'Bra, CN',
      descrizione: "Presidio Slow Food. L'unica salsiccia italiana che per tradizione si mangia cruda. Macinato grosso di manzo, lardo, spezie. La nostra firma piemontese per eccellenza.",
      foto: 'salsicciadibra.png',
      layout: 'normale'
    },
    {
      nome: 'Castelmagno DOP',
      categoria: 'Formaggi DOP',
      origine: 'Castelmagno, CN',
      descrizione: "Uno dei formaggi più antichi e pregiati d'Italia. Prodotto solo in tre comuni della Valle Grana. Sapore intenso, leggermente piccante, con venature erborinate. La nostra pizza Castelmagno è un tributo al territorio.",
      foto: 'castelmagno.png',
      layout: 'grande'
    },
    {
      nome: 'Carne di Fassona Piemontese',
      categoria: 'Carni pregiate',
      origine: 'Piemonte',
      descrizione: "Razza autoctona piemontese, nota per la muscolatura doppia e la carne magra di altissima qualità. La usiamo per i nostri hamburger: sapore intenso, tenerezza unica.",
      foto: 'carnedifassona.png',
      layout: 'normale'
    },
    {
      nome: 'Bufale 100% Piemontesi',
      categoria: 'Latticini',
      origine: 'Piemonte',
      descrizione: "Allevate in Piemonte, a chilometri zero. La mozzarella di bufala piemontese ha un sapore più delicato rispetto a quella campana, ma la stessa cremosità avvolgente.",
      foto: 'bufala.png',
      layout: 'normale'
    },
    {
      nome: 'Farina Molino Fruttero',
      categoria: 'Farine',
      origine: 'Cuneo',
      descrizione: "Macinata a pietra nel cuneese, da grani italiani selezionati. La base di tutto: senza una buona farina non esiste una buona pizza. La nostra lievitazione 48h parte da qui.",
      foto: 'farina.jpg',
      layout: 'normale'
    },
    {
      nome: 'Pomodoro San Marzano',
      categoria: 'Pomodoro',
      origine: 'Campania',
      descrizione: "DOP, coltivato nell'Agro Sarnese-Nocerino in Campania. Polpa densa, dolce e con poca acidità: è il pomodoro della vera pizza napoletana. La base di tutte le nostre rosse.",
      foto: 'pomodorosanmarzano.png',
      layout: 'normale'
    }
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.aos').forEach(el => observer.observe(el));
  }

}
