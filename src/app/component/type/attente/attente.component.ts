import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {findLast} from '@angular/compiler/src/directive_resolver';

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

  constructor(private renderer: Renderer2,
  ) {
  }


  ngOnInit(): void {
    setTimeout(() => {
      this.activateDialogue = true;
    }, 2000);

  }

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

  verfierNon1() {
    const blockOuiNon = document.getElementById('blockNum');
    blockOuiNon.hidden = true;
    this.activateDecrocher = true;
  }

  verfierNonContact() {
    const blockOuiNon = document.getElementById('ContactOuiNon');
    blockOuiNon.hidden = true;
    this.activateSolde = true;
  }

  verifierNonDecro() {
    const blockOuiNon = document.getElementById('DecOuiNon');
    blockOuiNon.hidden = true;
    this.activateContact = true;
  }

  verifierNonContact() {
    const blockOuiNon = document.getElementById('ContactOuiNon');
    blockOuiNon.hidden = true;
    this.activateContact = true;
  }


  MessageReussi(idDiv: string, idOuiNon: string) {
    const d1 = document.getElementById(idDiv);
    const blockOuiNon = document.getElementById(idOuiNon);
    blockOuiNon.hidden = true;
    const d2 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    espace.innerHTML = '<br>';
    h1.textContent = 'Merci ........... 😁😀🌺🌹';
    d2.className = 'message-box message-partner';
    this.renderer.appendChild(d2, h1);
    d1.appendChild(espace);
    d1.appendChild(d2);
    // this.speak(h1.textContent);
  }

  verfiNonSolde(solde: string, soldeOuiNon: string) {
    const d1 = document.getElementById(solde);
    const blockOuiNon = document.getElementById(soldeOuiNon);
    blockOuiNon.hidden = true;
    const d2 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    espace.innerHTML = '<br>';
    h1.textContent = 'Merci de contacter le support pour obtenire plus d\'information 😁😀🌺🌹';
    d2.className = 'message-box message-partner';
    this.renderer.appendChild(d2, h1);
    d1.appendChild(espace);
    d1.appendChild(d2);
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
