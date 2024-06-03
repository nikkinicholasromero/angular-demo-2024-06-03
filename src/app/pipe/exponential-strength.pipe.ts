import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  standalone: true,
  name: 'exponentialStrength'
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: any, exponent = 1) {
    return Math.pow(value, exponent);
  }
}
