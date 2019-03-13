import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService, Topic } from 'src/app/core';

@Component({
  selector: 'cbc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  data$: Observable<Topic>;

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.data$ = this.productDataService.getData('./assets/data/defaultData.json');
  }

}
