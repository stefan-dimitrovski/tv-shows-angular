import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'genre',
})
export class GenrePipe implements PipeTransform {
    transform(value: string[], ...args: unknown[]): string {
        return value.join(' | ');
    }
}
