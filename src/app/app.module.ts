import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ShoppingListComponent } from './main/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './main/recipe-book/recipe-book.component';
import { RecipeListComponent } from './main/recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './main/recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './main/recipe-book/recipe-detail/recipe-detail.component';
import { ShoppingListEditComponent } from './main/shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
