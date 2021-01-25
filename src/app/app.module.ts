import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import {
  AccordionModule,
  AlertModule, // Foundation Callouts
  ButtonsModule,
  CarouselModule, // Foundation Orbit
  CollapseModule,
  BsDatepickerModule,
  BsDropdownModule, // Foundation Dropdown Menus and Dropdown Panes
  ModalModule, // Foundation Reveal
  OffcanvasModule,
  PaginationModule,
  ProgressbarModule,
  RatingModule,
  SortableModule,
  TabsModule,
  TimepickerModule,
  TooltipModule,
  TypeaheadModule,
} from 'ngx-foundation';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [BrowserModule, AppRoutingModule, TabsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
