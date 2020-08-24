import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-fiche-muettes',
  templateUrl: './fiche-muettes.component.html',
  styleUrls: ['./fiche-muettes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FicheMuettesComponent implements OnInit {
  // var tous agent
  activateTouAg = false;
  activateTsAgON = false;
  // var verfication internet
  activateVerCnx = false;
  activateVerCnxON = false;
  // var veri taux nuianse
  activateVerTaux = false;
  activateVerTaOn = false;
  // var vitesse numerotation
  activateVitesse = false;
  activateVitesseON = false;

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
    this.afficherService.messageUser(idDiv, 'Oui');
    setTimeout(() => {
      this.activateVerCnx = true;
    }, 1000);
  }

  nonTsAg(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Voir en interne';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Non');
    setTimeout(() => {
      this.activateVerCnx = true;
    }, 1000);
  }

  // method de verification
  ouiVerCnx() {
    this.activateVerCnxON = true;
  }

  problemVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    const text = 'Merci de verifiez votre connexion internet';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Oui');
    // setTimeout(() => {
    //   this.activateVerTaux = true;
    // }, 1000);
  }

  nonVerCnx(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Non');
    setTimeout(() => {
      this.activateVerTaux = true;
    }, 1000);
  }

  // method de taux nuisance
  ouiVerTaux() {
    this.activateVerTaOn = true;
  }

  problemVerTaux(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'reponse sauvgarder.';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'Oui');
    setTimeout(() => {
      this.activateVitesse = true;
    }, 1000);
  }

  nonVerTaux(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.afficherService.messageUser(idDiv, 'Non');
    setTimeout(() => {
      this.activateVitesse = true;
    }, 1000);
  }

  // method de vitesse numérotation
  ouiVvitesse() {
    this.activateVitesseON = true;
  }

  problemVitesse(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    const text = 'reponse sauvgarder .';
    this.afficherService.MessageReussi2(idDiv, text);
    this.afficherService.messageUser(idDiv, 'persiste');
    // setTimeout(() => {
    //   const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    //   this.afficherService.MessageReussi(idDiv, text2);
    // }, 1000);
  }

  nonVitesse(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text2 = 'Merci de contacter le support 🙂 .';
    this.afficherService.MessageReussi2(idDiv, text2);
    this.afficherService.messageUser(idDiv, 'résolut');
    // setTimeout(() => {
    //   const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    //   this.afficherService.MessageReussi(idDiv, text2);
    // }, 1000);
  }
}
