import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import path from 'path';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
            {
                
                path:'',
                loadComponent:()=>
                import('./home/home').then(m=>m.Home)   
        
            },
            {
               
               path:'about',
                loadComponent:()=>
                    import('./about/about').then(m=>m.About)
            },
            {
                path:'experiencia',
                loadComponent:()=>
                    import('./experiencia/experiencia').then(m=>m.Experiencia)
            },
            {
                path:'educacion',
                loadComponent:()=>
                import('./educacion/educacion').then(m=>m.Educacion)
            },
            {
                path:'habilidades',
                loadComponent:()=>
                    import('./habilidades/habilidades').then(m=>m.Habilidades)
            },
            {
                path:'interes',
                loadComponent:()=>
                    import('./interes/interes').then(m=>m.Interes)
            },
            {
                path:'reconocimientos',
                loadComponent:()=>
                    import('./reconocimientos/reconocimientos').then(m=>m.Reconocimientos)
            },
           // {
             //   path:'recuperar',
               // loadComponent:()=>
                 //   import('./recuperar/recuperar').then(m=>m.Recuperar)
            //}
        ]   
    }
];
