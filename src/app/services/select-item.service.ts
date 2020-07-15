import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectItemService {
  itemSelectedSubject: Subject<string> = new Subject<string>();

  constructor() {
  }

  selectedItem(label: string) {
    this.itemSelectedSubject.next(label);
  }
}
