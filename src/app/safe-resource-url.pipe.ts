import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeResourceURL',
})
export class SafeResourceURLPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
