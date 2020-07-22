import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-dedoublonnage',
  templateUrl: './dedoublonnage.component.html',
  styleUrls: ['./dedoublonnage.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class DedoublonnageComponent implements OnInit {
  activateLien = false;
  activateLienON = false;

  constructor(private afficherService: AfficherService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateLien = true;
    }, 1000);
  }

  ouiLien() {
    this.activateLienON = true;
  }

  problemLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Consulter ce lien:  https://www.facebook.com/comunikcrm/ ';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.nonLien(idBloc, idDiv);
    }, 1000);
  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    this.afficherService.MessageReussi(idDiv, text);
  }
}
