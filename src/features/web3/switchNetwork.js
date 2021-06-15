export const switchNetwork = ({ web3, params, connectWallet }) => {
  if (web3) {
    _switchNetwork({ web3, params })
  } else {
    connectWallet()
      .then(web3 => {
        if (web3) {
          _switchNetwork({ web3, params });
        }
      })
  }
};

const _switchNetwork = ({ web3, params }) => {
  web3.currentProvider.request({
    method: 'wallet_addEthereumChain',
    params: [params]
  })
  .catch(error => {
    console.log(error)
  });
}