import { ElementRef } from '@angular/core';
import { ClickOutsideDirective } from './click-outside.directive';

describe('ClickOutsideDirective', () => {
  it('should create an instance', () => {
    const element = new ElementRef('');
    const directive = new ClickOutsideDirective(element);

    expect(directive).toBeTruthy();
  });
});
