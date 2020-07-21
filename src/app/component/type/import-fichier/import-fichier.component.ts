import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AfficherService} from '../../../services/afficher.service';

@Component({
  selector: 'app-import-fichier',
  templateUrl: './import-fichier.component.html',
  styleUrls: ['./import-fichier.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImportFichierComponent implements OnInit, OnDestroy {
  // variable FORMAT
  activateFormat = false;
  activateFormNum = false;
  // varaible caract spciau
  activateCaract = false;
  activateCarON = false;
  // var changer navigateur
  activateChangNav = false;
  activateChangNavBloc = false;
  // var test
  activateTest = false;
  activateTestbloc = false;

  constructor(private afficherService: AfficherService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activateFormat = true;
    }, 1000);
  }

  // methods de format
  problemFormat(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'verifiez l\' extension de votre fichier. :)';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateCaract = true;
    }, 1000);

  }

  nonFormat(idBloc: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.activateCaract = true;

  }

  ouiFormat() {
    this.activateFormNum = true;
  }

  // method de caracter spéciaux
  problemCaract(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'veuillez d\'utiliser \'\'\ avant les caratcéres spéciaux';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateChangNav = true;
    }, 1000);

  }

  nonCaract(idBloc: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.activateChangNav = true;
  }

  ouiCaratc() {
    this.activateCarON = true;
  }

  // method de changenment navigateur
  ouiChangNav() {
    this.activateChangNavBloc = true;
  }

  problemChangNav(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'changement de nvigateur proposition .........';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateTest = true;
    }, 1000);
  }

  nonChangNav(idBloc: string) {
    this.afficherService.bloquerBloc(idBloc);
    this.activateTest = true;
  }

  // method tester avec autre fichier
  ouiTest() {
    this.activateTestbloc = true;
  }

  problemTest(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'tester avec autre fichier proposition .........';
    this.afficherService.MessageReussi(idDiv, text);
    setTimeout(() => {
      const text2 = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
      this.afficherService.MessageReussi(idDiv, text2);
    }, 1000);
  }

  nonTest(idBloc: string, idDiv: string) {
    this.afficherService.bloquerBloc(idBloc);
    const text = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    this.afficherService.MessageReussi(idDiv, text);
    // this.activateTest = true;
  }

  // ****************
  ngOnDestroy() {
  }
}
