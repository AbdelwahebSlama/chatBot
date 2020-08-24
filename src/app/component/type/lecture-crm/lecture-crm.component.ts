import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';


@Component({
  selector: 'app-lecture-crm',
  templateUrl: './lecture-crm.component.html',
  styleUrls: ['./lecture-crm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LectureCrmComponent implements OnInit {
  // variable of 1st case
  activateTouAg = false;
  activateTouAgON = false;
  // varible verfier internet
  activateVerif = false;
  activateVerifBloc = false;
  // varible redmr cnx
  activateRedmar = false;
  activateRedimarBloc = false;

  constructor(private afficherService: AfficherService) {
  }

  ngOnInit(): void {
    setTimeout(
      () => {
        this.activateTouAg = true;
      }, 1000);
  }

  // method de tous agent
  ouiLien() {
    this.activateTouAgON = true;
  }

  problemTouAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Oui');
    setTimeout(() => {
      this.activateVerif = true;
    }, 1000);
  }

  nonTouAge(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Voir en interne. :)';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'non');
    setTimeout(() => {
      this.activateVerif = true;
    }, 1000);
  }

  // method pour bloc verifier
  // ouiVerif() {
  //   this.activateVerifBloc = true;
  // }

  problemVerif(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'oui');
    setTimeout(() => {
      this.activateRedmar = true;
    }, 1000);
  }

  nonVerif(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de verifier votre connexion internet.';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'non');
    setTimeout(() => {
      this.activateRedmar = true;
    }, 1000);
  }

  // method remarer cnx
  // ouiRedmar() {
  //   this.activateRedimarBloc = true;
  // }

  problemRedmarCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Merci de contacter le support. 🙂';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
  }

  nonRedmar(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    // this.afficherService.MessageReussi(idDiv, text);
    this.afficherService.messageUser(idDiv, 'résolut');
  }
}
