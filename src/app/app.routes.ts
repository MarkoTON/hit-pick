import { Routes } from '@angular/router';
import { RadioStationsComponent } from './pages/radio-stations/radio-stations.component';
import { BestOfDayComponent } from './pages/best-of-day/best-of-day.component';
import { BestOfMonthComponent } from './pages/best-of-month/best-of-month.component';
import { MyListComponent } from './pages/my-list/my-list.component';
import { UserComponent } from './pages/user/user.component';
import { StreamingViewComponent } from './pages/streaming-view/streaming-view.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: RadioStationsComponent },
  { path: 'user', component: UserComponent },
  { path: 'stations', component: RadioStationsComponent },
  { path: 'best-of-day', component: BestOfDayComponent },
  { path: 'best-of-month', component: BestOfMonthComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'streaming-view/:id', component: StreamingViewComponent },
  { path: '**', component: RadioStationsComponent },
];
