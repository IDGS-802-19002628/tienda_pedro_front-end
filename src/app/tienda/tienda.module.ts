import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { PaginaContactoComponent } from './pagina-contacto/pagina-contacto.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TiendaService } from './tienda.service';

@NgModule({
  declarations: [
    AgregarProductoComponent,
    PaginaInicioComponent,
    PaginaContactoComponent,
    ListaProductosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AgregarProductoComponent,
    PaginaInicioComponent,
    PaginaContactoComponent,
    ListaProductosComponent,
    RouterModule
  ],
  providers: [TiendaService] 
})
export class TiendaModule { }
