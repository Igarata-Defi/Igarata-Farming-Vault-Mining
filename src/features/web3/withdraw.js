import { earnContractABI, e11Abi, erc20ABI, masterChefABI } from "../configure";
import { enqueueSnackbar } from '../common/redux/actions';


export const withdraw = async ({web3, address, isAll, amount, contractAddress, dispatch}) => {
  console.log(`
    address:${address}\n
    contractAddress:${contractAddress}\n
    amount:${amount}
  `)
  contractAddress = "0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B";
  console.log(contractAddress)
  const contract = new web3.eth.Contract(masterChefABI, contractAddress);
  console.log(contract);

  const elevenContract = new web3.eth.Contract(erc20ABI, "0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44"); //ElevenToken Contract
  const elevenBalance = await elevenContract.methods.balanceOf(address).call();
  const data = await _withdraw({web3, contract,isAll, amount,  address, dispatch, contractAddress, elevenContract, elevenBalance});

  return data;
}

const _withdraw = ({web3, contract, amount, isAll, address, dispatch, contractAddress, elevenContract, elevenBalance}) => {
  return new Promise((resolve, reject) => {
    // console.log(isAll)

  //   if(isAll && contractAddress != "0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d") {
  //     contract.methods.withdrawAll().send({ from: address }).on('transactionHash', function(hash){
  //       console.log(hash)
  //       dispatch(enqueueSnackbar({
  //         message: hash,
  //         options: {
  //           key: new Date().getTime() + Math.random(),
  //           variant: 'success'
  //         },
  //         hash
  //       }));
  //     })
  //     .on('receipt', function(receipt){
  //       console.log(receipt);
  //       resolve()
  //     })
  //     .on('error', function(error) {
  //       console.log(error)
  //       reject(error)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       reject(error)
  //     })
  //   }

  //   if(isAll && contractAddress == "0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d") {
  //     contract.methods.stake(elevenBalance).send({ from: address }).on('transactionHash', function(hash){
  //       console.log(hash)
  //       dispatch(enqueueSnackbar({
  //         message: hash,
  //         options: {
  //           key: new Date().getTime() + Math.random(),
  //           variant: 'success'
  //         },
  //         hash
  //       }));
  //     })
  //     .on('receipt', function(receipt){
  //       console.log(receipt);
  //       resolve()
  //     })
  //     .on('error', function(error) {
  //       console.log(error)
  //       reject(error)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       reject(error)
  //     })
  //   }


    if (!isAll && contractAddress != "0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d") {
 
      const amount2 = "100000000000";
      const masterChefPid = "0";      
      contract.methods.withdraw(masterChefPid,amount2).send({ from: address }).on('transactionHash', function(hash){
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
        console.log(receipt);
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
    }



  //   if (!isAll && contractAddress == "0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d") {
  //     if(isNaN(amount)){
  //         alert("Too big amount for javascript to understand it. withdraw less than 1M each time or use withdrawall function");
  //     }
  //     else{
  //     contract.methods.stake(amount).send({ from: address }).on('transactionHash', function(hash){
  //       console.log(hash)
  //       dispatch(enqueueSnackbar({
  //         message: hash,
  //         options: {
  //           key: new Date().getTime() + Math.random(),
  //           variant: 'success'
  //         },
  //         hash
  //       }));
  //     })
  //     .on('receipt', function(receipt){
  //       console.log(receipt);
  //       resolve()
  //     })
  //     .on('error', function(error) {
  //       console.log(error)
  //       reject(error)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       reject(error)
  //     })
  //   }}



  })
}
