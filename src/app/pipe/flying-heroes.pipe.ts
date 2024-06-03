import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: 'flyingHeroes',
  pure: false
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes: {
    name: string,
    canFly: boolean
  }[]) {
    return allHeroes.filter(h => h.canFly);
  }
}
