import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';


export const THEMES = {
  default: {
    primaryColor: 'hsl(185, 57%, 35%)',
    secondaryColor: 'hsl(0, 0%, 22%)',
    textOnPrimary: 'hsl(0, 0%, 100%)',
    textOnSecondary: 'hsl(0, 0%, 90%)',
    background: 'hsl(0, 0%, 100%)',
  },
  dark: {
    primaryColor: 'hsl(168deg 100% 29%)',
    secondaryColor: 'hsl(161deg 94% 13%)',
    textOnPrimary: 'hsl(0, 0%, 100%)',
    textOnSecondary: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 10%)',
  },
  netflix: {
    primaryColor: 'hsl(357, 92%, 47%)',
    secondaryColor: 'hsl(0, 0%, 8%)',
    textOnPrimary: 'hsl(0, 0%, 100%)',
    textOnSecondary: 'hsl(0, 0%, 100%)',
    background: 'hsl(0deg 0% 33%)',
  },
  spotify: {
    primaryColor: 'hsl(132, 65%, 55%)',
    secondaryColor: 'hsl(0, 0%, 0%)',
    textOnPrimary: 'hsl(229, 61%, 42%)',
    textOnSecondary: 'hsl(0, 0%, 100%)',
    background: 'hsl(0, 0%, 100%)',
  },
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  setTheme(name = 'default') {
    const theme = THEMES[name];
    Object.keys(theme).forEach((key) => {
      this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  }

}
