import Web3 from 'web3'

const web3 = new Web3()
if (window.web3) {
    web3.setProvider(window.web3.currentProvider)
}

export default web3