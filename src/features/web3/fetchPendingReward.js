import { vaultFarmAbi } from '../configure/abi';
// import bigfootUsdBankABI from '../configure/abis/bigfootUsdBank';
import BigNumber from 'bignumber.js';


export const fetchPendingReward = async ({ web3, address, earnContractAddress, tokenName }) => {
  // Use separate ABI for Bigfoot USD bank
  const abi = vaultFarmAbi

  const contract = new web3.eth.Contract(abi, earnContractAddress);
  const pendingReward = 'pending'+ tokenName

  const reward = await contract.methods[pendingReward](address).call({ from: address });

  return new BigNumber(reward);
}