/**
 * GlowMask.ts — ultra flexible masking/formatting for GlowMaskInput.
 *
 * Usage Examples:
 *   formatWithMask('1234567890123456', '#### #### #### ####') // => '1234 5678 9012 3456'
 *   formatWithMask('0109', 'MM/YY') // => '01/09'
 *   getMaskRegex('#### #### #### ####') // => /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/
 *
 * Supported Mask Chars:
 *   #: digit
 *   A: uppercase alpha
 *   a: lowercase alpha
 *   *: any character (alphanumeric)
 *   Other chars: literal — will be inserted/shown but not editable
 */

/**
 * Formats user input according to a mask.
 *
 * @param value Raw value to format
 * @param mask Mask pattern string (ex: '#### #### #### ####')
 * @returns Formatted string
 */
export function formatWithMask(value: string, mask: string): string {
  let result = '';
  let j = 0;
  for (let i = 0; i < mask.length && j < value.length; i++) {
    const maskChar = mask[i];
    const valChar = value[j];
    if (maskChar === '#') {
      if (/[0-9]/.test(valChar)) { result += valChar; j++; } 
      else { break; }
    } else if (maskChar === 'A') {
      if (/[A-Z]/.test(valChar)) { result += valChar; j++; }
      else { break; }
    } else if (maskChar === 'a') {
      if (/[a-z]/.test(valChar)) { result += valChar; j++; }
      else { break; }
    } else if (maskChar === '*') {
      if (/[a-zA-Z0-9]/.test(valChar)) { result += valChar; j++; }
      else { break; }
    } else {
      result += maskChar;
      if (valChar === maskChar) j++; // user typed literal
    }
  }
  return result;
}

/**
 * Strips all mask literals from a formatted value (for raw submission/checking).
 * Useful for getting 'just the digits' from a CC field.
 * @param formatted formatted string
 * @param mask mask pattern
 */
export function unmask(formatted: string, mask: string): string {
  let result = '';
  let j = 0;
  for (let i = 0; i < mask.length && j < formatted.length; i++) {
    const maskChar = mask[i];
    const valChar = formatted[j];
    if (['#', 'A', 'a', '*'].includes(maskChar)) {
      result += valChar;
      j++;
    } else {
      if (valChar === maskChar) {
        j++;
      } else {
        // skip extra chars
        while (j < formatted.length && formatted[j] !== maskChar) j++;
        j++;
      }
    }
  }
  return result;
}

/**
 * Generates a RegExp from mask to match valid/exact input.
 * Used for input validation (fully entered mask only).
 * @param mask mask string
 * @returns RegExp
 */
export function getMaskRegex(mask: string): RegExp {
  let regex = '';
  for (let i = 0; i < mask.length; i++) {
    const maskChar = mask[i];
    if (maskChar === '#') regex += '[0-9]';
    else if (maskChar === 'A') regex += '[A-Z]';
    else if (maskChar === 'a') regex += '[a-z]';
    else if (maskChar === '*') regex += '[a-zA-Z0-9]';
    else regex += maskChar.replace(/[.*+?^${}()|[\]\\]/g, '\$&');
  }
  return new RegExp('^' + regex + '$');
}

/**
 * Checks if a string contains only mask-allowed characters (partial, for typing).
 * @param value partial input
 * @param mask mask string
 * @returns boolean
 */
export function validForMask(value: string, mask: string): boolean {
  let j = 0;
  for (let i = 0; i < mask.length && j < value.length; i++) {
    const maskChar = mask[i];
    const valChar = value[j];
    if (maskChar === '#') {
      if (!/[0-9]/.test(valChar)) return false;
      j++;
    } else if (maskChar === 'A') {
      if (!/[A-Z]/.test(valChar)) return false;
      j++;
    } else if (maskChar === 'a') {
      if (!/[a-z]/.test(valChar)) return false;
      j++;
    } else if (maskChar === '*') {
      if (!/[a-zA-Z0-9]/.test(valChar)) return false;
      j++;
    } else {
      if (valChar === maskChar) j++;
      // else skip, allow user to type literals (will be inserted by formatter)
    }
  }
  return true;
}
