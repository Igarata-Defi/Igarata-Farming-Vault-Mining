import { pool4Abi } from '../configure/abi';
import BigNumber from 'bignumber.js';

export const fetchPendingEle = async ({ web3, address, earnContractAddress, masterchefPid}) => {
    const contract = new web3.eth.Contract(pool4Abi, earnContractAddress);
    const reward = await contract.methods.pendingEleven(masterchefPid, address).call({ from: address });

    return new BigNumber(reward);
}