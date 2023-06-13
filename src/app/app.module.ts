import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { TreemoduleModule } from './treemodule/treemodule.module';
import { NodeService } from './services/node.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TreemoduleModule
  ],
  providers: [NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
