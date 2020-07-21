import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectItemService {
  itemSelectedSubject: Subject<string> = new Subject<string>();
  itemPrblem: Subject<string> = new Subject<string>();

  constructor() {
  }

  selectedItem(label: string) {
    this.itemSelectedSubject.next(label);
  }

  selectedProblem(label: string) {
    this.itemPrblem.next(label);
  }
}
