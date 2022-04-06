import { FormControl } from '@angular/forms';

export function validateNotEmpty(control: FormControl) {
  const isEmpty = (control.value || '').trim().length === 0;
  return isEmpty ? { 'empty': true } : null;
}