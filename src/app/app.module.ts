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
import {ItemsComponent} from './component/type/items/items.component';
import {TypeProblemComponent} from './component/typeProblem/type-problem/type-problem.component';
import {CrmComponent} from './component/typeProblem/crm/crm.component';
import {BillingComponent} from './component/typeProblem/billing/billing.component';
import {VoiceComponent} from './component/typeProblem/voice/voice.component';
import {CrVoiBillingComponent} from './component/cr-voi-billing/cr-voi-billing.component';
import {ImageRobotComponent} from './component/image-robot/image-robot.component';
import {TestComponent} from './component/test/test.component';
import {FicheMuettesComponent} from './component/type/fiche-muettes/fiche-muettes.component';
import {DecalageFichAppelComponent} from './component/type/decalage-fich-appel/decalage-fich-appel.component';
import {AgendaComponent} from './component/type/agenda/agenda.component';
import {ChercherContactComponent} from './component/type/chercher-contact/chercher-contact.component';
import {FicheAppelComponent} from './component/type/fiche-appel/fiche-appel.component';
import {HttpClientModule} from '@angular/common/http';

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
    ItemsComponent,
    TypeProblemComponent,
    CrmComponent,
    BillingComponent,
    VoiceComponent,
    CrVoiBillingComponent,
    ImageRobotComponent,
    TestComponent,
    FicheMuettesComponent,
    DecalageFichAppelComponent,
    AgendaComponent,
    ChercherContactComponent,
    FicheAppelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
