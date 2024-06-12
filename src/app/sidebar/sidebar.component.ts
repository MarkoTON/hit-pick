import { Component, ViewChild } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatSidenav, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private sidebarService: SidebarService) {
    this.sidebarService.sidebarToggle$.subscribe(() => {
      this.sidenav.toggle();
    });
  }

  closeSidebar() {
    this.sidenav.close();
  }
}
