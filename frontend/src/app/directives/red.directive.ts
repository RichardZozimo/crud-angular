import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' //nome definido para a diretiva
})
export class RedDirective {

  //diretiva de atributo, criando diretiva q altera o estilo de um elemento
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}
