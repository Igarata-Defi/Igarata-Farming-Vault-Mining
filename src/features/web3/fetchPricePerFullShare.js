import { byDecimals } from 'features/helpers/bignumber';

export const fetchPricePerFullShare = async ({address, contract, earnAddress}) => {
  // console.log(`=====================================fetchDepositedBalance begin=====================================`)
  // console.log(`
  //   address:${address}\n
  //   contractAddress:${contractAddress}\n
  // `)
  const pricePerFullShare = earnAddress != "0x1578B1FC12bF81aFf21F8797f7E591cD1f08081d" ? await contract.methods.getPricePerFullShare().call({ from: address }) :  await contract.methods.tokensPerShare().call({ from: address }) * 1e6;

  // console.log(`=====================================fetchDepositedBalance success=====================================`)

  return byDecimals(pricePerFullShare, 18).toNumber();
}
