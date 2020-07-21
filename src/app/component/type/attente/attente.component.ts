import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-attente',
  templateUrl: './attente.component.html',
  styleUrls: ['./attente.component.scss']
})
export class AttenteComponent implements OnInit {
  activateFormNum = false;
  activateDialogue = false;
  activateDecrocher = false;
  activateDecOuiNon = false;
  // variable contact restant
  activateContact = false;
  activateConatcOuiNon = false;

  // variable solde
  activateSolde = false;
  activateSoldeOuiNon = false;

  constructor(private renderer: Renderer2) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.activateDialogue = true;
    }, 1000);

  }

  // method format num
  bienForme(idBloc: string) {
    this.bloquerBloc(idBloc);
    setTimeout(() => {
      this.activateDecrocher = true;
    }, 1000);
  }

  verfierNon1(idBloc: string, idDiv: string) {
    this.bloquerBloc(idBloc);
    const text = 'SVP verifiez le format de numéro. :)';
    this.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateDecrocher = true;
    }, 1000);

  }

  // method de decroché
  decrocheOui(idBloc: string, idDiv: string) {
    this.bloquerBloc(idBloc);
    const text = 'Ok on va voire le taux de décroché de votre appel. 🙂';
    this.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateContact = true;
    }, 1000);
  }

  verifierNonDecro(idBloc: string) {
    this.bloquerBloc(idBloc);
    setTimeout(() => {
      this.activateContact = true;
    }, 1000);
  }

  // method contact restant
  ContactOui(idBloc: string, idDiv: string) {
    this.bloquerBloc(idBloc);
    const text = 'Ok on va resodre ce probléme. 🙂';
    this.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.activateSolde = true;
    }, 1000);
  }

  verfierNonContact(idBloc: string) {
    this.bloquerBloc(idBloc);
    setTimeout(() => {
      this.activateSolde = true;
    }, 1000);
  }

  // methods solde
  soldeOui(idBloc: string, idDiv) {
    this.bloquerBloc(idBloc);
    const text = 'Merci de rechargé votre solde. 🙂';
    this.MessageReussi(idDiv, text);
    setTimeout(() => {
      this.verfiNonSolde(idDiv, idBloc);
    }, 1000);
    // this.verfiNonSolde(idBloc, idDiv);
  }

  verfiNonSolde(solde: string, soldeOuiNon: string) {
    const d1 = document.getElementById(solde);
    const blockOuiNon = document.getElementById(soldeOuiNon);
    blockOuiNon.hidden = true;
    const d2 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    espace.innerHTML = '<br>';
    h1.textContent = 'Si vous avez un autre questuions veulliez de contacter le support. 🙂';
    d2.className = 'message-box message-partner';
    this.renderer.appendChild(d2, h1);
    d1.appendChild(espace);
    d1.appendChild(d2);
  }

  // *******************
  verfierNum() {
    this.activateFormNum = true;
  }

  verfierTDec() {
    this.activateDecOuiNon = true;
  }

  verfierTContact() {
    this.activateConatcOuiNon = true;
  }

  verfierTSoldet() {
    this.activateSoldeOuiNon = true;
  }

  MessageReussi(idDiv: string, message: string) {
    const d1 = document.getElementById(idDiv);
    // const blockOuiNon = document.getElementById(idOuiNon);
    // blockOuiNon.hidden = true;
    const d2 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    espace.innerHTML = '<br>';
    h1.textContent = message;
    d2.className = 'message-box message-partner';
    this.renderer.appendChild(d2, h1);
    d1.appendChild(espace);
    d1.appendChild(d2);
    d1.appendChild(d2);
    // this.speak(h1.textContent);
  }


  bloquerBloc(id: string) {
    const blockOuiNon = document.getElementById(id);
    blockOuiNon.hidden = true;
  }

  speak(text: string) {
    console.log('text ', text);
    const u = new SpeechSynthesisUtterance();
    const allVoices = speechSynthesis.getVoices();
    u.voice = allVoices.filter(voice => voice.name === 'Amelie')[0];
    u.text = text;
    u.lang = 'fr-CA';
    u.volume = 1; // 0-1 interval
    u.rate = 1;
    u.pitch = 1; // 0-2 interval
    speechSynthesis.speak(u);
  }

}
