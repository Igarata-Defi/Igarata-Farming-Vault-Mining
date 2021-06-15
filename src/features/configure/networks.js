export const networks = [
  {
    id: 56,
    name: 'bsc',
    label: 'Binance Smart Chain',
    image: 'binance.png',

    multicall: '0xB94858b0bB5437498F5453A16039337e5Fdc269C',
    nativeTokenShim: '0xC72E5edaE5D7bA628A2Acb39C8Aa0dbbD06daacF',

    buyTokenLink: 'https://app.1inch.io/#/56/swap/BNB/ELE',

    params: {
      chainId: '0x38',
      chainName: 'Binance Smart Chain',
      nativeCurrency: {
        name: 'Binance Coin',
        symbol: 'BNB',
        decimals: 18
      },
      rpcUrls: ['https://bsc-dataseed.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com']
    }
  },
  {
    id: 137,
    name: 'polygon',
    label: 'Polygon',
    image: 'polygon.png',

    multicall: '0xC3821F0b56FA4F4794d5d760f94B812DE261361B',
    nativeTokenShim: '0x4D6294D36aD4201De1D93Af18A61453B8865d008',

    buyTokenLink: 'https://quickswap.exchange/#/swap?outputCurrency=0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',

    params: {
      chainId: '0x89',
      chainName: 'Polygon',
      nativeCurrency: {
        name: 'Polygon',
        symbol: 'MATIC',
        decimals: 18
      },
      rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
      blockExplorerUrls: ['https://explorer-mainnet.maticvigil.com/']
    }
  }
];

export default networks;