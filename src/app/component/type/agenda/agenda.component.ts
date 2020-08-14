import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgendaComponent implements OnInit {
  // variable de lien
  activatelien = false;
  activateLienBloc = false;
  // var verifiecation
  activateVerivication = false;
  activateVerivicationbloc = false;

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
      this.activateVerivication = true;
    }, 1000);
  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    setTimeout(() => {
      this.activateVerivication = true;
    }, 1000);
  }

  // method verificztion
  ouiVerification() {
    this.activateVerivicationbloc = true;
  }

  problemVerification(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Autre solution ';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text2);
    }, 1000);
  }

  nonVerification(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    setTimeout(() => {
      const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text2);
    }, 1000);
  }
}
