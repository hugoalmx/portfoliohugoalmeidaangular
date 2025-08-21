import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Contato } from './components/contato/contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfoliohugoalmeida');
}
