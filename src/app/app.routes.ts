import { Routes } from '@angular/router';
import { PaginaInicioComponent } from './tienda/pagina-inicio/pagina-inicio.component';
import { PaginaContactoComponent } from './tienda/pagina-contacto/pagina-contacto.component';
import { ListaProductosComponent } from './tienda/lista-productos/lista-productos.component';

export const routes: Routes = [
    {path: 'inicio', component: PaginaInicioComponent},
    {path: 'contacto', component: PaginaContactoComponent},
    {path: 'buscar', component: ListaProductosComponent}
];
