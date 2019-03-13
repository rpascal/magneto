import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CoreModule } from '../core.module';

export interface Topic {
  title: string;
  products: ProductModel[];
}

export interface ProductModel {
  img: string;
  title: string;
  subtitle: string;
  description: string;
}

@Injectable({
  providedIn: CoreModule
})
export class ProductDataService {
  constructor(private http: HttpClient) {}

  public getData(path: string): Observable<Topic> {
    return this.http.get<Topic>(path);
  }
}
