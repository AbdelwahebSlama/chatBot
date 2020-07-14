import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {ChatbotComponent} from './component/chatbot/chatbot.component';
import {AttenteComponent} from './component/type/attente/attente.component';
import {ImportFichierComponent} from './component/type/import-fichier/import-fichier.component';
import {DedoublonnageComponent} from './component/type/dedoublonnage/dedoublonnage.component';
import {LectureCrmComponent} from './component/type/lecture-crm/lecture-crm.component';
import {ReceptionNFComponent} from './component/type/reception-nf/reception-nf.component';
import {CadreProblemComponent} from './component/type/cadre-problem/cadre-problem.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    AttenteComponent,
    ImportFichierComponent,
    DedoublonnageComponent,
    LectureCrmComponent,
    ReceptionNFComponent,
    CadreProblemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
