import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
    { path: 'albums', component: AlbumsListComponent},
  ] }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}