import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainPageComponent } from './main-page/main-page.component';
import { ItemComponent } from './item/item.component';
import { IconComponent } from './icon/icon.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [MainPageComponent, ItemComponent, IconComponent],
	imports: [BrowserModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [MainPageComponent],
})
export class AppModule {}
