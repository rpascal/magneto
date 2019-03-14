import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService, Topic } from 'src/app/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';


@Component({
  selector: 'cbc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data$: Observable<Topic>;

  itemSize = 250;

  @ViewChild('scrollArea') scrollArea: CdkVirtualScrollViewport;


  constructor(private productDataService: ProductDataService, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
    ]).subscribe(result => {
      console.log(result);
      if (result.matches) {
        this.itemSize = 500;
      } else {
        this.itemSize = 250;
      }
      this.scrollArea.checkViewportSize();
    });
  }

  ngOnInit() {
    this.data$ = this.productDataService.getData('./assets/data/defaultData.json');
  }

}
