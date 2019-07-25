import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'store', loadChildren: './store/store.module#StorePageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: '', loadChildren: './main-page/main-page.module#MainPagePageModule' },
  { path: 'barcode', loadChildren: './barcode/barcode.module#BarcodePageModule' },
  { path: 'photo', loadChildren: './photo/photo.module#PhotoPageModule' },
  { path: 'click1', loadChildren: './click1/click1.module#Click1PageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
