import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-reception-nf',
  templateUrl: './reception-nf.component.html',
  styleUrls: ['./reception-nf.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ReceptionNFComponent implements OnInit {
  // var lien
  activatelien = false;
  activateLienON = false;
  // var Actvité call
  activateAcGrp = false;
  activateAcBloc = false;

  constructor(private afficherService: AfficherService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activatelien = true;
    }, 1000);
  }

  // method de problem de lien
  ouiLien() {
    this.activateLienON = true;
  }

  problemLien(idBloc: string) {
    this.afficherService.bloquerBloc(idBloc);
    // const text = 'Merci de verifier votre connexion internet. :)';
    // this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateAcGrp = true;
    }, 1000);

  }

  nonLien(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'probléme sauvgarder et on vas vous envoyer la solution de cette probléme. :)';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateAcGrp = true;
    }, 1000);
  }

  // method activité bloc
  ouiAcGrp() {
    this.activateAcBloc = true;
  }

  problemTAcGr(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'probléme sauvgarder et on vas vous envoyer la solution de cette probléme. :)';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      const text1 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text1);
    }, 1000);
    // const a = idDiv;
    // const b = idBloc;
    // console.log(a);
    // console.log(b);
  }

  nonAcGr(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text1 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    this.afficherService.MessageReussi(idDiv, text1);
  }


}
