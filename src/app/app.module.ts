import { ModalComponent } from './modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaCPFComponent } from './consultaCpf/consultaCpf.component';
import { NavComponent } from './nav/nav.component';

import { CooperadoService } from './services/cooperado.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FooterComponent } from './footer/footer.component';
import { SituacaoCadastralComponent } from './situacao-cadastral/situacao-cadastral.component';
import { ContaAplicacaoComponent } from './conta-aplicacao/conta-aplicacao.component';
import { ContaCorrenteComponent } from './conta-corrente/conta-corrente.component';
import { StepComponent } from './step/step.component';

@NgModule({
   declarations: [
      AppComponent,
      ConsultaCPFComponent,
      NavComponent,
      SidebarComponent,
      FooterComponent,
      SituacaoCadastralComponent,
      ContaAplicacaoComponent,
      ContaCorrenteComponent,
      ModalComponent,
      StepComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      NgxMaskDirective,
      NgxMaskPipe
   ],
   providers: [
    CooperadoService,
    provideNgxMask()
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
