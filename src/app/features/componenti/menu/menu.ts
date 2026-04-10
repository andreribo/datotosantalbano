import { Component, AfterViewInit } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {threshold: 0.1});

    document.querySelectorAll('.aos').forEach(el => observer.observe(el));
  }

  classiche: any[] = [
    {
      nome: "Prosciutto",
      ingredienti: "Pomodoro, Mozzarella, Prosciutto Cotto Casa Modena",
      prezzo: "7,00",
      extra: "+ Bufala DOP | 3",
      percorso: "assets/pizze/prosciutto.jpeg"
    },
    {
      nome: "4 Stagioni",
      ingredienti: "Pomodoro, Mozzarella, Prosciutto, Funghi, Carciofini, Olive",
      prezzo: "10,00",
      extra: "+ Salamino | 2",
      preferita: true,
      percorso: "assets/pizze/quattrostagioniplus.jpeg"
    },
    {
      nome: "Vegetariana",
      ingredienti: "Pomodoro, Mozzarella, Zucchine, Melanzane, Peperoni",
      prezzo: "9,00",
      percorso: "assets/pizze/vegetariana.jpeg"
    },
    {
      nome: "4 Formaggi",
      ingredienti: "Pomodoro, Mozzarella, Fontina, Gorgonzola, Grana",
      prezzo: "8,50",
      preferita: true,
      percorso: "assets/pizze/quattroformaggi.jpeg"
    },
    {
      nome: "Bufalina",
      ingredienti: "Pomodoro, Mozzarella Di Bufala",
      prezzo: "9,00",
      percorso: "assets/pizze/bufalina.jpeg"
    },
    {
      nome: "Tonno a Modo Nostro",
      ingredienti: "Pomodoro, Mozzarella, Tonno, Cipolla, Peperoni",
      prezzo: "10,00",
      percorso: "assets/pizze/tonnoamodonostro.jpeg"
    },
    {
      nome: "Stracchino e Rucola",
      ingredienti: "Pomodoro, Mozzarella, Stracchino, Rucola",
      prezzo: "8,50",
      percorso: ""
    },
    {
      nome: "La Diavola",
      ingredienti: "Pomodoro, Mozzarella, Schiacciata Calabra",
      prezzo: "7,50",
      extra: "+ Bufala DOP | 3",
      preferita: true,
      percorso: "assets/pizze/diavola.jpeg"
    },
    {
      nome: "Patatosa",
      ingredienti: "Pomodoro, Mozzarella, Patatine Fritte",
      prezzo: "7,00",
      percorso: "assets/pizze/patatosa.jpeg"
    },
    {
      nome: "Wurstel",
      ingredienti: "Pomodoro, Mozzarella, Wurstel",
      prezzo: "7,00",
      extra: "+ Patatine Fritte | 2",
      percorso: "assets/pizze/wurstel.jpeg"
    },
    {
      nome: "Speck e Brie",
      ingredienti: "Pomodoro, Mozzarella, Speck, Brie",
      prezzo: "8,50",
      percorso: "assets/pizze/speckbrie.jpeg"
    },
    {
      nome: "Prosciutto 2.0",
      ingredienti: "Pomodoro, Mozzarella Fiordilatte, Prosciutto Cotto di Praga",
      prezzo: "8,50",
      percorso: ""
    },
    {
      nome: "Prosciutto Deluxe",
      ingredienti: "Pomodoro, Bufala DOP, Prosciutto Cotto di Praga",
      prezzo: "11,50",
      percorso: ""
    }
  ];

  ironiche: any[] = [
    {
      nome: "Non Dirlo Alla Suocera",
      ingredienti: "Fiordilatte, Porcini e Salsiccia di Bra",
      prezzo: "15,00",
      descrizione: "...perché penserà che la sua non sarà mai così buona",
      percorso: "assets/pizze/nondirloallasuocera.jpeg"
    },
    {
      nome: "Non Dirlo Al Cameriere",
      ingredienti: "Fiordilatte, Gorgonzola, Salsiccia di Bra, Noci",
      prezzo: "14,00",
      descrizione: "...così non ti ruberà una fetta",
      percorso: ""
    },
    {
      nome: "Non Dirlo A Nessuno",
      ingredienti: "Pomodoro, Fiordilatte, Salsiccia di Bra, Cipolla Rossa Caramellata, Scamorza affumicata",
      prezzo: "13,00",
      descrizione: "...troppo buona per condividerla",
      percorso: "assets/pizze/nondirloanessuno.jpeg"
    },
    {
      nome: "Non Dirlo Al Portafoglio",
      ingredienti: "Pomodoro, Fiordilatte, Salame cotto, Robiola e Crema al Tartufo",
      prezzo: "17,00",
      descrizione: "...perché sa già che ti sei fatto un regalo costoso",
      percorso: ""
    },
    {
      nome: "Non Dirlo Al Palestrato",
      ingredienti: "Bufala, Zucchine fritte e Gamberi",
      prezzo: "13,00",
      descrizione: "...perché è Fit ma solo all'apparenza",
      percorso: "assets/pizze/palestrato.jpeg"
    },
    {
      nome: "Non Dirlo Al Prete",
      ingredienti: "Fiordilatte, Castelmagno, Rucola, Pomodorini",
      prezzo: "12,00",
      descrizione: "...perché è un vero peccato di gola",
      percorso: "assets/pizze/nondirloalprete.jpeg"
    },
    {
      nome: "Non Dirlo Al Postino",
      ingredienti: "Pomodoro e Fiordilatte Frutti di Mare spadellati, Bufala e Porcini",
      prezzo: "14,00",
      descrizione: "...si innamora al primo morso e non ti consegna più le lettere",
      percorso: ""
    },
    {
      nome: "Non Dirlo Alla Regina D'Inghilterra",
      ingredienti: "Fiordilatte, Insalata, Pomodorini Battuta di Fassona, Grana",
      prezzo: "17,00",
      descrizione: "...se lo sapesse abbandonerebbe il regno per un'altra fetta",
      percorso: "assets/pizze/nondirloallareginadinghilterra.jpeg"
    }
  ];

  eccellenze: any[] = [
    {
      nome: "La Cervere",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Porri Di Cervere, Gorgonzola, Salsiccia",
      prezzo: "10,00",
      preferita: true,
      percorso: "assets/pizze/cervere.jpeg"
    },
    {
      nome: "La Carmagnola",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Peperoni Di Carmagnola, Bagna Cauda Prodotta Da Noi",
      prezzo: "10,00",
      percorso: ""
    },
    {
      nome: "La Castelmagno",
      ingredienti: "Mozzarella Fiordilatte, Castelmagno, Nocciole Delle Langhe, Miele",
      prezzo: "15,00",
      preferita: true,
      percorso: "assets/pizze/castelmagno.jpeg"
    },
    {
      nome: "La Romana",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Porchetta Romana, Scamorza",
      prezzo: "13,00",
      percorso: ""
    },
    {
      nome: "La Campana",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Scamorza, Salsiccia, Friarielli",
      prezzo: "13,00",
      percorso: "assets/pizze/campana.jpeg"
    },
    {
      nome: "La Ligure",
      ingredienti: "Mozzarella Fiordilatte, Pesto, Speck, Burrata Dop",
      prezzo: "14,00",
      percorso: "assets/pizze/ligure.jpeg"
    },
    {
      nome: "La Siciliana",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Capperi, Olive, Acciughe, Cipolle Rosse",
      prezzo: "12,00",
      percorso: ""
    },
    {
      nome: "La Calabrese",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Salsiccia, 'Nduja Calabra Piccante",
      prezzo: "11,00",
      piccante: true,
      percorso: "assets/pizze/calabrese.jpeg"
    },
    {
      nome: "La Parma",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Burrata Dop, Crudo Di Parma",
      prezzo: "12,00",
      percorso: ""
    },
    {
      nome: "La Parmigiana",
      ingredienti: "Pomodoro, Mozzarella, Melanzane Fritte A Tocchetti, Grana, Basilico",
      prezzo: "10,00",
      preferita: true,
      descrizione: "ricetta di famiglia!",
      percorso: "assets/pizze/parmigiana.jpeg"
    },
    {
      nome: "La Montanara",
      ingredienti: "Mozzarella, Funghi Porcini, Gorgonzola, Crudo Di Parma, Rucola",
      prezzo: "15,00",
      percorso: "assets/pizze/montanara.jpeg"
    }
  ];

  speciali: any[] = [
    {
      nome: "Acqua Santa",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Scamorza, Salamino Piccante",
      prezzo: "10,00",
      preferita: true,
      percorso: ""
    },
    {
      nome: "La Caronte",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Salamino Piccante, Peperoni, Acciughe",
      prezzo: "10,00",
      percorso: "assets/pizze/caronte.jpeg"
    },
    {
      nome: "La Maialona",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Salamino Piccante, Prosciutto Cotto, Salsiccia",
      prezzo: "12,00",
      percorso: "assets/pizze/maialona.jpeg"
    },
    {
      nome: "La Mortadellona",
      ingredienti: "Mozzarella Fiordilatte, Mortadella, Pistacchi, Burrata DOP",
      prezzo: "13,00",
      percorso: "assets/pizze/mortadellona.jpeg"
    },
    {
      nome: "Totò",
      ingredienti: "Mozzarella, Spianata Calabra, Pancetta Affumicata, Gorgonzola Dop",
      prezzo: "10,00",
      scelta: true,
      percorso: "assets/pizze/toto.jpeg"
    },
    {
      nome: "Margherita Stracciata",
      ingredienti: "Pomodoro Italiano, Burrata DOP in uscita",
      prezzo: "10,00",
      percorso: "assets/pizze/margherita.jpeg"
    },
    {
      nome: "Aldo's Pizza",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Frutti Di Mare",
      prezzo: "12,00",
      percorso: "assets/pizze/aldospizza.jpeg"
    },
    {
      nome: "Focaccia Noemi",
      ingredienti: "Focaccia Con Rucola, Pomodorini, Crudo Di Parma, Burrata",
      prezzo: "13,00",
      percorso: "assets/pizze/noemi.jpeg"
    },
    {
      nome: "La Polpettosa",
      ingredienti: "Pomodoro Italiano, Mozzarella Fiordilatte, Polpette, Grana",
      prezzo: "13,00",
      percorso: "assets/pizze/polpettosa.jpeg"
    },
    {
      nome: "4 Stagioni Plus",
      ingredienti: "Pesto, Mozzarella, Prosciutto, Funghi, Carciofini, Olive",
      prezzo: "13,00",
      percorso: "assets/pizze/quattrostagioniplus.jpeg"
    },
    {
      nome: "Special 139",
      ingredienti: "Bufala, Schiacciata Calabra, Rucola",
      prezzo: "9,50",
      percorso: ""
    }
  ];

  vegan: any[] = [
    {
      nome: "Carciofina",
      ingredienti: "Carciofi, Friarielli, Olive, Pomodorini",
      prezzo: "11,00",
      percorso: ""
    },
    {
      nome: "Rapetta",
      ingredienti: "Friarielli, Funghetti Porcini, Pomodorini",
      prezzo: "11,00",
      percorso: ""
    }
  ];

  hamburger: any[] = [
    {
      nome: "Hamburger Classico",
      ingredienti: "Pane Artigianale, Burger Di Manzo 150g, Lattuga Fresca, Pomodoro, Ketchup E Maionese",
      prezzo: "8,50",
      extra: "+ Formaggio | 1,50\n+ Bacon | 1,50",
      nota: "Disponibile in versione chicken!",
    },
    {
      nome: "Ligure",
      ingredienti: "Burger Di Manzo 150g, Scamorza, Pesto Fresco, Pomodori Secchi",
      prezzo: "13,00",
      nota: "Disponibile in versione chicken!"
    },
    {
      nome: "Piemontese",
      ingredienti: "Burger Di Manzo 150g, Castelmagno Dop, Cipolle Caramellate",
      prezzo: "13,00",
      preferita: true,
      nota: "Disponibile in versione chicken!"
    },
    {
      nome: "Mediterraneo",
      ingredienti: "Burger Di Manzo 150g, Mozzarella Di Bufala, Zucchine Fritte, Olive",
      prezzo: "11,00",
      nota: "Disponibile in versione chicken!"
    },
    {
      nome: "Estate",
      ingredienti: "Burger Di Manzo 150g, Melanzane Fritte A Tocchetti, Burrata",
      prezzo: "12,50",
      nota: "Disponibile in versione chicken!"
    },
    {
      nome: "Sweet & Spicy",
      ingredienti: "Burger Di Manzo 150g, Salsa Piccante Al Miele, Formaggio Fuso, Lattuga",
      prezzo: "12,00",
      nota: "Disponibile in versione chicken!"
    },
    {
      nome: "XXL Colesterolo",
      ingredienti: "Burger Di Manzo 150g, Porchetta, Speck, Brie, Lattuga",
      prezzo: "15,00",
      preferita: true,
      nota: "Disponibile in versione chicken!"
    }
  ];

  griglia: any[] = [
    {
      nome: "Grigliata Mista",
      ingredienti: "Salsiccia, Wurstel, Bacon, Hamburger",
      prezzo: "15,00",
      extra: "+ Patatine | 3\n+ Insalata | 3",
      percorso: "assets/pizze/grigliatamista.jpeg"
    },
    {
      nome: "Hamburger Nel Piatto + Contorno",
      ingredienti: "Contorno a Scelta Tra Patatine, Verdure, Insalata/Pomodori",
      prezzo: "10,00",
      nota: "Ideale Per I Bambini!",
      percorso: ""
    },
    {
      nome: "Salsiccia Nel Piatto + Contorno",
      ingredienti: "Contorno a Scelta Tra Patatine, Verdure, Insalata/Pomodori",
      prezzo: "10,00",
      nota: "Ideale Per I Bambini!",
      percorso: "assets/pizze/salsicciagriglia.jpeg"
    },
    {
      nome: "Wurstel Nel Piatto + Contorno",
      ingredienti: "Contorno a Scelta Tra Patatine, Verdure, Insalata/Pomodori",
      prezzo: "10,00",
      nota: "Ideale Per I Bambini!",
      percorso: ""
    }
  ];

  dolci: any[] = [
    {
      nome: "Ciccioli",
      ingredienti: "Nutella, Pistacchio, Miele e Noci",
      prezzo: "5,00",
      nota: "Preparati da noi! Disponibili per asporto."
    },
    {
      nome: "Cannolo Siciliano",
      ingredienti: "Farcito al momento",
      prezzo: "5,00",
      nota: "Preparati da noi! Disponibili per asporto."
    },
    {
      nome: "Tiramisù Della Casa",
      ingredienti: "Classico, Nutella, Pistacchio",
      prezzo: "5,00",
      nota: "Preparati da noi! Disponibili per asporto."
    },
    {
      nome: "Dolce Fuori Menù",
      ingredienti: "Chiedi la disponibilità al personale",
      prezzo: "5,00",
      nota: "Preparati da noi! Disponibili per asporto."
    },
    {
      nome: "Dolci In Vetrina",
      ingredienti: "Chiedi la disponibilità al personale",
      prezzo: "5,00",
      nota: "Preparati da noi! Disponibili per asporto."
    }
  ];

  antipasti: any[] = [
    {
      nome: "Antipasto Made In Italy",
      ingredienti: "Pane Fritto con Rucola, Pomodorini, Crudo di Parma e Burrata DOP",
      prezzo: "13,00",
    },
    {
      nome: "Tagliere Di Salumi",
      ingredienti: "Tre Salumi con Pane Fritto",
      prezzo: "10,00"
    },
    {
      nome: "Polpette Della Nonna",
      ingredienti: "Polpette con Focaccina",
      prezzo: "9,00"
    },
    {
      nome: "Stick Di Polenta Fritta Al Formaggio",
      ingredienti: "6 pezzi",
      prezzo: "5,00"
    },
    {
      nome: "Le Montanarine",
      ingredienti: "Antipasto misto con quattro pizzette fritte...",
      prezzo: "10,00",
      novita: true
    }
  ];

  focacce: any[] = [
    {
      nome: "Bianca Ai 4 Formaggi",
      ingredienti: "Focacce farcite una sopra l'altra",
      prezzo: "11,00",
      percorso: "assets/pizze/focacciabaciataformaggi.jpeg"
    },
    {
      nome: "Speck e Brie",
      ingredienti: "Focacce farcite una sopra l'altra",
      prezzo: "11,00",
      percorso: "assets/pizze/focacciabaciataspeckbrie.jpeg"
    },
    {
      nome: "Verdure",
      ingredienti: "Focacce farcite una sopra l'altra",
      prezzo: "11,00",
      percorso: "assets/pizze/focacciabaciataverdure.jpeg"
    }
  ];
}
