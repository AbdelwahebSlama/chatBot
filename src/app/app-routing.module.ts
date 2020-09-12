import {RouterModule, Routes} from '@angular/router';
// import {LoginComponent} from './component/login/login/login.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from './component/login/login.component';
import {ChatbotComponent} from './component/chatbot/chatbot.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'chatBot', component: ChatbotComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
