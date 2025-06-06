import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductoService, Producto } from './producto.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  displayedColumns = ['id', 'nombre', 'precio'];
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(p => this.productos = p);
  }
}
