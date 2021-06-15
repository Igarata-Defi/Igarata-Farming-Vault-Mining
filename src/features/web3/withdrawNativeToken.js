import nativeTokenVaultABI from "../configure/abis/nativeTokenVault";
import { enqueueSnackbar } from '../common/redux/actions';


export const withdrawNativeToken = async ({ web3, address, amount, contractAddress, dispatch }) => {
  const contract = new web3.eth.Contract(nativeTokenVaultABI, contractAddress);
  const data = await _withdraw({ contract, amount, address, dispatch });
  return data;
}

const _withdraw = ({ contract, address, amount, dispatch }) => {
  return new Promise((resolve, reject) => {
    contract.methods.withdraw(amount).send({ from: address }).on('transactionHash', function(hash){
      console.log(hash)
      dispatch(enqueueSnackbar({
        message: hash,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success'
        },
        hash
      }));
    })
    .on('receipt', function(receipt){
      resolve()
    })
    .on('error', function(error) {
      console.log(error)
      reject(error)
    })
    .catch((error) => {
      console.log(error)
      reject(error)
    })
  })
}