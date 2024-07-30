import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatName'
})
export class FormatNamePipe implements PipeTransform {

  transform(value: string, ...args: Array<unknown>): string {
    return value.split(' #')[0];
  }

}
