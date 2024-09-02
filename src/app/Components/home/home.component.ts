import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private stars: {
    x: number;
    y: number;
    radius: number;
    opacity: number;
    speed: number;
    vx: number;
    vy: number;
  }[] = [];

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.createStars(150);
  }

  createStars(numberOfStars: number) {
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * this.canvasRef.nativeElement.width;
      const y = Math.random() * this.canvasRef.nativeElement.height;
      const radius = Math.random() * 4;
      const opacity = Math.random();
      const speed = Math.random() * 0.02 + 0.01;
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      this.stars.push({ x, y, radius, opacity, speed, vx, vy });
    }
    this.animateStars();
  }

  animateStars() {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    for (let star of this.stars) {
      star.opacity += star.speed;
      if (star.opacity > 1 || star.opacity < 0) {
        star.speed *= -1;
      }

      star.x += star.vx;
      star.y += star.vy;

      if (star.x <= 0 || star.x >= this.canvasRef.nativeElement.width) {
        star.vx *= -1;
      }
      if (star.y <= 0 || star.y >= this.canvasRef.nativeElement.height) {
        star.vy *= -1;
      }

      this.ctx.beginPath();
      this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`;
      this.ctx.fill();
    }

    setTimeout(() => {
      requestAnimationFrame(() => this.animateStars());
    }, 16);
  }
}
