import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VerifyTextService {
  displayUser = 'none';
  displayCreate = 'block';

  /* method to check if the name entered meets the requirements, 
  returns 1 if it meets and 0 if it does not meet */
  verifyNameGame(name: string): number {
    if (
      this.checkSpecialCharacters(name) &&
      this.checkSize(name) &&
      this.checkNumbers(name) <= 3
    ) {
      return 1;
    } else {
      return 0;
    }
  }

  //returns true if it has no special characters
  checkSpecialCharacters(name: string): boolean {
    const pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(name);
  }

  //returns true if his size is between 5 and 20
  checkSize(name: string): boolean {
    if (name.length >= 5 && name.length <= 20) {
      return true;
    } else {
      return false;
    }
  }

  //returns the number of numbers in the string
  checkNumbers(name: string): number {
    const numbersFound = name.match(/\d/g);
    return numbersFound ? numbersFound.length : 0;
  }
}
