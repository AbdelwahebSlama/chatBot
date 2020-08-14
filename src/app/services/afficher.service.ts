import {Component, Inject, Injectable, Renderer2, RendererFactory2, ViewEncapsulation} from '@angular/core';
import {DOCUMENT} from '@angular/common';
//
// @Component({
//   encapsulation: ViewEncapsulation.None
//   })

@Injectable({
  providedIn: 'root'
})
export class AfficherService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  MessageReussi(idDiv: string, message: string) {
    const d1 = document.getElementById(idDiv);
    const d2 = this.renderer.createElement('div');
    const h1 = this.renderer.createElement('H1');
    const espace = this.renderer.createElement('p');
    espace.innerHTML = '<br>';
    h1.textContent = message;
    d2.className = 'message-box message-partner';
    this.renderer.appendChild(d2, h1);
    this.renderer.appendChild(d1, d2);
    // h1.attributes[0] = d1.attributes[0].name;
    // d2.attributes[0] = d1.attributes[0];
    d1.appendChild(espace);
    // d1.appendChild(d2);
    this.renderer.appendChild(d1, d2);
    console.log(d2._ngcontent);
  }

  bloquerBloc(id: string) {
    const blockOuiNon = document.getElementById(id);
    blockOuiNon.hidden = true;
  }

  inverserFalse(bol: boolean) {
    bol = true;
  }
}
