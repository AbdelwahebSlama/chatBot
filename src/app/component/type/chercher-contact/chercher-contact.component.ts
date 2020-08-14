import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-chercher-contact',
  templateUrl: './chercher-contact.component.html',
  styleUrls: ['./chercher-contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChercherContactComponent implements OnInit {
  // variable de lien
  activatelien = false;
  activateLienBloc = false;

  constructor(private afficherService: AfficherService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatelien = true;
    }, 1000);
  }

// method de lien
  ouiLien() {
    this.activateLienBloc = true;
  }

  problemLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Autre solution ';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text2);
    }, 1000);
  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    this.afficherService.MessageReussi(idDiv, text2);
  }
}
