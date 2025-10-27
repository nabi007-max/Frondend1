import { Component } from '@angular/core';
import { Procutoservice } from '../core/services/procutoservice';
//import { error } from 'console';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-interes',
  imports: [CommonModule],
  templateUrl: './interes.html',
  styleUrl: './interes.css',
})
export class Interes {

  productos:any[]=[];
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
    })
  }
  


}
