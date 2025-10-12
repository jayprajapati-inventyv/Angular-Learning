import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'offerPipe'
})
export class OfferPipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    let discount = 0;
    if (value > 300000) {
      discount = 0.3;
    } else if (value > 200000) {
      discount = 0.2;
    } else if (value > 100000) {
      discount = 0.15;
    } else if (value > 100000) {
      discount = 0.1;
    }
    // If value is above 100000, apply discount, else return original
    return discount > 0 ? value * (1 - discount) : value;
  }
}
