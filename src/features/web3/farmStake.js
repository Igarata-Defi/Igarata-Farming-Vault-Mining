import { pool4Abi } from '../configure/abi';
import { masterChefABI } from '../configure/abi';

import { enqueueSnackbar } from '../common/redux/actions';

export const farmStake = async ({ web3, address, earnContractAddress, earnContractAbi, masterchefPid, amount, dispatch }) => {
  const contract = new web3.eth.Contract(masterChefABI, earnContractAddress);
  const data = await _stake({ contract, address, masterchefPid, amount, dispatch });
  return data;
};

const _stake = ({ contract, address, masterchefPid, amount, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods.deposit(masterchefPid, amount).send({ from: address })
      .on('transactionHash', hash => {
        dispatch(
          enqueueSnackbar({
            message: hash,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'success',
            },
            hash,
          })
        );
      })
      .on('receipt', receipt => {
        console.log(receipt);
        resolve();
      })
      .on('error', error => {
        console.log(error);
        reject(error);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
