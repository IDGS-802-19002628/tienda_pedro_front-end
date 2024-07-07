import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private _endpoint: string = environment.endPoints;
  private _apiURL: string = this._endpoint + "Tienda/";

  constructor(private http: HttpClient) {}


  getListaProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this._apiURL}ListaProductos`);
  }


  buscarPorNombre(nombre: string): Observable<any[]> {
    return this.http.get<any[]>(`${this._apiURL}BuscarPorNombre/${nombre}`);
  }


  buscarPorCategoria(nombreCategoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this._apiURL}BuscarPorCategoria/${nombreCategoria}`);
  }
}
