import {Component, OnInit} from '@angular/core';
import {SelectItemService} from '../../../services/select-item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  item: string;
  // declaration items attribute
  activateAttente = false;
  activateImpoFich = false;
  activateDedoub = false;
  activateLeceCrm = false;
  activateRecpNF = false;
  activateFichMutt = false;
  activateDecalage = false;
  activateAgenda = false;
  activateContrat = false;
  activateApple = false;

  // activateAttente = false;

  constructor(private selectItemService: SelectItemService) {
  }

  ngOnInit(): void {
    this.selectItemService.itemSelectedSubject.subscribe(
      (data) => {
        this.item = data;
        // console.log('item selected: ', data, this.item);
        this.activateItem(this.item);
      }
    );
  }

  activateItem(data: string) {
    switch (data) {
      case 'attente': {
        this.activateAttente = true;
        // console.log('i am in switech activate attente', this.activateAttente);
        break;
      }
      case 'impossible importer fichier': {
        this.activateImpoFich = true;
        break;
      }
      case 'lecteur crm': {
        this.activateLeceCrm = true;
        break;
      }
      case 'dedoublonnage': {
        this.activateDedoub = true;
        break;
      }
      case 'reception NF': {
        this.activateRecpNF = true;
        break;
      }
      case 'fiche mutes': {
        this.activateFichMutt = true;
        break;
      }
      case 'decalage FA': {
        this.activateDecalage = true;
        break;
      }
      case 'agenda non': {
        this.activateAgenda = true;
        break;
      }
      case 'rechercher contart': {
        this.activateContrat = true;
        break;
      }
      case 'filtre aplle': {
        this.activateApple = true;
        break;
      }
      default: {
        alert('il faut selectionné une probléme');
        break;
      }
    }
  }

}
