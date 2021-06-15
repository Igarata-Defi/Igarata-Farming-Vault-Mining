const nerveAddress = '0x1B3771a66ee31180906972580adE9b81AFc5fCDc';
const nerveAbi = [{ "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "tokenAmount", "type": "uint256" }, { "internalType": "uint8", "name": "tokenIndex", "type": "uint8" }], "name": "calculateRemoveLiquidityOneToken", "outputs": [{ "internalType": "uint256", "name": "availableTokenAmount", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

export const convert3PoolToUsd = async ({ web3, address, amount, usdTokenIndex }) => {
  const contract = new web3.eth.Contract(nerveAbi, nerveAddress);
  const data = await contract.methods.calculateRemoveLiquidityOneToken(
    address,
    amount,
    usdTokenIndex
  ).call({ from: address });

  return data;
};