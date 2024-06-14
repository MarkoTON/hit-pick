// sidebar.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  private sidebarToggleSubject = new Subject<void>();
  sidebarToggle$ = this.sidebarToggleSubject.asObservable();

  toggle() {
    this.sidebarToggleSubject.next();
  }
}
