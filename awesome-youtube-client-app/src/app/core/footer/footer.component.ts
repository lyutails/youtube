import { ThemeService } from './../../theme.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  author = '@lyutails';
  isDay = true;
  isLight = 'wb_sunny';
  isDark = 'bedtime';

  constructor(public themeService: ThemeService) {}

  changeTheme() {
    this.themeService.switchTheme();
  }
}
