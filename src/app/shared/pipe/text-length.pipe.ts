import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLength'
})
export class TextLengthPipe implements PipeTransform {

  transform(value: string, limit?: number, trail?: string): string {
    const LIMIT = limit ? limit : 120;
    const TRAIL = trail ? trail : '...';
    return value.length > LIMIT ? value.substring(0, LIMIT) + TRAIL : value;
  }

}
