/*
if (typeof web3 !== 'undefined') {

    web3 = new Web3(web3.currentProvider);

} else {

    // set the provider you want from Web3.providers

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

}
*/

// abi - is an interface from remix

var contract = "c1";
//var contract = web3.eth.contract(abi);
var contractWrapper = {contract: contract}

export function getContractWrapper() {
    console.log('js: getContractWrapper();');
    return contractWrapper;
}


/*
var mycontract = contract.at("0xa17ccc76b12bec72937d84611a80502368e1f2d2");

mycontract.winningProposal(function (error, result) {

    if (!error) {

        console.log(result);

    } else {

        console.error(error);

    }

});

// payable

mycontract.somePayableFunction(param1, param2, {

    from: web3.eth.accounts[0], // from account

    value: price

}, function (error, result) {

    if (!error) {

        console.log(result);

    } else {

        console.error(error);

    }

});
*/