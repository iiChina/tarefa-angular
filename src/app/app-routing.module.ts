import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente01Component } from './componente01/componente01.component';
import { Componente02Component } from './componente02/componente02.component';

const routes: Routes = [
  { path: 'first-component', component: Componente01Component },
  { path: 'second-component', component: Componente02Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
