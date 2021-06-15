import nativeTokenVaultABI from '../configure/abis/nativeTokenVault';
import { enqueueSnackbar } from '../common/redux/actions';

export const depositNativeToken = async ({ web3, address, amount, contractAddress, dispatch }) => {
  const contract = new web3.eth.Contract(nativeTokenVaultABI, contractAddress);
  const data = await _deposit({ contract, amount, address, dispatch });
  return data;
}

const _deposit = ({ contract, amount, address, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods
      .deposit()
      .send({ from: address, value: amount })
      .on('transactionHash', function (hash) {
        console.log(hash);
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