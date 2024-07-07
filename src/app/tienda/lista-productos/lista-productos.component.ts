import { Component, OnInit } from '@angular/core';
import { TiendaService } from '../tienda.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  listaProductos: any[] = [];
  terminoBusqueda: string = '';
  isResultLoaded = false;

  private searchTerms = new Subject<string>();

  constructor(private tiendaService: TiendaService) {
    
    this.searchTerms.pipe(
      debounceTime(300),         
      distinctUntilChanged()      
    ).subscribe(term => {
      if (term) {
        this.buscar(term);
      } else {
        this.obtenerProductos();
      }
    });
  }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.tiendaService.getListaProductos().subscribe({
      next: (data) => {
        this.listaProductos = data;
        this.isResultLoaded = true;
      },
      error: (error) => {
        console.error('Error al obtener la lista de productos', error);
      }
    });
  }

  buscar(term: string) {
    if (term.trim() !== '') {
      this.tiendaService.buscarPorNombre(term).subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.listaProductos = data;
          } else {
            this.tiendaService.buscarPorCategoria(term).subscribe({
              next: (categoriaData) => {
                this.listaProductos = categoriaData;
              },
              error: (error) => {
                console.error('Error al buscar productos por categoría', error);
              }
            });
          }
        },
        error: (error) => {
          console.error('Error al buscar productos por nombre', error);
        }
      });
    } else {
      this.obtenerProductos();
    }
  }
}
