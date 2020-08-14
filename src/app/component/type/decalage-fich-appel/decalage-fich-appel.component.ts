import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-decalage-fich-appel',
  templateUrl: './decalage-fich-appel.component.html',
  styleUrls: ['./decalage-fich-appel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DecalageFichAppelComponent implements OnInit {
  // var tous agent
  activateTouAg = false;
  activateTsAgON = false;
  // var verfication internet
  activateVerCnx = false;
  activateVerCnxON = false;

  constructor(private afficherService: AfficherService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateTouAg = true;
    }, 1000);
  }

  // method pur TOus agent
  ouiTsAg() {
    this.activateTsAgON = true;
  }

  problemTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    setTimeout(() => {
      this.activateVerCnx = true;
    }, 1000);
  }

  nonTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Voir en interne';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateVerCnx = true;
    }, 1000);
  }

  // method de verification conex internet
  ouiVerCnx() {
    this.activateVerCnxON = true;
  }

  problemVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de verifiez votre connexion internet';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text2);
    }, 1000);
  }

  nonVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    setTimeout(() => {
      // this.activateVerTaux = true;
      const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text2);
    }, 1000);
  }
}
