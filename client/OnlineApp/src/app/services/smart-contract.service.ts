import { Injectable } from '@angular/core';
import { getContractWrapper } from '../lib/smart-contract-helper';

@Injectable()
export class SmartContractService {

  constructor() { }

  getContract(): any {
    console.log('SmartContractService: getContract();');
    return getContractWrapper();
  }
}
