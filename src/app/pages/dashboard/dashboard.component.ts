import {ChangeDetectionStrategy, Component} from '@angular/core';
import {map, single} from 'rxjs/operators';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {HttpClient} from "@angular/common/http";
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  /**
   * dashboard report design
   *
   */

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Board', cols: 1, rows: 1 },
          { title: 'lineChart', cols: 1, rows: 1 },
          { title: 'pieChart', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'board', cols: 2, rows: 1 },
        { title: 'lineChart', cols: 1, rows: 1 },
        { title: 'pieChart', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );
  chart: any;
  constructor(
    private http: HttpClient, 
    private breakpointObserver: BreakpointObserver, 
    private dashboardService : DashboardService,
    ) {
    }

  //
  numberOfRequests! : number;
  numberOfDamages! : number;
  numberOfWeapon! : number;
  numberOfBullet! : number;
  numberOfOther! : number;
  //Pie Chart
  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  
  ngOnInit(){

  }

}
