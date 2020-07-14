import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';

import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {ChatbotComponent} from './component/chatbot/chatbot.component';
import {ChatbotProblemComponent} from './component/chatbot-problem/chatbot-problem.component';
import {CrmComponent} from './component/items/crm/crm.component';
import {VoixComponent} from './component/items/voix/voix.component';
import {BillingComponent} from './component/items/billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    ChatbotProblemComponent,
    CrmComponent,
    VoixComponent,
    BillingComponent
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
