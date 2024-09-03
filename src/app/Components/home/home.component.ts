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
    z: number; // Added z-axis for depth
    radius: number;
    opacity: number;
    speed: number;
  }[] = []; // Stars array with 3D properties

  private maxDepth = 1000; // Maximum depth value to simulate distance

  ngAfterViewInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.createStars(150); // Create 150 stars
  }

  createStars(numberOfStars: number) {
    for (let i = 0; i < numberOfStars; i++) {
      const x = Math.random() * this.canvasRef.nativeElement.width - this.canvasRef.nativeElement.width / 2;
      const y = Math.random() * this.canvasRef.nativeElement.height - this.canvasRef.nativeElement.height / 2;
      const z = Math.random() * this.maxDepth;
      const radius = Math.random() * 2;
      const opacity = Math.random(); // Random initial opacity
      const speed = Math.random() * 0.02 + 0.01; // Random speed for opacity change
      this.stars.push({ x, y, z, radius, opacity, speed });
    }
    this.animateStars();
  }

  animateStars() {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);

    const centerX = this.canvasRef.nativeElement.width / 2;
    const centerY = this.canvasRef.nativeElement.height / 2;

    for (let star of this.stars) {
      star.z -= 5;
      if (star.z <= 0) {
        star.z = this.maxDepth;
        star.x = Math.random() * this.canvasRef.nativeElement.width - this.canvasRef.nativeElement.width / 2;
        star.y = Math.random() * this.canvasRef.nativeElement.height - this.canvasRef.nativeElement.height / 2;
      }

      const perspective = 1000 / star.z;
      const screenX = star.x * perspective + centerX;
      const screenY = star.y * perspective + centerY;
      const screenRadius = star.radius * perspective;

      star.opacity += star.speed;
      if (star.opacity > 1 || star.opacity < 0) {
        star.speed *= -1;
      }

      this.ctx.beginPath();
      this.ctx.arc(screenX, screenY, screenRadius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.opacity)})`;
      this.ctx.fill();
    }

    requestAnimationFrame(() => this.animateStars());
  }
}
