import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app.routing.module';

import { MainComponent } from './components/main/main.component';
import { AlbumsService } from './services/albums.service';
import { UsersService } from './services/users.service';
import { PhotosService } from './services/photos.service';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user-list/user/user.component';
import { PhotosComponent } from './components/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UserComponent,
    AlbumsListComponent,
    UserListComponent,
    PhotosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlbumsService, UsersService, PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }