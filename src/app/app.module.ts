import { MaterializeModule } from 'angular2-materialize'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'
import { ChatComponent } from './components/chat/chat.component'
import { RouterModule } from '@angular/router'
import { AppRoutes } from './app-routing.module'
import { LoginComponent } from './pages/login/login.component'
import { MainComponent } from './pages/main/main.component'

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(AppRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
