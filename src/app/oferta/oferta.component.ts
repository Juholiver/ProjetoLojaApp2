import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { CarrinhoService } from '../carrinho.service'

import { Oferta } from '../shared/oferta.model';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {


  public oferta: Oferta | undefined

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService 
    ) { } 
   

  
  ngOnInit(): void {
    this.route.params.subscribe((parametros: Params) => {

      this.ofertasService.getOfertaPorId(parametros['id'])
    .then ((oferta: Oferta) => {
      this.oferta = oferta
      //console.log(this.oferta)
    })
      
    })

    
  }

  ngOnDestroy(): void {
    
  }

  public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta)
    console.log (this.carrinhoService.exibirItens())
    
  }

}
