import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MultiSelectComponent } from './shared/multi-select/multi-select.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SearchSectionComponent } from './shared/search-section/search-section.component';

// import { NgMultiSelectDropDownModule } from './shared/multiselectdropdown/ng-multiselect-dropdown.module';
// import { MultiSelectComponent as srini} from './shared/multiselectdropdown';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    MultiSelectComponent,
    SearchSectionComponent,
    // NgMultiSelectDropDownModule,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AngularMultiSelectModule,
    FormsModule,
    TabsModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    CollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
