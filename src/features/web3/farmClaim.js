import { pool4Abi } from '../configure/abi';
import { enqueueSnackbar } from '../common/redux/actions';

export const farmClaim = async ({ web3, address, earnContractAddress, earnContractAbi, masterchefPid, dispatch }) => {
  const contract = new web3.eth.Contract(earnContractAbi || pool4Abi, earnContractAddress);
  const data = await _claim({ contract, address, masterchefPid, dispatch });
  return data;
};

const _claim = ({ contract, address, masterchefPid, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods
      .deposit(masterchefPid, 0)
      .send({ from: address })
      .on('transactionHash', function (hash) {
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
      .on('receipt', function (receipt) {
        console.log(receipt);
        resolve();
      })
      .on('error', function (error) {
        console.log(error);
        reject(error);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
};
