export interface Producto {
    ProductoID: number;
    Nombre: string;
    Descripcion?: string;
    Precio: number;
    RutaImagen?: string;
    CategoriaID: number;
}