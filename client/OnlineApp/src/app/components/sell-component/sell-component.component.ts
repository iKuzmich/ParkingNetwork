import { Component, OnInit } from '@angular/core';
import {SmartContractService} from '../../services/smart-contract.service'

@Component({
  selector: 'app-sell-component',
  templateUrl: './sell-component.component.html',
  styleUrls: ['./sell-component.component.css']
})
export class SellComponentComponent implements OnInit {

  constructor(private smartContractService: SmartContractService) { }

  ngOnInit() {
  }

  onGetContract() {
    console.log('getting cintract');
    debugger;
    let contract = this.smartContractService.getContract();
  }

}
