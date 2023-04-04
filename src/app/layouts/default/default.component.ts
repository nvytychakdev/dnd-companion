import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DefaultHeaderComponent } from './default-header/default-header.component';

@Component({
  selector: 'dnd-companion-default',
  standalone: true,
  imports: [CommonModule, RouterModule, DefaultHeaderComponent],
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {}
