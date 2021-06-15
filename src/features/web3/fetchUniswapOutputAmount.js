import BigNumber from "bignumber.js"

const uniswapRouterAbi = [
  { "inputs": [{ "internalType": "uint256", "name": "amountIn", "type": "uint256" }, { "internalType": "address[]", "name": "path", "type": "address[]" }], "name": "getAmountsOut", "outputs": [{ "internalType": "uint256[]", "name": "amounts", "type": "uint256[]" }], "stateMutability": "view", "type": "function" }
]

export const fetchUniswapOutputAmount = async ({ web3, routerAddress, amountIn, path }) => {
  const contract = new web3.eth.Contract(uniswapRouterAbi, routerAddress);
  const amounts = await contract.methods.getAmountsOut(amountIn, path).call();

  return BigNumber(amounts[amounts.length - 1]);
}