import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-type-problem',
  templateUrl: './type-problem.component.html',
  styleUrls: ['./type-problem.component.scss']
})
export class TypeProblemComponent implements OnInit {

  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
  }

  selecProblem(label: string) {
    this.selectItemService.selectedProblem(label);
  }
}
