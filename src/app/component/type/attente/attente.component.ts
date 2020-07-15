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

  VerfierOui() {
    const d1 = document.getElementById('verification');
    const blockOuiNon = document.getElementById('blockNum');
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

  verfierNon1() {
    const blockOuiNon = document.getElementById('blockNum');
    blockOuiNon.hidden = true;
    this.activateDecrocher = true;
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
