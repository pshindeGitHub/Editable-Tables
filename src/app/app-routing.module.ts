import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AskComponent } from './ask/ask.component';
import { AskReferComponent } from './ask-refer/ask-refer.component';
import { SugestionComponent } from './sugestion/sugestion.component'
const routes: Routes = [
  { path: 'ask', component: AskComponent },
  { path: 'ask-refer', component: AskReferComponent },
  { path: 'sugestion', component: SugestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
