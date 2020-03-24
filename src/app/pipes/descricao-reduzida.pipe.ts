import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {
    
    transform(texto: string) : string {
        if (texto.length > 15) {
            return `${texto.substr(0, 15)}...`;
        }

        return texto;
    }

}