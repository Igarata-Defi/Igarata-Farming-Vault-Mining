import bigfootUsdBankABI from '../configure/abis/bigfootUsdBank';
import { enqueueSnackbar } from '../common/redux/actions';

export const withdrawMultiToken = async ({ web3, address, amount, tokenIndex, contractAddress, dispatch }) => {
  const contract = new web3.eth.Contract(bigfootUsdBankABI, contractAddress);
  const data = await _withdraw({ contract, amount, tokenIndex, address, dispatch });
  return data;
}

const _withdraw = ({ contract, amount, tokenIndex, address, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods
      .withdraw(amount, tokenIndex)
      .send({ from: address })
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