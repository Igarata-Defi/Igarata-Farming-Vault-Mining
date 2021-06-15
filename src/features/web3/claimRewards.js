import { vaultFarmAbi } from '../configure';
import { enqueueSnackbar } from '../common/redux/actions';

export const claimRewards = async ({ web3, address, contractAddress, dispatch }) => {
  const contract = new web3.eth.Contract(vaultFarmAbi, contractAddress);
  const data = await _claim({ contract, address, dispatch });
  return data;
};

const _claim = ({ contract, address, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods
      .claimRewards()
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
