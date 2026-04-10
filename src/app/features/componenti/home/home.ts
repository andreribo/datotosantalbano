import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private current = 0;
  private total = 4;
  private interval = 5000;
  private autoTimer: any;
  private progressTimer: any;
  private progressVal = 0;

  ngAfterViewInit(): void {
    this.initCarousel();
    this.initAOS();
  }

  private initCarousel(): void {
    this.startAuto();
    this.resetProgress();

    // Touch swipe
    const track = document.getElementById('carouselTrack');
    let touchX = 0;
    track?.addEventListener('touchstart', (e: TouchEvent) => {
      touchX = e.touches[0].clientX;
    }, { passive: true });
    track?.addEventListener('touchend', (e: TouchEvent) => {
      const diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? this.next() : this.prev();
    });

    // Pausa hover
    const section = document.querySelector('.carousel-section');
    section?.addEventListener('mouseenter', () => clearInterval(this.autoTimer));
    section?.addEventListener('mouseleave', () => this.startAuto());
  }

  goTo(n: number): void {
    this.current = ((n % this.total) + this.total) % this.total;
    const track = document.getElementById('carouselTrack');
    if (track) track.style.transform = `translateX(-${this.current * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d, i) =>
      d.classList.toggle('active', i === this.current)
    );
    this.resetProgress();
  }

  next(): void { this.goTo(this.current + 1); }
  prev(): void { this.goTo(this.current - 1); }

  private startAuto(): void {
    clearInterval(this.autoTimer);
    this.autoTimer = setInterval(() => this.next(), this.interval);
  }

  private resetProgress(): void {
    clearInterval(this.progressTimer);
    this.progressVal = 0;
    const bar = document.getElementById('progressBar');
    if (bar) bar.style.width = '0%';
    this.progressTimer = setInterval(() => {
      this.progressVal += 100 / (this.interval / 100);
      if (bar) bar.style.width = Math.min(this.progressVal, 100) + '%';
      if (this.progressVal >= 100) clearInterval(this.progressTimer);
    }, 100);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  private initAOS(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.aos').forEach(el => observer.observe(el));
  }


}
