import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {
    
    transform(texto: string, limite: number) : string {
        if (texto.length > limite) {
            return `${texto.substr(0, limite)}...`;
        }

        return texto;
    }

}