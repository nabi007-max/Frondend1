import { Component } from '@angular/core';
import { Procutoservice } from '../core/services/procutoservice';
//import { error } from 'console';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reconocimientos',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './reconocimientos.html',
  styleUrl: './reconocimientos.css',
})
export class Reconocimientos {

  productos:any[]=[];
  nuevoProducto= {nombre:'',precio:'',categoria_id:''};
  constructor(private procutoservice:Procutoservice)
  {
        this.listarProductos();
  }
  listarProductos():void
  {
    this.procutoservice.listaproducto().subscribe({
          next:(data)=>{
            this.productos=data
            console.log(this.productos);
          },
            error:(err)=>console.error('error al cargar producto',err)
    });
  }
  crearProducto():void{
    if(!this.nuevoProducto.nombre||!this.nuevoProducto.precio)
    {
      alert('completa los datos');
      return;
    }
    this.procutoservice.crearProducto(this.nuevoProducto).subscribe
    ({
      next: (res)=>
      {
          alert('Producto Creado satisfactoriamente');
          this.nuevoProducto = {nombre:'',precio:'',categoria_id:''};
          this.listarProductos();
      },
      error: (err) =>console.error('Error al registrar Producto',err)
    });
  }


}