export const categories = [
  {
    name: 'Bigfoot',
    default: true
  },
  {
    name: 'Pancake',
    default: true
  },
  {
    name: 'Sushi',
    default: true
  },
  {
    name: 'Iron',
    default: true
  },
  {
    name: 'Quick',
    default: true
  },
  {
    name: 'Nerve',
    default: true
  },
  {
    name: 'Wault',
    default: true
  },
  {
    name: 'WaultPoly',
    default: true
  },
  {
    name: 'Curve',
    default: true
  },
  {
    name: 'Polycat',
    default: true
  },
  {
    name: 'Cometh',
    default: true
  }
]

// id: '池子id',
// name: '池子名字',
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// tokenDecimals: '存入精度'
// itokenDecimals: '提取精度'
// depostLimit: '存入最大数量限制' 0时不限制
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price:
export const pools = [
  {
    network: 'bsc',
    id: 'ELE',
    name: 'ELE',
    token: 'ELE',
    tokenDescription: 'E11',
    tokenDecimals: 18,
    uses: 'Uses Eleven.finance',
    itokenDecimals: 18,
    depostLimit:0,
    tokenDescriptionUrl: '',
    tokenDescriptionUrl2: '',
    earnedToken: 'E11',
    earnedTokenAddress: '0x3Ed531BfB3FAD41111f6dab567b33C4db897f991',
    earnContractAddress: '0x3Ed531BfB3FAD41111f6dab567b33C4db897f991',
    defaultApy: "39.54",
    pricePerFullShare: 1,
    pastPricePerFullShare: 1,
    tokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
    categories: ['Pancake'],

    farm: {
      earnedToken: 'ELE',
      earnedTokenDecimals: 18,
      earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
      earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
      masterchefPid: 7
    },

    fees: {
      deposit: 0,
      withdrawal: 0,
      controller: 0,
      platform: 0
    },

    links: [
      {type: 'buy_token', url: 'https://app.1inch.io/#/56/swap/BNB/ELE'}
    ]
  },
//   {
//     network: 'bsc',
//     id: 'elebnb',
//     name: 'ELE-BNB LP V2',
//     token: 'ELE-BNB LP V2',
//     tokenDescription: 'ELE-BNB LP V2',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'ELE-BNB LP V2',
//     earnedTokenAddress: '0xa9338126a645aca52aa74ce65fbc1092eb67d335',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xa9338126a645aca52aa74ce65fbc1092eb67d335',
//     categories: ['Pancake'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 104
//     },

//     links: [
//       {type: 'buy_token', url: 'https://app.1inch.io/#/56/swap/BNB/ELE'},
//       {type: 'add_liq', url: 'https://exchange.pancakeswap.finance/#/add/BNB/0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'qelematic',
//     name: 'qelematic',
//     image: 'ele_matic.png',
//     token: 'ELE-MATIC qLP',
//     tokenDescription: 'ELE-MATIC qLP',
//     tokenDecimals: 18,
//     uses: 'Uses quickswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ELEMATIC qLP',
//     earnedTokenAddress: '0x297936316a539Dfa8287fc8966300Bf4fD6dD4bF',
//     earnContractAddress: '0x297936316a539Dfa8287fc8966300Bf4fD6dD4bF',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xADcb09FD3346c72C98753e518397b336333Cf227',
//     categories: ['Cometh'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 29
//     },


//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//       {type: 'add_liq', url: 'https://quickswap.exchange/#/add/ETH/0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'elequick',
//     name: 'elequick',
//     image: 'ele_quick.png',
//     token: 'ELE-QUICK qLP',
//     tokenDescription: 'ELE-QUICK qLP',
//     tokenDecimals: 18,
//     uses: 'Uses quickswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ELEQUICK qLP',
//     earnedTokenAddress: '0xBFc3aED1D368275cf51E7a8A74F819f9DEF5329f',
//     earnContractAddress: '0xBFc3aED1D368275cf51E7a8A74F819f9DEF5329f',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x6696db3A5eF00e24c065edcFbc114b13Ea9eE997',
//     categories: ['Cometh'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 30
//     },


//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//       {type: 'add_liq', url: 'https://quickswap.exchange/#/add/0x831753dd7087cac61ab5644b308642cc1c33dc13/0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'celematic',
//     name: 'celematic',
//     image: 'ele_matic.png',
//     token: 'ELE-MATIC cLP',
//     tokenDescription: 'ELE-MATIC cLP',
//     tokenDecimals: 18,
//     uses: 'Uses cometh',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ELEMATIC cLP',
//     earnedTokenAddress: '0x2A4947512163110C5b06276cf7C8D31Cdf374489',
//     earnContractAddress: '0x2A4947512163110C5b06276cf7C8D31Cdf374489',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x56f91f954271906496c68eFe8cDf5D13cED09e8A',
//     categories: ['Cometh'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 13
//     },


//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.cometh.io/#/swap?outputCurrency=0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//       {type: 'add_liq', url: 'https://swap.cometh.io/#/add/ETH/0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'elemust',
//     name: 'elemust',
//     image: 'elemust.png',
//     token: 'ELE-MUST cLP',
//     tokenDescription: 'ELE-MATIC cLP',
//     tokenDecimals: 18,
//     uses: 'Uses cometh',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ELEMUST',
//     earnedTokenAddress: '0xd54dD032d36dB9F780A533fBA50Ea37C6A2646C5',
//     earnContractAddress: '0xd54dD032d36dB9F780A533fBA50Ea37C6A2646C5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x477931816F7aeedc8FE837D413a3000B0a9B4C5b',
//     categories: ['Cometh'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 14
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.cometh.io/#/swap?outputCurrency=0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//       {type: 'add_liq', url: 'https://swap.cometh.io/#/add/0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f/0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'elematic',
//     name: 'ELE-MATIC SLP',
//     image: 'ele_matic.png',
//     token: 'ELE-MATIC SLP',
//     tokenDescription: 'ELE-MATIC SLP',
//     tokenDecimals: 18,
//     uses: 'Uses sushiswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'ELE-BNB SLP',
//     earnedTokenAddress: '0x5a895D1eac4905384e4AF39dB47B64655B8f6aCA',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x5a895D1eac4905384e4AF39dB47B64655B8f6aCA',
//     categories: ['Sushi'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 0
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'elebnbw',
//     name: 'ELEBNB',
//     image: 'ELE-BNB\ LP-logo.svg',
//     token: 'ELE-BNB WLP',
//     tokenDescription: 'ELEBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wELEBNB',
//     earnedTokenAddress: '0x5bC5aa4B82800Fc965C8856f9628ec5730049E9E',
//     earnContractAddress: '0x5bC5aa4B82800Fc965C8856f9628ec5730049E9E',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7eB399165722A98E047471157FF6CdDeEd95a2e1',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 214
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'ele-maticw',
//     name: 'ELE-MATIC WLP',
//     image: 'ele_matic.png',
//     token: 'ELE-MATIC WLP',
//     tokenDescription: 'ELE-MATIC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ELEMATICW',
//     earnedTokenAddress: '0x7b0FA3f24ebe5b6DB55b311CfA0ea8E587fC3948',
//     earnContractAddress: '0x7b0FA3f24ebe5b6DB55b311CfA0ea8E587fC3948',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xFd5D691EE53982fb96B56a1f3fE0ee0ca0Fd9218',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'wexpoly',
//     name: 'wexpoly',
//     image: 'wexpoly.png',
//     token: 'WEXpoly',
//     tokenDescription: 'Wexpoly',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WEXPOLY',
//     earnedTokenAddress: '0xB137fC75C8ec7002D18135A49453897B25153e29',
//     earnContractAddress: '0xB137fC75C8ec7002D18135A49453897B25153e29',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x4c4BF319237D98a30A929A96112EfFa8DA3510EB',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'wexp-matic',
//     name: 'WEXP-MATIC WLP',
//     image: 'wexpoly-matic.png',
//     token: 'WEXP-MATIC WLP',
//     tokenDescription: 'WEXP-MATIC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WEXPMATICW',
//     earnedTokenAddress: '0x551BE90d8D6c47C2Ac03E1BFeE958E4DbA68C662',
//     earnContractAddress: '0x551BE90d8D6c47C2Ac03E1BFeE958E4DbA68C662',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xC46991072C7eAC184F7bd69d3122cd1750300b27',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'matic-ethw',
//     name: 'MATIC-ETH WLP',
//     image: 'matic-eth.png',
//     token: 'MATIC-ETH WLP',
//     tokenDescription: 'MATIC-ETH WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11MATICETHW',
//     earnedTokenAddress: '0xefE3a0E8ae9D78e02A9a96a7fb0b77b5772bd7d5',
//     earnContractAddress: '0xefE3a0E8ae9D78e02A9a96a7fb0b77b5772bd7d5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x679B8Ab80F298bF802fB294137765C6386D43dcA',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'matic-usdcw',
//     name: 'MATIC-USDC WLP',
//     image: 'matic-usdc.png',
//     token: 'MATIC-USDC WLP',
//     tokenDescription: 'MATIC-USDC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11MATICUSDCW',
//     earnedTokenAddress: '0x08479BaB15ee4932aDBE8313b270c08fbE4385DB',
//     earnContractAddress: '0x08479BaB15ee4932aDBE8313b270c08fbE4385DB',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8312A29A91D9Fac706F4d2ADEB1FA4540faD1673',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'eth-usdcw',
//     name: 'ETH-USDC WLP',
//     image: 'eth-usdc.png',
//     token: 'ETH-USDC WLP',
//     tokenDescription: 'ETH-USDC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ETHUSDCW',
//     earnedTokenAddress: '0x41a971B034f27a98Ebb83b4c269C075176BC8120',
//     earnContractAddress: '0x41a971B034f27a98Ebb83b4c269C075176BC8120',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xd928Ce1d0F2642e44615768761C0F00c23E0d588',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'wbtcwethwlpp',
//     name: 'WBTC-WETH WLP',
//     image: 'btc-eth.png',
//     token: 'WBTC-WETH WLP',
//     tokenDescription: 'WBTC-WETH WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WBTCWETHW',
//     earnedTokenAddress: '0x1A07A25A2709c7d1E9D490810A8bC77C591465e0',
//     earnContractAddress: '0x1A07A25A2709c7d1E9D490810A8bC77C591465e0',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x30AdBCAb9Fbb4436109fcf3058D1Af27E6E33F3F',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'wbtcusdc',
//     name: 'WBTC-USDC WLP',
//     image: 'btc-usdc.png',
//     token: 'WBTC-USDC WLP',
//     tokenDescription: 'WBTC-USDC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WBTCUSDCW',
//     earnedTokenAddress: '0x25B8b36711Ff3f26F63398036a111710b762D886',
//     earnContractAddress: '0x25B8b36711Ff3f26F63398036a111710b762D886',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x30eEf213D4B9C809f5776Ae56cC39f02f19F742f',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'usdc-usdtwp',
//     name: 'USDC-USDT WLPp',
//     image: 'usdc-usdt.png',
//     token: 'USDC-USDT WLPp',
//     tokenDescription: 'USDC-USDT WLPp',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDCUSDTWp',
//     earnedTokenAddress: '0x3E100f668ee0798907494320021364C3381e7c45',
//     earnContractAddress: '0x3E100f668ee0798907494320021364C3381e7c45',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7242e19A0937ac33472febD69462668a4cf5bbC5',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'usdcdaiwp',
//     name: 'USDC-DAI WLP',
//     image: 'usdc-dai.png',
//     token: 'USDC-DAI WLPp',
//     tokenDescription: 'USDC-DAI WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDCDAIp',
//     earnedTokenAddress: '0x32967A223ED1451e40E8377BE6711a5fBDBA8577',
//     earnContractAddress: '0x32967A223ED1451e40E8377BE6711a5fBDBA8577',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8E5c5AE2542116b5715b12bb2d391A770a607075',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'dai-ethwp',
//     name: 'DAI-ETH WLPp',
//     image: 'dai-eth.png',
//     token: 'DAI-ETH WLPp',
//     tokenDescription: 'DAI-ETH WLPp',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DAIETHWLPp',
//     earnedTokenAddress: '0x05F3E3a431e7f63fa5B244fEd32216a5Ff23fF63',
//     earnContractAddress: '0x05F3E3a431e7f63fa5B244fEd32216a5Ff23fF63',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xaEF35d720C56eF3c259BCCdB6931F331c7f15b3F',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'ethaave',
//     name: 'ETH-AAVE WLP',
//     image: 'eth-aave.png',
//     token: 'ETH-AAVE WLP',
//     tokenDescription: 'ETH-AAVE WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ETHAAVE',
//     earnedTokenAddress: '0x75B6d0342CFD7723d621d1185c5D85552F6d67Bd',
//     earnContractAddress: '0x75B6d0342CFD7723d621d1185c5D85552F6d67Bd',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x58401db5eD194cBA60f2b7D59b9619D54e0B493c',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'link-ethw',
//     name: 'LINK-ETH WLP',
//     image: 'link-eth.png',
//     token: 'LINK-ETH WLP',
//     tokenDescription: 'LINK-ETH WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LINKETHW',
//     earnedTokenAddress: '0x67b4b6d5e79C16e9cFaB59ebdFF79414F1C4C371',
//     earnContractAddress: '0x67b4b6d5e79C16e9cFaB59ebdFF79414F1C4C371',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x70bF5ffCC6090A8D243FD05485Ec4c084BD10Ae5',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'snxeth',
//     name: 'SNX-ETH WLP',
//     image: 'snx-eth.png',
//     token: 'SNX-ETH WLP',
//     tokenDescription: 'SNX-ETH WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SNXETHW',
//     earnedTokenAddress: '0x8B5Ac432aa751062E9145f0bE0535D585c4dD168',
//     earnContractAddress: '0x8B5Ac432aa751062E9145f0bE0535D585c4dD168',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x2857Ec555c1E4fA20982AcBf985b8b8807157A5B',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'pautomatic',
//     name: 'PAUTO-MATIC WLP',
//     image: 'auto-matic.png',
//     token: 'PAUTO-MATIC WLP',
//     tokenDescription: 'PAUTO-MATIC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11PAUTOMATIC',
//     earnedTokenAddress: '0x1E87579eaf9BbDbEd0c501d8EeB5a5D9B249fE83',
//     earnContractAddress: '0x1E87579eaf9BbDbEd0c501d8EeB5a5D9B249fE83',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x16d1853AD3f3Ce542eBDDa631D6493d90ec25791',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'bifimatic',
//     name: 'BIFI-MATIC WLP',
//     image: 'bifi-matic.png',
//     token: 'BIFI-MATIC WLP',
//     tokenDescription: 'BIFI-MATIC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BIFIMATICW',
//     earnedTokenAddress: '0x0Cd17f43A5Db82cFA7E9fd0b328762F602C5A178',
//     earnContractAddress: '0x0Cd17f43A5Db82cFA7E9fd0b328762F602C5A178',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xE60afed80406190C3AB2C17501d417097Dd741DB',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'polydogematic',
//     name: 'POLYDOGE-MATIC WLP',
//     image: 'polydoge-matic.png',
//     token: 'POLYDOGE-MATIC WLP',
//     tokenDescription: 'POLYDOGE-MATIC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11POLYDOGEMATIC',
//     earnedTokenAddress: '0x3Dd3E6DB11f0bAbeff02c8476CAa0b67b14D0A09',
//     earnContractAddress: '0x3Dd3E6DB11f0bAbeff02c8476CAa0b67b14D0A09',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1a881D021d346C5433B2cf8FB46Ee00Dec89070d',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'waultxmatic',
//     name: 'WAULTX-MATIC WLP',
//     image: 'waultx-matic.png',
//     token: 'WAULTX-MATIC WLP',
//     tokenDescription: 'WAULTX-MATIC WLP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WAULTXMATIC',
//     earnedTokenAddress: '0x358DB93025bfFfDcaBa4c952b7Db7EA49e5203CB',
//     earnContractAddress: '0x358DB93025bfFfDcaBa4c952b7Db7EA49e5203CB',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xae74c0aB6f76bcf9995784D337ba98e02Eb2dB75',
//     categories: ['WaultPoly'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//   },
//   {
//     network: 'polygon',
//     id: 'usdcironq',
//     name: 'USDC-IRON QLP',
//     image: 'iron_usdc.png',
//     token: 'USDC-IRON QLP',
//     tokenDescription: 'USDC-IRON QLP',
//     tokenDecimals: 18,
//     uses: 'Uses iron.finance + quickswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDCIRONQ',
//     earnedTokenAddress: '0x6f40f9F05212d8272eC096b0842E611BFeCe2211',
//     earnContractAddress: '0x6f40f9F05212d8272eC096b0842E611BFeCe2211',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x2Bbe0F728f4d5821F84eeE0432D2A4be7C0cB7Fc',
//     categories: ['Quick', 'Iron'],

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xd86b5923f3ad7b585ed81b448170ae026c65ae9a'},
//       {type: 'add_liq', url: 'https://quickswap.exchange/#/add/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a/0x2791bca1f2de4661ed88a30c99a7a9449aa84174'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'titaneth',
//     name: 'TITAN-ETH QLP',
//     image: 'titan-eth.png',
//     token: 'TITAN-ETH QLP',
//     tokenDescription: 'TITAN-ETH QLP',
//     tokenDecimals: 18,
//     uses: 'Uses iron.finance + quickswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TITANETH',
//     earnedTokenAddress: '0x9E38551296e776b7d6592cE48fD02Cf4BA0cf648',
//     earnContractAddress: '0x9E38551296e776b7d6592cE48fD02Cf4BA0cf648',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xA28Ade2f27b9554b01964FDCe97eD643301411d9',
//     categories: ['Quick', 'Iron'],

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xaaa5b9e6c589642f98a1cda99b9d024b8407285a'},
//       {type: 'add_liq', url: 'https://quickswap.exchange/#/add/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a'},
//     ]
//   },

//   {
//     network: 'polygon',
//     id: 'titan ',
//     name: 'TITAN ',
//     image: 'titan.png',
//     token: 'TITAN ',
//     tokenDescription: 'TITAN ',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TITAN ',
//     earnedTokenAddress: '0x8F2331A864Bd34E17d04623A871f10187c68860f',
//     earnContractAddress: '0x8F2331A864Bd34E17d04623A871f10187c68860f',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A'},
//     ]
//   },

//   {
//     network: 'polygon',
//     id: 'polydoge',
//     name: 'POLYDOGE',
//     image: 'polydoge.svg',
//     token: 'POLYDOGE',
//     tokenDescription: 'POLYDOGE',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11POLYDOGE',
//     earnedTokenAddress: '0x39Cf6Bd2671798d482578CE4407bA5f64f87803D',
//     earnContractAddress: '0x39Cf6Bd2671798d482578CE4407bA5f64f87803D',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8A953CfE442c5E8855cc6c61b1293FA648BAE472',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x8A953CfE442c5E8855cc6c61b1293FA648BAE472'},
//     ]
//   },

//   {
//     network: 'polygon',
//     id: 'krill',
//     name: 'KRILL',
//     image: 'krill.svg',
//     token: 'KRILL',
//     tokenDescription: 'KRILL',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11KRILL',
//     earnedTokenAddress: '0x162Da44709810Dcb8b886B60d9b3d0B105A77946',
//     earnContractAddress: '0x162Da44709810Dcb8b886B60d9b3d0B105A77946',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/

//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x05089C9EBFFa4F0AcA269e32056b1b36B37ED71b'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'dai',
//     name: 'DAI',
//     image: 'dai.svg',
//     token: 'DAI',
//     tokenDescription: 'DAI',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DAI',
//     earnedTokenAddress: '0xc74968693A829CA04f49E741285a0BE831FaC5f7',
//     earnContractAddress: '0xc74968693A829CA04f49E741285a0BE831FaC5f7',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'usdt',
//     name: 'USDT',
//     image: 'usdt.svg',
//     token: 'USDT ',
//     tokenDescription: 'USDT',
//     tokenDecimals: 6,
//     uses: 'Uses polycat',
//     itokenDecimals: 6,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDT ',
//     earnedTokenAddress: '0xAA6bca49f7842823312B0d90b4e1e336A7DBf892',
//     earnContractAddress: '0xAA6bca49f7842823312B0d90b4e1e336A7DBf892',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xc2132D05D31c914a87C6611C10748AEb04B58e8F'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'dfyn',
//     name: 'DFYN',
//     image: 'dfyn.svg',
//     token: 'DFYN',
//     tokenDescription: 'DFYN',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DFYN',
//     earnedTokenAddress: '0xC5E165c4Da919448889e4DDf625E56641A340Dab',
//     earnContractAddress: '0xC5E165c4Da919448889e4DDf625E56641A340Dab',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xC168E40227E4ebD8C1caE80F7a55a4F0e6D66C97'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'wmatic',
//     name: 'WMATIC',
//     image: 'wmatic.svg',
//     token: 'WMATIC',
//     tokenDescription: 'WMATIC',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WMATIC',
//     earnedTokenAddress: '0x90FcA6d7931B4feCAe00c3dD864304AC8848fF7A',
//     earnContractAddress: '0x90FcA6d7931B4feCAe00c3dD864304AC8848fF7A',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
//     categories: ['Polycat'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },

//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'wbtc',
//     name: 'WBTC',
//     image: 'wbtc.svg',
//     token: 'WBTC',
//     tokenDescription: 'WBTC',
//     tokenDecimals: 8,
//     uses: 'Uses polycat',
//     itokenDecimals: 8,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WBTC',
//     earnedTokenAddress: '0xa599e42A39dEa9230A8164dEC8316C2522c9cCd7',
//     earnContractAddress: '0xa599e42A39dEa9230A8164dEC8316C2522c9cCd7',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
//     categories: ['Polycat'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 10
//     },

//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'weth',
//     name: 'WETH',
//     image: 'weth.svg',
//     token: 'WETH',
//     tokenDescription: 'WETH',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WETH',
//     earnedTokenAddress: '0xde2AB86CC044a2905917F3123aD5b833b363298A',
//     earnContractAddress: '0xde2AB86CC044a2905917F3123aD5b833b363298A',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
//     categories: ['Polycat'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 11
//     },

//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'iron',
//     name: 'IRON',
//     image: 'iron.png',
//     token: 'IRON',
//     tokenDescription: 'IRON',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11IRON',
//     earnedTokenAddress: '0x3856f4E61f5b28FEE2Fbf322fc03a03AFB930f4f',
//     earnContractAddress: '0x3856f4E61f5b28FEE2Fbf322fc03a03AFB930f4f',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xD86b5923F3AD7b585eD81B448170ae026c65ae9a',
//     categories: ['Polycat', 'Iron'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 12
//     },

//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xD86b5923F3AD7b585eD81B448170ae026c65ae9a'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'sushi',
//     name: 'SUSHI',
//     image: 'sushi.svg',
//     token: 'SUSHI',
//     tokenDescription: 'SUSHI',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SUSHI',
//     earnedTokenAddress: '0xB29425F706ea716C91a2AE68EE883C6A6791938b',
//     earnContractAddress: '0xB29425F706ea716C91a2AE68EE883C6A6791938b',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'link',
//     name: 'LINK',
//     image: 'link.svg',
//     token: 'LINK',
//     tokenDescription: 'LINK',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LINK',
//     earnedTokenAddress: '0x60c9D693cbe45df09327A46F0792F821Cd58A438',
//     earnContractAddress: '0x60c9D693cbe45df09327A46F0792F821Cd58A438',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'usdc',
//     name: 'USDC',
//     image: 'usdc.svg',
//     token: 'USDC ',
//     tokenDescription: 'USDC',
//     tokenDecimals: 6,
//     uses: 'Uses polycat',
//     itokenDecimals: 6,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDC',
//     earnedTokenAddress: '0x299FA358763037657Bea14825CD06ff390C2a634',
//     earnContractAddress: '0x299FA358763037657Bea14825CD06ff390C2a634',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/
//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'quick',
//     name: 'QUICK',
//     image: 'quick.png',
//     token: 'QUICK',
//     tokenDescription: 'QUICK',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11QUICK',
//     earnedTokenAddress: '0x38E5c26f7bEC4E5966061a1bB13B656999F91c65',
//     earnContractAddress: '0x38E5c26f7bEC4E5966061a1bB13B656999F91c65',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x831753DD7087CaC61aB5644b308642cc1c33Dc13',
//     categories: ['Polycat'],

// /*    farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 9
//     },*/


//     fees: {
//       third_party: '4% on deposit',
//       deposit: 0,
//       depositWarning: '<p>Be aware of <b>4% Deposit fee</b> on this pool.</p>'
//         + '<p>The fee is charged by Polycat, Eleven doesn\'t charge you on the deposit</p>',
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x831753DD7087CaC61aB5644b308642cc1c33Dc13'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'fishmatic',
//     name: 'FISH-MATIC qLP',
//     image: 'fish-matic.svg',
//     token: 'FISH-MATIC qLP',
//     tokenDescription: 'FISH-MATIC qLP',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11FISHMATIC qLP',
//     earnedTokenAddress: '0xF4051fdd819c580e4C03fF73cff9a6D9f29Bd48d',
//     earnContractAddress: '0xF4051fdd819c580e4C03fF73cff9a6D9f29Bd48d',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x289cf2B63c5Edeeeab89663639674d9233E8668E',
//     categories: ['Polycat'],

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x3a3df212b7aa91aa0402b9035b098891d276572b'},
//       {type: 'add_liq', url: 'https://quickswap.exchange/#/add/ETH/0x3a3df212b7aa91aa0402b9035b098891d276572b'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'fishmaticd',
//     name: 'FISH-MATIC dLP',
//     image: 'fish-matic.svg',
//     token: 'FISH-MATIC dLP',
//     tokenDescription: 'FISH-MATIC dLP',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11FISHMATIC dLP',
//     earnedTokenAddress: '0x873Ba405abD1Cdc561499097f03E08CCc054eCf8',
//     earnContractAddress: '0x873Ba405abD1Cdc561499097f03E08CCc054eCf8',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x9e2Fbb31fBd68472f6cd54A1635b8cd64d78FC1C',
//     categories: ['Polycat'],

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://exchange.dfyn.network/#/swap?inputCurrency=MATIC&outputCurrency=0x3a3Df212b7AA91Aa0402B9035b098891d276572B'},
//       {type: 'add_liq', url: 'https://exchange.dfyn.network/#/add/ETH/0x3a3Df212b7AA91Aa0402B9035b098891d276572B'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'fish',
//     name: 'FISH',
//     image: 'fish.svg',
//     token: 'FISH',
//     tokenDescription: 'FISH',
//     tokenDecimals: 18,
//     uses: 'Uses polycat',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11FISH',
//     earnedTokenAddress: '0x5c95B6C16df69e97D5AEc4cFEFbb1200847D7101',
//     earnContractAddress: '0x5c95B6C16df69e97D5AEc4cFEFbb1200847D7101',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x3a3Df212b7AA91Aa0402B9035b098891d276572B',
//     categories: ['Curve'],

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0x3a3Df212b7AA91Aa0402B9035b098891d276572B'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'curve3pool',
//     name: 'am3CRV',
//     image: 'am3crv.png',
//     token: '3 Curve LP',
//     tokenDescription: 'am3CRV',
//     tokenDecimals: 18,
//     uses: 'Uses curve',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11CRV3',
//     earnedTokenAddress: '0x52B8bb74Cde6602AB9e6540e25E0A97f5B3226D7',
//     earnContractAddress: '0x52B8bb74Cde6602AB9e6540e25E0A97f5B3226D7',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171',
//     categories: ['Curve'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//       masterchefPid: 2
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'add_liq', url: 'https://polygon.curve.fi/aave'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'usdciron',
//     name: 'USDC-IRON SLP',
//     image: 'iron_usdc.png',
//     token: 'USDC-IRON SLP',
//     tokenDescription: 'USDC-IRON SLP',
//     tokenDecimals: 18,
//     uses: 'Uses iron.finance + sushiswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDCIRON',
//     earnedTokenAddress: '0x198265Ff748DaE52a6c58ceE1a91E1457eF957eF',
//     earnContractAddress: '0x198265Ff748DaE52a6c58ceE1a91E1457eF957eF',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x85dE135fF062Df790A5f20B79120f17D3da63b2d',
//     categories: ['Sushi', 'Iron'],

//      farm: {
//        isDisabled: true,
//        earnedToken: 'ELE',
//        earnedTokenDecimals: 18,
//        earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//        earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//        masterchefPid: 3
//      },

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://app.sushi.com/#/swap?outputCurrency=0xd86b5923f3ad7b585ed81b448170ae026c65ae9a'},
//       {type: 'add_liq', url: 'https://app.sushi.com/#/add/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a/0x2791bca1f2de4661ed88a30c99a7a9449aa84174'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'titanmatic',
//     name: 'TITAN-MATIC SLP',
//     image: 'titan_matic.png',
//     token: 'TITAN-MATIC SLP',
//     tokenDescription: 'TITAN-MATIC SLP',
//     tokenDecimals: 18,
//     uses: 'Uses iron.finance',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TITANMATIC',
//     earnedTokenAddress: '0xd7C5a3Cba73D4c9F042F88928d1CD64b64E76A50',
//     earnContractAddress: '0xd7C5a3Cba73D4c9F042F88928d1CD64b64E76A50',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xA79983Daf2A92c2C902cD74217Efe3D8AF9Fba2a',
//     categories: ['Sushi', 'Iron'],

//      farm: {
//        isDisabled: true,
//        earnedToken: 'ELE',
//        earnedTokenDecimals: 18,
//        earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//        earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//        masterchefPid: 4
//      },

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://app.sushi.com/#/swap?outputCurrency=0xaaa5b9e6c589642f98a1cda99b9d024b8407285a'},
//       {type: 'add_liq', url: 'https://app.sushi.com/#/add/ETH/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'titaniron',
//     name: 'TITAN-IRON SLP',
//     image: 'titan_iron.png',
//     token: 'TITAN-IRON SLP',
//     tokenDescription: 'TITAN-IRON SLP',
//     tokenDecimals: 18,
//     uses: 'Uses iron.finance',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TITANIRON',
//     earnedTokenAddress: '0x47f9F157317e7e655dF30E013ce14730d224D4e5',
//     earnContractAddress: '0x47f9F157317e7e655dF30E013ce14730d224D4e5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x35c1895DAC1e2432b320e2927b4F71a0D995602F',
//     categories: ['Sushi', 'Iron'],

//      farm: {
//        isDisabled: true,
//        earnedToken: 'ELE',
//        earnedTokenDecimals: 18,
//        earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//        earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//        masterchefPid: 5
//      },

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://app.sushi.com/#/swap?inputCurrency=0xaaa5b9e6c589642f98a1cda99b9d024b8407285a&outputCurrency=0xd86b5923f3ad7b585ed81b448170ae026c65ae9a'},
//       {type: 'add_liq', url: 'https://app.sushi.com/#/add/0xaaa5b9e6c589642f98a1cda99b9d024b8407285a/0xd86b5923f3ad7b585ed81b448170ae026c65ae9a'},
//     ]
//   },
//   {
//     network: 'polygon',
//     id: 'titan',
//     name: 'TITAN',
//     image: 'titan.png',
//     token: 'TITAN',
//     tokenDescription: 'TITAN',
//     tokenDecimals: 18,
//     uses: 'Uses iron.finance',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TITAN',
//     earnedTokenAddress: '0x5F2b2518616907A5f76f25e9e2b67a571879c610',
//     earnContractAddress: '0x5F2b2518616907A5f76f25e9e2b67a571879c610',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A',
//     categories: ['Iron'],

//      farm: {
//        earnedToken: 'ELE',
//        earnedTokenDecimals: 18,
//        earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//        earnContractAddress: '0xD109D9d6f258D48899D7D16549B89122B0536729',
//        masterchefPid: 6
//      },

//      fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.44,
//       platform: 0.44,
//       dividends: 0.14,
//       buybacks: 2.48,
//     },

//     links: [
//       {type: 'buy_token', url: 'https://quickswap.exchange/#/swap?outputCurrency=0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'bfbnb',
//     name: 'BFBNB',
//     token: 'BNB',
//     tokenDescription: 'Bigfoot BNB',
//     tokenDecimals: 18,
//     uses: 'Uses Bigfoot',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'bfBNB',
//     earnedTokenAddress: '0xA96C90223e4cC69192A9ffF1BA4c8b86D02765B2',
//     earnContractAddress: '0xA96C90223e4cC69192A9ffF1BA4c8b86D02765B2',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: null, // use BNB
//     categories: ['Bigfoot'],

//     farm: {
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 79
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bfusd',
//     name: 'BFUSD',
//     image: 'bfusd.png',
//     token: 'USD',
//     tokenDescription: 'Bigfoot USD',

//     isMultiToken: true,
//     tokens: [
//       {
//         token: 'BUSD',
//         image: 'BUSD-logo.png',
//         address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
//         decimals: 18
//       },
//       {
//         token: 'USDT',
//         image: 'USDT-logo.png',
//         address: '0x55d398326f99059ff775485246999027b3197955',
//         decimals: 18
//       },
//       {
//         token: 'USDC',
//         image: 'USDC-logo.png',
//         address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
//         decimals: 18
//       },
//       {
//         token: '3NRV-LP',
//         image: '3NRV LP-logo.svg',
//         address: '0xf2511b5e4fb0e5e2d123004b672ba14850478c14',
//         decimals: 18
//       }
//     ],

//     uses: 'Uses Bigfoot',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'bfUSD',
//     earnedTokenAddress: '0xE9B3017cd7A347a8B0324F88db335255E5c5D3FD',
//     earnContractAddress: '0xE9B3017cd7A347a8B0324F88db335255E5c5D3FD',

//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,

//     categories: ['Bigfoot'],

//     claimable: true,
//     claimableEle: true,
//     claimableToken: '11NRV',
//     claimableRewardMethod: '11Nrv',

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'ethbtc',
//     name: 'ETH-BTC',
//     image: 'btc-eth.png',
//     token: 'ETH-BTC WLP',
//     tokenDescription: 'ETH-BTC',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ETHBTC',
//     earnedTokenAddress: '0x33E87056cDD212310725eCd2FF465C69e87fBCbE',
//     earnContractAddress: '0x33E87056cDD212310725eCd2FF465C69e87fBCbE',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xBb43C776D9dDDaD1395e1543545d05E138ccb4BA',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 223
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8&outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x2170ed0880ac9a755fd29b2688956bd959f933f8/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'hfsbusd',
//     name: 'HFS',
//     image: 'hfs-busd.png',
//     token: 'HFS-BUSD WLP',
//     tokenDescription: 'HFS',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11HFSBUSD',
//     earnedTokenAddress: '0x8b06b41c78a5521E882ca1cac10777C6831b203F',
//     earnContractAddress: '0x8b06b41c78a5521E882ca1cac10777C6831b203F',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7517Bd126ca57a3c941ad3a53818367Fa149251b',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 223
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x9412f9ab702afbd805dece8e0627427461ef0602&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x9412f9ab702afbd805dece8e0627427461ef0602/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'nerve',
//     name: 'NRV',
//     token: 'NRV',
//     tokenDescription: 'NRV',
//     tokenDecimals: 18,
//     uses: 'Uses xnrv from nerve',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11NRV',
//     earnedTokenAddress: '0x54f4D5dd6164B99603E77C8E13FFC3B239F63147',
//     earnContractAddress: '0x54f4D5dd6164B99603E77C8E13FFC3B239F63147',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096',
//     categories: ['Nerve'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 97
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nerveeth',
//     name: 'nrvETH',
//     token: 'nrvETH',
//     tokenDescription: 'nrvETH',
//     tokenDecimals: 18,
//     uses: 'Uses nerve',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11nrvETH',
//     earnedTokenAddress: '0x5C0E7b820fCC7cC66b787A204B2B31cbc027843f',
//     earnContractAddress: '0x5C0E7b820fCC7cC66b787A204B2B31cbc027843f',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0d283BF16A9bdE49cfC48d8dc050AF28b71bdD90',
//     categories: ['Nerve'],

//     claimable: true,
//     claimableEle: false,
//     claimableToken: '11NRV',
//     claimableRewardMethod: 'Nerve',

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nerveust',
//     name: 'nrvUST',
//     token: 'nrvUST',
//     tokenDescription: 'nrvUST',
//     image: 'nrvust.png',
//     tokenDecimals: 18,
//     uses: 'Uses nerve',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11nrvUST',
//     earnedTokenAddress: '0x637954736eD4Cb0AdF1e636838D2789DEdb5113c',
//     earnContractAddress: '0x637954736eD4Cb0AdF1e636838D2789DEdb5113c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x35Ce243e0DC9eD77e3C348Bb2742095F78e1Cb70',
//     categories: ['Nerve'],

//     claimable: true,
//     claimableEle: false,
//     claimableToken: '11NRV',
//     claimableRewardMethod: 'Nerve',

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nervefusdt',
//     name: 'nrvFUSDT',
//     token: 'nrvFUSDT',
//     tokenDescription: 'nrvFUSDT',
//     image: 'nrvfusdt.png',
//     tokenDecimals: 18,
//     uses: 'Uses nerve',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11nrvFUSDT',
//     earnedTokenAddress: '0x030970f2378748Eca951ca5b2f063C45225c8f6c',
//     earnContractAddress: '0x030970f2378748Eca951ca5b2f063C45225c8f6c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x2e91A0CECf28c5E518bB2E7fdcd9F8e2cd511c10',
//     categories: ['Nerve'],

//     claimable: true,
//     claimableEle: false,
//     claimableToken: '11NRV',
//     claimableRewardMethod: 'Nerve',

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nervebtc',
//     name: 'nrvBTC',
//     token: 'nrvBTC',
//     tokenDescription: 'nrvBTC',
//     tokenDecimals: 18,
//     uses: 'Uses nerve',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11nrvBTC',
//     earnedTokenAddress: '0x0D5BaE8f5232820eF56D98c04B8F531d2742555F',
//     earnContractAddress: '0x0D5BaE8f5232820eF56D98c04B8F531d2742555F',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xD1D5Af92C606C6F2eC59D453f57A6FCc188D7dB5',
//     categories: ['Nerve'],

//     claimable: true,
//     claimableEle: false,
//     claimableToken: '11NRV',
//     claimableRewardMethod: 'Nerve',

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nervebusd',
//     name: 'NRVBUSD',
//     token: 'NRV-BUSD LP',
//     tokenDescription: 'NRV',
//     tokenDecimals: 18,
//     uses: 'Uses nerve',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11nrvBUSD',
//     earnedTokenAddress: '0x27DD6E51BF715cFc0e2fe96Af26fC9DED89e4BE8',
//     earnContractAddress: '0x27DD6E51BF715cFc0e2fe96Af26fC9DED89e4BE8',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x401479091d0F7b8AE437Ee8B054575cd33ea72Bd',
//     categories: ['Pancake', 'Nerve'],

//     claimable: true,
//     claimableEle: false,
//     claimableToken: '11NRV',
//     claimableRewardMethod: 'Nerve',

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nerve3pool',
//     name: '3NRV',
//     token: '3NRV LP',
//     tokenDescription: '3NRV',
//     tokenDecimals: 18,
//     uses: 'Uses nerve',
//     itokenDecimals: 18,
//     depostLimit: 0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11pool3',
//     earnedTokenAddress: '0x025E2e9113dC1f6549C83E761d70E647c8CDE187',
//     earnContractAddress: '0x025E2e9113dC1f6549C83E761d70E647c8CDE187',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xf2511b5E4FB0e5E2d123004b672BA14850478C14',
//     categories: ['Nerve'],

//     claimable: true,
//     claimableEle: false,
//     claimableToken: '11NRV',
//     claimableRewardMethod: 'Nerve',

//     fees: {
//       deposit: 0,
//       withdrawal: 0,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'nervebnb',
//     name: 'NRV',
//     token: 'NRV-BNB LP',
//     tokenDescription: 'NRV',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11NRVBNB',
//     earnedTokenAddress: '0x9009a831fd7469ae9d4a07250cbbae05c2b5c165',
//     earnContractAddress: '0x9009a831fd7469ae9d4a07250cbbae05c2b5c165',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xE482249Cd295C0d1e9D2baAEE71e66de21024C68',
//     categories: ['Pancake', 'Nerve'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 109
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'btcBbusdw',
//     name: 'BTC',
//     image: 'btcb-busd.png',
//     token: 'BTCB-BUSD WLP',
//     tokenDescription: 'BTCB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BTCBBUSDw',
//     earnedTokenAddress: '0xc955BDF243538b60C1f7E8Ce2aCbF0c314bD8586',
//     earnContractAddress: '0xc955BDF243538b60C1f7E8Ce2aCbF0c314bD8586',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x61Ad21f79D1Bf96206Ad28d97B15D98a55944a2a',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 202
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'ethbusdw',
//     name: 'ETH',
//     image: 'eth-busd.png',
//     token: 'ETH-BUSD WLP',
//     tokenDescription: 'ETH',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ETHBUSDw',
//     earnedTokenAddress: '0x176ddF98DF57e6535ce635CF908216112fC67b3b',
//     earnContractAddress: '0x176ddF98DF57e6535ce635CF908216112fC67b3b',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x40a2739d8B2CDDd5EDB8B563BA8e4c3326e23716',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 203
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x2170ed0880ac9a755fd29b2688956bd959f933f8/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'usdtbusd',
//     name: 'USDTBUSD',
//     image: 'usdt-busd.png',
//     token: 'USDT-BUSD WLP',
//     tokenDescription: 'USDTBUSD',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDTBUSDw',
//     earnedTokenAddress: '0x1a489eE9Ccd2f062F86361fB7af9DAC9293864BC',
//     earnContractAddress: '0x1a489eE9Ccd2f062F86361fB7af9DAC9293864BC',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x9Ce20a5169A3CD64A98C2C200aA995A2d8c8830e',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 204
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0x55d398326f99059ff775485246999027b3197955'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x55d398326f99059ff775485246999027b3197955'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'daibusd',
//     name: 'DAIBUSD',
//     image: 'dai-busd.png',
//     token: 'DAI-BUSD WLP',
//     tokenDescription: 'DAIBUSD',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DAIBUSDw',
//     earnedTokenAddress: '0xC9034e3E14118411a8B9cb19A6c5bF66147ADEdf',
//     earnContractAddress: '0xC9034e3E14118411a8B9cb19A6c5bF66147ADEdf',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xcED829cB73d21B34a0AD4687C3Cd7D398172DBD8',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 205
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'xvsbusd',
//     name: 'XVS',
//     image: 'xvs-busd.png',
//     token: 'XVS-BUSD WLP',
//     tokenDescription: 'XVS',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11XVSUSDw',
//     earnedTokenAddress: '0xc7510D6baB5904E1898b15906dBe63c0C111918c',
//     earnContractAddress: '0xc7510D6baB5904E1898b15906dBe63c0C111918c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7483DF6349256c5f95155A5114A015014f35bd8d',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 206
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'ltcbusdw',
//     name: 'LTC',
//     image: 'ltc-busd.png',
//     token: 'LTC-BUSD WLP',
//     tokenDescription: 'LTC',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LTCBUSDw',
//     earnedTokenAddress: '0x4ED4E91862559C49656E9583f83dD085cE724d1A',
//     earnContractAddress: '0x4ED4E91862559C49656E9583f83dD085cE724d1A',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1209067dC48B3E15B25126EC785EC6CE492E997d',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 207
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x4338665cbb7b2485a8855a139b75d5e34ab0db94&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x4338665cbb7b2485a8855a139b75d5e34ab0db94/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'xrpbusdw',
//     name: 'XRP',
//     image: 'xrp-busd.png',
//     token: 'XRP-BUSD WLP',
//     tokenDescription: 'XRP',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11XRPBUSDw',
//     earnedTokenAddress: '0xe5B870D22c2132C1D3C0fD8FF175c6213057406D',
//     earnContractAddress: '0xe5B870D22c2132C1D3C0fD8FF175c6213057406D',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0e3ccA3D602eBEA46CF349B991Ee0d857A096d3D',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 208
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'adabusdw',
//     name: 'ADA',
//     image: 'ada-busd.png',
//     token: 'ADA-BUSD WLP',
//     tokenDescription: 'BTC',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ADABUSDw',
//     earnedTokenAddress: '0xdbEAC4D4568d6Ef96dab004ae746bFaD037d23EE',
//     earnContractAddress: '0xdbEAC4D4568d6Ef96dab004ae746bFaD037d23EE',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB24a49d02380fCDFbc320c25B0dCa997d2ed435D',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 209
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0x3ee2200efb3400fabb9aacf31297cbdd1d435d47&outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'wexbnb',
//     name: 'WEX',
//     image: 'wexbnb.png',
//     token: 'WEX-BNB WLP',
//     tokenDescription: 'WEX',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WEXBNB',
//     earnedTokenAddress: '0x8e46ACE8e4F6d4Fdf5811cd04b39477C732C180a',
//     earnContractAddress: '0x8e46ACE8e4F6d4Fdf5811cd04b39477C732C180a',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xb4814f1ca673dBE9a2637C5dd4e94A4a0ED834C6',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 186
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=BNB&outputCurrency=0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'wexusdt',
//     name: 'WEX',
//     image: 'wexusdt.png',
//     token: 'WEX-USDT WLP',
//     tokenDescription: 'WEX',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WEXUSDT',
//     earnedTokenAddress: '0xB225A38b71933482c4E7954701992aD386432E99',
//     earnContractAddress: '0xB225A38b71933482c4E7954701992aD386432E99',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x50e8D9Aa83eBDe9608074eC1faaDfD2E792D9B81',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 215
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?inputCurrency=0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90&outputCurrency=0x55d398326f99059ff775485246999027b3197955'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90/0x55d398326f99059ff775485246999027b3197955'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'wex',
//     name: 'WEX',
//     image: 'wex.png',
//     token: 'WEX',
//     tokenDescription: 'WEX',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WEX',
//     earnedTokenAddress: '0x9F98A5466309ea2d9F984eFAD401E75ed9ffF764',
//     earnContractAddress: '0x9F98A5466309ea2d9F984eFAD401E75ed9ffF764',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 189
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.2,
//       controller: 0,
//       platform: 0.03,
//       buybacks: 0.1,
//       waultx_burn: 0.07
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'waultxbnb',
//     name: 'WAULTXBNB',
//     image: 'waultxbnb.png',
//     token: 'WAULTX-BNB WLP',
//     tokenDescription: 'WAULTX',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wWAULTXBNB',
//     earnedTokenAddress: '0x76fa69c64341eF9ae32995919700cD1f1BBdC799',
//     earnContractAddress: '0x76fa69c64341eF9ae32995919700cD1f1BBdC799',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xA2eBDa2e8975B42068b6162C7dd798C2143caf21',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 188
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xb64e638e60d154b43f660a6bf8fd8a3b249a6a21'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xb64e638e60d154b43f660a6bf8fd8a3b249a6a21'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'autobnb',
//     name: 'autobnb',
//     image: 'autobnb.png',
//     token: 'AUTO-BNB WLP',
//     tokenDescription: 'AUTO',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11AUTOBNB',
//     earnedTokenAddress: '0xc354902b5e2028Df62495819Ce49846b1dE4070F',
//     earnContractAddress: '0xc354902b5e2028Df62495819Ce49846b1dE4070F',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0e63AB31929793EE521e1c5E4beB650ba78DA9bb',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 217
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xa184088a740c695e156f91f5cc086a06bb78b827'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xa184088a740c695e156f91f5cc086a06bb78b827'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'oraibnb',
//     name: 'ORAIBNB',
//     image: 'oraibnb.png',
//     token: 'ORAI-BNB WLP',
//     tokenDescription: 'ORAI',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ORAIBNB',
//     earnedTokenAddress: '0x0883AE231fF031b06Ec8548e5D899c4309890986',
//     earnContractAddress: '0x0883AE231fF031b06Ec8548e5D899c4309890986',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1723dFa2e79ecE2DF841486645B8C96161cBdA42',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 219
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xa325ad6d9c92b55a3fc5ad7e412b1518f96441c0'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xa325ad6d9c92b55a3fc5ad7e412b1518f96441c0'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'twinbnb',
//     name: 'TWINBNB',
//     image: 'twinbnb.png',
//     token: 'TWIN-BNB WLP',
//     tokenDescription: 'TWIN',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TWINBNB',
//     earnedTokenAddress: '0xf2b5230D23E80742D69623D51108fDd4af68d4d0',
//     earnContractAddress: '0xf2b5230D23E80742D69623D51108fDd4af68d4d0',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xF6D7a6504A56c0c81608340429fC9Ec2b6Bc943b',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 218
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xaf83f292fced83032f52ced45ef7dbddb586441a'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xaf83f292fced83032f52ced45ef7dbddb586441a'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'waultx',
//     name: 'WAULTX',
//     image: 'wault.png',
//     token: 'WAULTX',
//     tokenDescription: 'WAULTX',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WAULTX',
//     earnedTokenAddress: '0xE941e79b8614Ab48138ab4cfb9f674367CDc3cBC',
//     earnContractAddress: '0xE941e79b8614Ab48138ab4cfb9f674367CDc3cBC',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 201
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xB64E638E60D154B43f660a6BF8fD8a3b249a6a21'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'bnbbusdw',
//     name: 'BNBBUSD',
//     image: 'bnbbusd.png',
//     token: 'BNB-BUSD WLP',
//     tokenDescription: 'BNBBUSD',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wBNBBUSD',
//     earnedTokenAddress: '0xcABc4a6E6CD7253665aC7a769bB68156f5dA828e',
//     earnContractAddress: '0xcABc4a6E6CD7253665aC7a769bB68156f5dA828e',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x4bbed8D9A1B27A4DDd84a3368A850e78c9580404',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 190
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xe9e7cea3dedca5984780bafc599bd69add087d56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'cakebnbw',
//     name: 'CAKEBNB',
//     image: 'cakebnb.png',
//     token: 'CAKE-BNB WLP',
//     tokenDescription: 'CAKEBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wCAKEBNB',
//     earnedTokenAddress: '0x5108cb8c156aebbc0f9063d035fac3d5956f835a',
//     earnContractAddress: '0x5108cb8c156aebbc0f9063d035fac3d5956f835a',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7b12531Eb75F06A8C9cA4A5f27dbB952FD2A7430',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 191
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'btcbbnbw',
//     name: 'BTCBBNB',
//     image: 'btcbbnb.png',
//     token: 'BTCB-BNB WLP',
//     tokenDescription: 'BTCBBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wBTCBBNB',
//     earnedTokenAddress: '0x4193F8f3B7ec05eC296ED4BF96752FA16B6B3C34',
//     earnContractAddress: '0x4193F8f3B7ec05eC296ED4BF96752FA16B6B3C34',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xfCc62FB56c8E0630001B6EcC9eD38518D39499B2',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 192
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'ethbnbw',
//     name: 'ETHBNB',
//     image: 'ethbnb.png',
//     token: 'ETH-BNB WLP',
//     tokenDescription: 'ETHBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wETHBNB',
//     earnedTokenAddress: '0x4747aa95AB3bd8E7a2dc2b7088A290BE71aa96E7',
//     earnContractAddress: '0x4747aa95AB3bd8E7a2dc2b7088A290BE71aa96E7',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x04253aB3ff54D2E03b717BF6810a0a2Fd228365a',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 193
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x2170ed0880ac9a755fd29b2688956bd959f933f8'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x2170ed0880ac9a755fd29b2688956bd959f933f8'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'vaibnb',
//     name: 'VAIBNB',
//     image: 'vaibnb.png',
//     token: 'VAI-BNB WLP',
//     tokenDescription: 'VAIBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wVAIBNB',
//     earnedTokenAddress: '0xFDF42dbebB4e6f6ca13020396b61eE46e694cB6b',
//     earnContractAddress: '0xFDF42dbebB4e6f6ca13020396b61eE46e694cB6b',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB1b116D2814E92f3fAE565808695F93d0C2a2264',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 194
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x4bd17003473389a42daf6a0a729f6fdb328bbbd7'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'usdtbnbw',
//     name: 'USDTBNB',
//     image: 'usdtbnb.png',
//     token: 'USDT-BNB WLP',
//     tokenDescription: 'USDTBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wUSDTBNB',
//     earnedTokenAddress: '0xb0571A663F36f11142b21Fe146BeB2777031bC0B',
//     earnContractAddress: '0xb0571A663F36f11142b21Fe146BeB2777031bC0B',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xd6196036cB72BB921E013189CC594feC29453C2E',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 195
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x55d398326f99059ff775485246999027b3197955'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'usdcbnbw',
//     name: 'USDCBNB',
//     image: 'usdcbnb.png',
//     token: 'USDC-BNB WLP',
//     tokenDescription: 'USDCBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wUSDCBNB',
//     earnedTokenAddress: '0x7537Fd53A07Ca58561Bb8a0D370a8D8b70661647',
//     earnContractAddress: '0x7537Fd53A07Ca58561Bb8a0D370a8D8b70661647',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xA34337690711CE3F265f56Ebd545Dda00d7C0405',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 196
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'dotbnbw',
//     name: 'DOTBNB',
//     image: 'dotbnb.png',
//     token: 'DOT-BNB WLP',
//     tokenDescription: 'DOTBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wDOTBNB',
//     earnedTokenAddress: '0x6218203D8E7867BFd67D51985c335A3cB414B491',
//     earnContractAddress: '0x6218203D8E7867BFd67D51985c335A3cB414B491',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xd0b419Fa00cB661f8C018a8873fB3f9F9EFE6106',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 197
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x7083609fce4d1d8dc0c979aab8c869ea2c873402'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x7083609fce4d1d8dc0c979aab8c869ea2c873402'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'linkbnbw',
//     name: 'LINKBNB',
//     image: 'linkbnb.png',
//     token: 'LINK-BNB WLP',
//     tokenDescription: 'LINKBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wLINKBNB',
//     earnedTokenAddress: '0xddA07283E23E8D6FcFEc5B1F8df293909E193016',
//     earnContractAddress: '0xddA07283E23E8D6FcFEc5B1F8df293909E193016',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xDb2561e2a663f873F0483b63E653E2C9Af2A8E1f',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 198
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'dogebnb',
//     name: 'DOGEBNB',
//     image: 'dogebnb.png',
//     token: 'DOGE-BNB WLP',
//     tokenDescription: 'DOGEBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wDOGEBNB',
//     earnedTokenAddress: '0x1ce5d873c360bC733cD50f842a35d55414A64c7c',
//     earnContractAddress: '0x1ce5d873c360bC733cD50f842a35d55414A64c7c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB8b20A1e5595BfeB21DF0E162BE2744A7Ed32581',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 199
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0xba2ae424d960c26247dd6c32edc70b295c744c43'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0xba2ae424d960c26247dd6c32edc70b295c744c43'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'swirlbnb',
//     name: 'SWIRLBNB',
//     image: '11SWIRL-logo.svg',
//     token: 'SWIRL-BNB WLP',


//     tokenDescription: 'SWIRLBNB',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11wSWIRLBNB',
//     earnedTokenAddress: '0x26358225733088707081b39117AfcB7F15fd58fF',
//     earnContractAddress: '0x26358225733088707081b39117AfcB7F15fd58fF',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xA4e3947BAb9F2971E403a26Bf937b00237125cE1',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 200
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x52d86850bc8207b520340b7e39cdaf22561b9e56'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x52d86850bc8207b520340b7e39cdaf22561b9e56'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'usdtbnb',
//     name: 'USDT',
//     token: 'USDT-BNB LP',
//     tokenDescription: 'USDT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11USDTBNB',
//     earnedTokenAddress: '0xca5fe76131123eAc494088FE1770Ff6EcB09df8C',
//     earnContractAddress: '0xca5fe76131123eAc494088FE1770Ff6EcB09df8C',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 124
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'borbnb',
//     name: 'BOR',
//     token: 'BOR-BNB LP',
//     tokenDescription: 'BOR',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BORBNB',
//     earnedTokenAddress: '0xF85759C595D380EC8694de525C28574F16b1F5d4',
//     earnContractAddress: '0xF85759C595D380EC8694de525C28574F16b1F5d4',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xe094c686aD6cDda57b9564457F541FBF099B948A',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 128
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'oldeulerbnb',
//     name: 'oldEULER',
//     token: 'oldEULER-BNB LP',
//     image: "EULER-BNB LP-logo.svg",
//     isDiscontinued: true,
//     tokenDescription: 'oldEULER',
//     tokenDecimals: 18,
//     uses: 'Uses pcs V1',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'old11EULER',
//     earnedTokenAddress: '0x42D6855799eFC79188e06e80a5704e1Cef40DBf5',
//     earnContractAddress: '0x42D6855799eFC79188e06e80a5704e1Cef40DBf5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xd4B293586cb74770749Aea799e277241B339C62C',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 82
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'eulerbnb',
//     name: 'EULER',
//     token: 'EULER-BNB WLP',
//     image: "EULER-BNB LP-logo.svg",
//     tokenDescription: 'EULER',
//     tokenDecimals: 18,
//     uses: 'Uses waultswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11EULERBNB',
//     earnedTokenAddress: '0xaBF6eC9F9B4a5f473b67b5272f096795c32ea762',
//     earnContractAddress: '0xaBF6eC9F9B4a5f473b67b5272f096795c32ea762',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB52603072981529c8c0DB3E390b2876d97B9b7ed',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 210
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.35,
//       platform: 0.35,
//       dividends: 0.1,
//       buybacks: 1.7,
//       waultx_burn: 1
//     },

//     links: [
//       {type: 'buy_token', url: 'https://swap.wault.finance/#/swap?outputCurrency=0x3920123482070c1a2dff73aad695c60e7c6f6862'},
//       {type: 'add_liq', url: 'https://swap.wault.finance/#/add/BNB/0x3920123482070c1a2dff73aad695c60e7c6f6862'},
//     ]
//   },
//   {
//     network: 'bsc',
//     id: 'oldswirlbnb',
//     name: 'oldSWIRL',
//     token: 'SWIRL-BNB LP',
//     image: '11SWIRL-logo.svg',
//     tokenDescription: 'oldSWIRL',
//     isDiscontinued: true,
//     tokenDecimals: 18,
//     uses: 'Uses pcs V1',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'old11SWIRL',
//     earnedTokenAddress: '0xfd3912EAB0fE94Fa99F69c7dF33bB9252803487b',
//     earnContractAddress: '0xfd3912EAB0fE94Fa99F69c7dF33bB9252803487b',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x135AeDCFb35b0b5dCf61Db7891a21253452Eb970',
//     categories: ['Wault'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 62
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'oldicebnb',

//     isDiscontinued: true,
//     discontinuedMessage: 'ICE-BNB is migrating to Sushiswap',

//     name: 'oldICEBNB',
//     token: 'oldICE-BNB LP',
//     tokenDescription: 'oldICE',
//     tokenDecimals: 18,
//     uses: 'Uses popsicle',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'old11ICEBNB',
//     earnedTokenAddress: '0x40A5ef990864328F8fe22B5FD04bDC90E4604a84',
//     earnContractAddress: '0x40A5ef990864328F8fe22B5FD04bDC90E4604a84',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xFE3171B9c20d002376D4B0097207EDf54b02EA3B',
//     categories: [],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 83
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'icebnb',
//     name: 'ICEBNB',
//     token: 'ICE-BNB SLP',
//     image: 'ICE-BNB SLP-logo.svg',
//     tokenDescription: 'ICE',
//     tokenDecimals: 18,
//     uses: 'Uses popsicle',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ICEBNB',
//     earnedTokenAddress: '0x081D365008eEA51B1b9F78f81e3A35e124D53BA7',
//     earnContractAddress: '0x081D365008eEA51B1b9F78f81e3A35e124D53BA7',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x51F914a192a97408D991FddDAFB8F8537C5Ffb0a',
//     categories: [],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 187
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },

//   {
//     network: 'bsc',
//     id: 'ice',
//     name: 'ICE',
//     token: 'ICE',
//     isDiscontinued: true,
//     discontinuedMessage: 'ICE rewards ended. Lending might be enabled in the future',

//     tokenDescription: 'ICE',
//     tokenDecimals: 18,
//     uses: 'Uses popsicle',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ICE',
//     earnedTokenAddress: '0x77e3D9c047b4D21fCB91509e0A0a85Bc057eb18a',
//     earnContractAddress: '0x77e3D9c047b4D21fCB91509e0A0a85Bc057eb18a',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xf16e81dce15B08F326220742020379B855B87DF9',
//     categories: [],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 81
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'epsbnb',
//     name: 'EPS',
//     token: 'EPS-BNB LP',
//     tokenDescription: 'EPS',
//     tokenDecimals: 18,
//     uses: 'Uses Pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11EPS',
//     earnedTokenAddress: '0x251fc294ec0e3d2d82df70cc9271ee60e4ae76e0',
//     earnContractAddress: '0x251fc294ec0e3d2d82df70cc9271ee60e4ae76e0',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xddE420cbB3794ebD8FFC3Ac69F9c78e5d1411870',
//     categories: [],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 177
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'oldepsbnb',
//     name: 'oldEPS',
//     token: 'oldEPS-BNB LP',
//     tokenDescription: 'oldEPS',
//     tokenDecimals: 18,
//     uses: 'Uses ellipsis',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: 'old11EPS',
//     earnedTokenAddress: '0xc8d3ad71ba1d7eb0a234c6107567b99dc0b71ba1',
//     earnContractAddress: '0xc8d3ad71ba1d7eb0a234c6107567b99dc0b71ba1',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xf9045866e7b372DeF1EFf3712CE55FAc1A98dAF0',
//     categories: [],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 77
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'xedbnb',
//     name: 'XED',
//     token: 'XED-BNB LP',
//     tokenDescription: 'XED',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11XEDBNB',
//     earnedTokenAddress: '0x59080883c277209a12bb590f56fd692dafad2c9c',
//     earnContractAddress: '0x59080883c277209a12bb590f56fd692dafad2c9c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xa7A0b605343dF36B748FF4B5f7578b3F2D0651CE',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 180
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'cggbnb',
//     name: 'CGG',
//     token: 'CGG-BNB LP',
//     tokenDescription: 'CGG',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11CGGBNB',
//     earnedTokenAddress: '0x5321770054913c9a0368a8da0e733359343d78eb',
//     earnContractAddress: '0x5321770054913c9a0368a8da0e733359343d78eb',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0604471c532F9fEBAD3E37190B667f44BD0894b3',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 181
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'suterbnb',
//     name: 'SUTER',
//     token: 'SUTER-BNB LP',
//     tokenDescription: 'SUTER',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SUTERBNB',
//     earnedTokenAddress: '0x6fe829ba0830394eaa23b2ba6415dafca7c7d491',
//     earnContractAddress: '0x6fe829ba0830394eaa23b2ba6415dafca7c7d491',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x2d5DB889392Bc3c8B023A8631ca230A033eEA1B8',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 182
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'broobeebnb',
//     name: 'BROOBEE',
//     token: 'BROOBEE-BNB LP',
//     tokenDescription: 'BROOBEE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BROOBEEBNB',
//     earnedTokenAddress: '0xab4d07545833f7105235231698d4ae9a65494a07',
//     earnContractAddress: '0xab4d07545833f7105235231698d4ae9a65494a07',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x950FD020F8E4B8C57285EC7020b7a204348dadFa',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 183
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'hznbnb',
//     name: 'HZN',
//     token: 'HZN-BNB LP',
//     tokenDescription: 'HZN',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11HZNBNB',
//     earnedTokenAddress: '0xba3a43bffb3eb0d141b5b399ee7682e62e19b658',
//     earnContractAddress: '0xba3a43bffb3eb0d141b5b399ee7682e62e19b658',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xDc9a574b9B341D4a98cE29005b614e1E27430E74',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 184
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'alpabnb',
//     name: 'ALPA',
//     token: 'ALPA-BNB LP',
//     tokenDescription: 'ALPA',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ALPABNB',
//     earnedTokenAddress: '0xbd4f9bfc08f2fcde14a795fb2fac7982ca378dcd',
//     earnContractAddress: '0xbd4f9bfc08f2fcde14a795fb2fac7982ca378dcd',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x4cC442220BE1cE560C1f2573f8CA8f460B3E4172',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 185
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'cake',
//     name: 'CAKE',
//     token: 'CAKE',
//     tokenDescription: 'CAKE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11CAKE',
//     earnedTokenAddress: '0xE050ACc68c778b6F7F63bDfeCDEc576FcC6D2274',
//     earnContractAddress: '0xE050ACc68c778b6F7F63bDfeCDEc576FcC6D2274',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 85
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.2,
//       controller: 0,
//       platform: 0.03,
//       buybacks: 0.17
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'swthbnb',
//     name: 'SWTH',
//     token: 'SWTH-BNB LP',
//     tokenDescription: 'SWTH',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SWTHBNB',
//     earnedTokenAddress: '0xe6fbc3e4e20f30f1250febe3e985b308380c7ed0',
//     earnContractAddress: '0xe6fbc3e4e20f30f1250febe3e985b308380c7ed0',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x123D475E13aA54A43a7421d94CAa4459dA021c77',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 170
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'dftbnb',
//     name: 'DFT',
//     token: 'DFT-BNB LP',
//     tokenDescription: 'DFT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DFTBNB',
//     earnedTokenAddress: '0x768becbc0f490e2eb9d731bf158b8eaab28a401f',
//     earnContractAddress: '0x768becbc0f490e2eb9d731bf158b8eaab28a401f',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x24d3B0eD4C444A4f6882d527cBF67aDc8c026582',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 171
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'pbtcbnb',
//     name: 'PBTC',
//     token: 'PBTC-BNB LP',
//     tokenDescription: 'PBTC',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11PBTCBNB',
//     earnedTokenAddress: '0x0580daab7ab6d792786f0feed80bd8c8cde65938',
//     earnContractAddress: '0x0580daab7ab6d792786f0feed80bd8c8cde65938',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0362ba706DFE8ED12Ec1470aB171d8Dcb1C72B8D',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 172
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'gumbnb',
//     name: 'GUM',
//     token: 'GUM-BNB LP',
//     tokenDescription: 'GUM',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11GUMBNB',
//     earnedTokenAddress: '0x787ded9f1465e93cff85de8d407e44e51bb52b54',
//     earnContractAddress: '0x787ded9f1465e93cff85de8d407e44e51bb52b54',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x28Ea5894D4DBbE90bB58eE3BAB2869387d711c87',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 173
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'degobnb',
//     name: 'DEGO',
//     token: 'DEGO-BNB LP',
//     tokenDescription: 'DEGO',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DEGOBNB',
//     earnedTokenAddress: '0x483626122b250409fe0fa1098cb6abb26a0ba613',
//     earnContractAddress: '0x483626122b250409fe0fa1098cb6abb26a0ba613',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xF1Ec67fA1881796BFf63Db3E1A301cE9cb787Fad',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 174
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'easybnb',
//     name: 'EASY',
//     token: 'EASY-BNB LP',
//     tokenDescription: 'EASY',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11EASYBNB',
//     earnedTokenAddress: '0xaa86c6990c532a37a0c7b4eda418abfd4aecac61',
//     earnContractAddress: '0xaa86c6990c532a37a0c7b4eda418abfd4aecac61',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x20c6De8983Fb2D641c55004646aEF40b4EA66E18',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 175
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'oddzbnb',
//     name: 'ODDZ',
//     token: 'ODDZ-BNB LP',
//     tokenDescription: 'ODDZ',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ODDZBNB',
//     earnedTokenAddress: '0xb084ef6ba200fba55367bf94ec672b4687c036b2',
//     earnContractAddress: '0xb084ef6ba200fba55367bf94ec672b4687c036b2',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x3c2c77353E2F6AC1578807b6b2336Bf3a3CbB014',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 108
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'apysbnb',
//     name: 'APYS',
//     token: 'APYS-BNB LP',
//     tokenDescription: 'APYS',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11APYSBNB',
//     earnedTokenAddress: '0x94fcc63a8821bdf802d12c783c2df69d5cd78f9d',
//     earnContractAddress: '0x94fcc63a8821bdf802d12c783c2df69d5cd78f9d',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x510b29a93ebf098f3fC24A16541aAA0114D07056',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 176
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bondlybnb',
//     name: 'BONDLY',
//     token: 'BONDLY-BNB LP',
//     tokenDescription: 'BONDLY',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BONDLYBNB',
//     earnedTokenAddress: '0x631a4e92cdb80d7f8e7c9073f0292ba9432bca30',
//     earnContractAddress: '0x631a4e92cdb80d7f8e7c9073f0292ba9432bca30',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xb8b4383B49d451BBeA63BC4421466E1086da6f18',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 107
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'lienbnb',
//     name: 'LIEN',
//     token: 'LIEN-BNB LP',
//     tokenDescription: 'LIEN',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LIEN',
//     earnedTokenAddress: '0xc9b8ab5561d95c54ad51f1b6cefff0660026e3f1',
//     earnContractAddress: '0xc9b8ab5561d95c54ad51f1b6cefff0660026e3f1',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xa4963B38b271c0D714593063497Fc786Fa4029Ce',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 169
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'zilbnb',
//     name: 'ZIL',
//     token: 'ZIL-BNB LP',
//     tokenDescription: 'ZIL',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ZIL',
//     earnedTokenAddress: '0xb89c254010a3345fca9f15f77a8242391569ac39',
//     earnContractAddress: '0xb89c254010a3345fca9f15f77a8242391569ac39',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x6A97867a4b7Eb7646ffB1F359ad582e9903aa1C2',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 168
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bfibnb',
//     name: 'BFI',
//     token: 'BFI-BNB LP',
//     tokenDescription: 'BFI',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BFI',
//     earnedTokenAddress: '0xa26a2c4da2b3c1e707712fdb4a7148d05441a3ed',
//     earnContractAddress: '0xa26a2c4da2b3c1e707712fdb4a7148d05441a3ed',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x153Ad7d25B0b810497483d0cEE8AF42Fc533FeC8',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 158
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'beltbnb',
//     name: 'BELT',
//     token: 'BELT-BNB LP',
//     tokenDescription: 'BELT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BELT',
//     earnedTokenAddress: '0xe7d709c8aabd5c67652bb3166eaa972a68331344',
//     earnContractAddress: '0xe7d709c8aabd5c67652bb3166eaa972a68331344',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xF3Bc6FC080ffCC30d93dF48BFA2aA14b869554bb',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 159
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'buxbnb',
//     name: 'BUX',
//     token: 'BUX-BNB LP',
//     tokenDescription: 'BUX',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BUX',
//     earnedTokenAddress: '0x8d6250dfba37fd083a1275b58ec286e46028e4d6',
//     earnContractAddress: '0x8d6250dfba37fd083a1275b58ec286e46028e4d6',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x222C3CbB89647bF77822435Bd4c234A04272A77A',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 160
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'alicebnb',
//     name: 'ALICE',
//     token: 'ALICE-BNB LP',
//     tokenDescription: 'ALICE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ALICE',
//     earnedTokenAddress: '0x1013350b1e0215f654e8e46972f84e2b2874a800',
//     earnContractAddress: '0x1013350b1e0215f654e8e46972f84e2b2874a800',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xcAD7019D6d84a3294b0494aEF02e73BD0f2572Eb',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 161
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bunnybnb',
//     name: 'BUNNY',
//     token: 'BUNNY-BNB LP',
//     tokenDescription: 'BUNNY',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BUNNY',
//     earnedTokenAddress: '0x2adf8e06993e8723464981e6e472c0a819912d4e',
//     earnContractAddress: '0x2adf8e06993e8723464981e6e472c0a819912d4e',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x5aFEf8567414F29f0f927A0F2787b188624c10E2',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 162
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'cosbnb',
//     name: 'COS',
//     token: 'COS-BNB LP',
//     tokenDescription: 'COS',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11COS',
//     earnedTokenAddress: '0xf8cc41bf5b3dfb569d06b84cd2edfc76d4fbe913',
//     earnContractAddress: '0xf8cc41bf5b3dfb569d06b84cd2edfc76d4fbe913',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xe98585bBb2dc81854fF100A3d9D7B0F53E0dafEd',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 163
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bifibnb',
//     name: 'BIFI',
//     token: 'BIFI-BNB LP',
//     tokenDescription: 'BIFI',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BIFI',
//     earnedTokenAddress: '0x21295a0163599b3e8a70dacefa478bb55d44947b',
//     earnContractAddress: '0x21295a0163599b3e8a70dacefa478bb55d44947b',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x3f1A9f3D9aaD8bD339eD4853F345d2eF89fbfE0c',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 164
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'duskbnb',
//     name: 'DUSK',
//     token: 'DUSK-BNB LP',
//     tokenDescription: 'DUSK',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DUSK',
//     earnedTokenAddress: '0x400f5446653b9554e6b3280146c96f27e91f5cd6',
//     earnContractAddress: '0x400f5446653b9554e6b3280146c96f27e91f5cd6',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x678EDb8B268e73dB57b7694c163e1dc296b6e219',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 165
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'tradebnb',
//     name: 'TRADE',
//     token: 'TRADE-BNB LP',
//     tokenDescription: 'TRADE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TRADE',
//     earnedTokenAddress: '0xcee9b83e0994f4f56c5fe6a6f20493679bd27818',
//     earnContractAddress: '0xcee9b83e0994f4f56c5fe6a6f20493679bd27818',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8F6baf368E7A4f6e2C9c995f22702d5e654A0237',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 166
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'ltobnb',
//     name: 'LTO',
//     token: 'LTO-BNB LP',
//     tokenDescription: 'LTO',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LTO',
//     earnedTokenAddress: '0xbc66934128d60cf0e47f2be7b7e3deeb19ce92e3',
//     earnContractAddress: '0xbc66934128d60cf0e47f2be7b7e3deeb19ce92e3',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xa5Bb44c6F5fD9B836E5a654c8AbbCCc96A15deE5',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 167
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'pcwsbnb',
//     name: 'PCWS',
//     token: 'PCWS-BNB LP',
//     tokenDescription: 'PCWS',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11PCWS',
//     earnedTokenAddress: '0x0c1c5dbe7cc26da3927fe7f37c5760e3686f370d',
//     earnContractAddress: '0x0c1c5dbe7cc26da3927fe7f37c5760e3686f370d',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x6615CE60D71513aA4849269dD63821D324A23F8C',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 129
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'cakebnb',
//     name: 'CAKE',
//     token: 'CAKE-BNB LP',
//     tokenDescription: 'CAKE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11CAKEBNB',
//     earnedTokenAddress: '0x58D25A7e34eE8fA7A070510e6D2E0096Ed62c828',
//     earnContractAddress: '0x58D25A7e34eE8fA7A070510e6D2E0096Ed62c828',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x0ed7e52944161450477ee417de9cd3a859b14fd0',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 178
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'alpacabnb',

//     isDiscontinued: true,

//     name: 'ALPACA',
//     token: 'ALPACA-BNB LP',
//     tokenDescription: 'ALPACA',
//     tokenDecimals: 18,
//     uses: 'Uses alpaca finance',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ALPACA',
//     earnedTokenAddress: '0x0A33E8e887850Ad53739A0CeF110283b74E02f3e',
//     earnContractAddress: '0x0A33E8e887850Ad53739A0CeF110283b74E02f3e',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xF3CE6Aac24980E6B657926dfC79502Ae414d3083',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 9
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bopenbnb',
//     name: 'BOPEN',
//     token: 'BOPEN-BNB LP',
//     tokenDescription: 'BOPEN',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11bOPEN',
//     earnedTokenAddress: '0x2ab4b226c08b8ecf4a54e0a4ed965c678188aa91',
//     earnContractAddress: '0x2ab4b226c08b8ecf4a54e0a4ed965c678188aa91',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xc7A9c2af263ebB86139Cca9349e49b17129Ba033',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 154
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bmxxbnb',
//     name: 'BMXX',
//     token: 'BMXX-BNB LP',
//     tokenDescription: 'BMXX',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11bMXX',
//     earnedTokenAddress: '0x37e54cfe5a6ed9224300d9839896c1dfa1828124',
//     earnContractAddress: '0x37e54cfe5a6ed9224300d9839896c1dfa1828124',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xc20A92a1424b29b78DFaF92FD35D4cf8A06419B4',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 155
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'dodobnb',
//     name: 'DODO',
//     token: 'DODO-BNB LP',
//     tokenDescription: 'DODO',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DODO',
//     earnedTokenAddress: '0x4101cea7ddc92ab53938a14e6b8ee1516640054d',
//     earnContractAddress: '0x4101cea7ddc92ab53938a14e6b8ee1516640054d',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xA9986Fcbdb23c2E8B11AB40102990a08f8E58f06',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 153
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'swingbybnb',
//     name: 'SWINGBY',
//     token: 'SWINGBY-BNB LP',
//     tokenDescription: 'SWINGBY',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SWINGBY',
//     earnedTokenAddress: '0x88094d75d1be902e7650cdb34f66b1852b896fc5',
//     earnContractAddress: '0x88094d75d1be902e7650cdb34f66b1852b896fc5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x4Fd6D315bEf387fAD2322fbc64368fC443F0886D',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 106
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'brybnb',
//     name: 'BRY',
//     token: 'BRY-BNB LP',
//     tokenDescription: 'BRY',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BRY',
//     earnedTokenAddress: '0x8f15bd33c51fa54e9e0925dd4aae789aff9b28e5',
//     earnContractAddress: '0x8f15bd33c51fa54e9e0925dd4aae789aff9b28e5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x21dD71aB78EDE3033c976948f769D506E4F489eE',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 152
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'zeebnb',
//     name: 'ZEE',
//     token: 'ZEE-BNB LP',
//     tokenDescription: 'ZEE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ZEE',
//     earnedTokenAddress: '0x61079517c5a7c66d8e9f337d5839f0976e9afda0',
//     earnContractAddress: '0x61079517c5a7c66d8e9f337d5839f0976e9afda0',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8e799cB0737525CeB8A6C6Ad07f748535fF6377B',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 151
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'swgbbnb',
//     name: 'SWGB',
//     token: 'SWGB-BNB LP',
//     tokenDescription: 'SWGB',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SWGB',
//     earnedTokenAddress: '0x8678e37e10a3ee45a87fa052513ce12878a990b1',
//     earnContractAddress: '0x8678e37e10a3ee45a87fa052513ce12878a990b1',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x856f9AD94cA8680B899214Bb1EB3d235a3C33Afe',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 150
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'watchbnb',
//     name: 'WATCH',
//     token: 'WATCH-BNB LP',
//     tokenDescription: 'WATCH',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WATCH',
//     earnedTokenAddress: '0x7c4294cbde222cf679dd059b35b517453580b195',
//     earnContractAddress: '0x7c4294cbde222cf679dd059b35b517453580b195',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x13321AcfF4A27f3d2bcA64b8bEaC6e5FdAAAf12C',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 156
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'sfpbnb',
//     name: 'SFP',
//     token: 'SFP-BNB LP',
//     tokenDescription: 'SFP',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SFP',
//     earnedTokenAddress: '0x59b99da89de72130e624d60644fe9585dbe98f93',
//     earnContractAddress: '0x59b99da89de72130e624d60644fe9585dbe98f93',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x942b294e59a8c47a0F7F20DF105B082710F7C305',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 149
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'litbnb',
//     name: 'LIT',
//     token: 'LIT-BNB LP',
//     tokenDescription: 'LIT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LIT',
//     earnedTokenAddress: '0x06683f660007a0875f40f7d2d1ded37c30a04378',
//     earnContractAddress: '0x06683f660007a0875f40f7d2d1ded37c30a04378',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1F37d4226d23d09044B8005c127C0517BD7e94fD',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 148
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'hgetbnb',
//     name: 'HGET',
//     token: 'HGET-BNB LP',
//     tokenDescription: 'HGET',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11HGET',
//     earnedTokenAddress: '0x2a6f28aebf729f114f6d7728244914204d69bd44',
//     earnContractAddress: '0x2a6f28aebf729f114f6d7728244914204d69bd44',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xF74ee1e10e097dc326a2ad004F9Cc95CB71088d3',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 111
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bdobnb',
//     name: 'BDO',
//     token: 'BDO-BNB LP',
//     tokenDescription: 'BDO',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BDO',
//     earnedTokenAddress: '0x50a67d1a6b2acd18bf3869457949cfd3b38cdd7c',
//     earnContractAddress: '0x50a67d1a6b2acd18bf3869457949cfd3b38cdd7c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x4288706624e3dD839b069216eB03B8B9819C10d2',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 110
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'egldbnb',
//     name: 'EGLD',
//     token: 'EGLD-BNB LP',
//     tokenDescription: 'EGLD',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11EGLD',
//     earnedTokenAddress: '0x96cba0ee10841c244357ea7b1292a4bbcb4a5fb2',
//     earnContractAddress: '0x96cba0ee10841c244357ea7b1292a4bbcb4a5fb2',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xcD68856b6E72E99b5eEaAE7d41Bb4A3b484c700D',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 147
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'wsotebnb',
//     name: 'WSOTE',
//     token: 'WSOTE-BNB LP',
//     tokenDescription: 'WSOTE',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11WSOTE',
//     earnedTokenAddress: '0x88c9b5f8bf319156499520a46cb7b5ad8efaa151',
//     earnContractAddress: '0x88c9b5f8bf319156499520a46cb7b5ad8efaa151',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7653D2c31440f04d2c6520D482dC5DbD7650f70a',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 146
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'frontbnb',
//     name: 'FRONT',
//     token: 'FRONT-BNB LP',
//     tokenDescription: 'FRONT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11FRONT',
//     earnedTokenAddress: '0x92cf8c13096b246fffc114d1e39cf13e26b3e537',
//     earnContractAddress: '0x92cf8c13096b246fffc114d1e39cf13e26b3e537',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xC6b668548aA4A56792e8002A920d3159728121D5',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 145
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'helmetbnb',
//     name: 'HELMET',
//     token: 'HELMET-BNB LP',
//     tokenDescription: 'HELMET',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11HELMET',
//     earnedTokenAddress: '0x000d6f296c41905f221ac4863baa0f5d2b8e9f08',
//     earnContractAddress: '0x000d6f296c41905f221ac4863baa0f5d2b8e9f08',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xC869A9943b702B03770B6A92d2b2d25cf3a3f571',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 144
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'btcstbnb',
//     name: 'BTCST',
//     token: 'BTCST-BNB LP',
//     tokenDescription: 'BTCST',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BTCST',
//     earnedTokenAddress: '0xb7194eea1cafe93aa3bf33f44c2787c551c314e3',
//     earnContractAddress: '0xb7194eea1cafe93aa3bf33f44c2787c551c314e3',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB2678C414ebC63c9CC6d1a0fC45f43E249B50fdE',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 143
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'ltcbnb',
//     name: 'LTC',
//     token: 'LTC-BNB LP',
//     tokenDescription: 'LTC',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LTC',
//     earnedTokenAddress: '0x84898845e6bef725ada3367350891c374d837076',
//     earnContractAddress: '0x84898845e6bef725ada3367350891c374d837076',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x71b01eBdDD797c8E9E0b003ea2f4FD207fBF46cC',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 142
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bscxbnb',
//     name: 'BSCX',
//     token: 'BSCX-BNB LP',
//     tokenDescription: 'BSCX',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BSCX',
//     earnedTokenAddress: '0x2cd96e186a4d57687b445ecfb1ed9ccd1d5f9d72',
//     earnContractAddress: '0x2cd96e186a4d57687b445ecfb1ed9ccd1d5f9d72',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x47C42b0A056A9C6e9C65b9Ef79020Af518e767A5',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 141
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'tenbnb',
//     name: 'TEN',
//     token: 'TEN-BNB LP',
//     tokenDescription: 'TEN',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TEN',
//     earnedTokenAddress: '0xdfa04c6a71e9584e7103cc0bf664fbea45377cc6',
//     earnContractAddress: '0xdfa04c6a71e9584e7103cc0bf664fbea45377cc6',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1B415C3ec8095AfBF9d78882b3a6263c4ad141B5',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 140
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'balbtbnb',
//     name: 'BALBT',
//     token: 'BALBT-BNB LP',
//     tokenDescription: 'BALBT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BALBT',
//     earnedTokenAddress: '0xd64d92b8c9dc9b0119da885a7fd7036da5cd65b1',
//     earnContractAddress: '0xd64d92b8c9dc9b0119da885a7fd7036da5cd65b1',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x24EB18bA412701f278B172ef96697c4622b19da6',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 139
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'reefbnb',
//     name: 'REEF',
//     token: 'REEF-BNB LP',
//     tokenDescription: 'REEF',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11REEF',
//     earnedTokenAddress: '0x0f2e64cfd59670716bc69e940108764281d45d74',
//     earnContractAddress: '0x0f2e64cfd59670716bc69e940108764281d45d74',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xd63b5CecB1f40d626307B92706Df357709D05827',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 114
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'dittobnb',
//     name: 'DITTO',
//     token: 'DITTO-BNB LP',
//     tokenDescription: 'DITTO',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DITTO',
//     earnedTokenAddress: '0x423bb4bef374da4ea7654230edf10a0ac94984b0',
//     earnContractAddress: '0x423bb4bef374da4ea7654230edf10a0ac94984b0',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x8645148dE4E339964bA480AE3478653b5bc6E211',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 115
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'blkbnb',
//     name: 'BLK',
//     token: 'BLK-BNB LP',
//     tokenDescription: 'BLK',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BLK',
//     earnedTokenAddress: '0x8910c3c650b611fd25930f9f57acf7a3dcba17ba',
//     earnContractAddress: '0x8910c3c650b611fd25930f9f57acf7a3dcba17ba',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x356Dd24BfF8e23BdE0430f00ad0C290E33438bD7',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 113
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'unfibnb',
//     name: 'UNFI',
//     token: 'UNFI-BNB LP',
//     tokenDescription: 'UNFI',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11UNFI',
//     earnedTokenAddress: '0x2d67c46fd98a475ea6065c8d72d68b1cb71adb0a',
//     earnContractAddress: '0x2d67c46fd98a475ea6065c8d72d68b1cb71adb0a',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x44EA47F2765fd5D26b7eF0222736AD6FD6f61950',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 116
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'hardbnb',
//     name: 'HARD',
//     token: 'HARD-BNB LP',
//     tokenDescription: 'HARD',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11HARD',
//     earnedTokenAddress: '0x0412d1e65b2bc1c2739a0e06ae2ed9584d92b867',
//     earnContractAddress: '0x0412d1e65b2bc1c2739a0e06ae2ed9584d92b867',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x73566ca86248bD12F0979793e4671e99a40299A7',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 117
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'ctkbnb',
//     name: 'CTK',
//     token: 'CTK-BNB LP',
//     tokenDescription: 'CTK',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11CTK',
//     earnedTokenAddress: '0x4c9518936f979b694303e1c279a61cbbd2571de5',
//     earnContractAddress: '0x4c9518936f979b694303e1c279a61cbbd2571de5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x460b4193Ec4C1a17372Aa5FDcd44c520ba658646',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 118
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'sxpbnb',
//     name: 'SXP',
//     token: 'SXP-BNB LP',
//     tokenDescription: 'SXP',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11SXP',
//     earnedTokenAddress: '0xfdb0d13aeeaf50d8dd602168f16f428e740b2af3',
//     earnContractAddress: '0xfdb0d13aeeaf50d8dd602168f16f428e740b2af3',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xD8E2F8b6Db204c405543953Ef6359912FE3A88d6',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 119
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'injbnb',
//     name: 'INJ',
//     token: 'INJ-BNB LP',
//     tokenDescription: 'INJ',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11INJ',
//     earnedTokenAddress: '0x3651ecb8de44c255e37ecb571f52095225342d6a',
//     earnContractAddress: '0x3651ecb8de44c255e37ecb571f52095225342d6a',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x1BdCebcA3b93af70b58C41272AEa2231754B23ca',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 138
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'filbnb',
//     name: 'FIL',
//     token: 'FIL-BNB LP',
//     tokenDescription: 'FIL',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11FIL',
//     earnedTokenAddress: '0xe4fedf6c2793b185f3f3b76f1c946e72eba2c987',
//     earnContractAddress: '0xe4fedf6c2793b185f3f3b76f1c946e72eba2c987',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xD9bCcbbbDFd9d67BEb5d2273102CE0762421D1e3',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 112
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'unibnb',
//     name: 'UNI',
//     token: 'UNI-BNB LP',
//     tokenDescription: 'UNI',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11UNI',
//     earnedTokenAddress: '0xe9f6594b0299f3a097414d696884cedebf4e1684',
//     earnContractAddress: '0xe9f6594b0299f3a097414d696884cedebf4e1684',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x014608E87AF97a054C9a49f81E1473076D51d9a3',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 120
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'yfibnb',
//     name: 'YFI',
//     token: 'YFI-BNB LP',
//     tokenDescription: 'YFI',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11YFI',
//     earnedTokenAddress: '0x1190f6c71584168f2c14db98a4f9ecae1f1b269c',
//     earnContractAddress: '0x1190f6c71584168f2c14db98a4f9ecae1f1b269c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xCE383277847f8217392eeA98C5a8B4a7D27811b0',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 121
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'atombnb',
//     name: 'ATOM',
//     token: 'ATOM-BNB LP',
//     tokenDescription: 'ATOM',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ATOM',
//     earnedTokenAddress: '0x2a23a24fa4da825f0622fd4369b16a3cf6ca7052',
//     earnContractAddress: '0x2a23a24fa4da825f0622fd4369b16a3cf6ca7052',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x468b2DC8DC75990eE3E9dc0648965Ad6294E7914',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 122
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'xrpbnb',
//     name: 'XRP',
//     token: 'XRP-BNB LP',
//     tokenDescription: 'XRP',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11XRP',
//     earnedTokenAddress: '0x0c044c0344b2fc2f155c93313307df187de0b98c',
//     earnContractAddress: '0x0c044c0344b2fc2f155c93313307df187de0b98c',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x03F18135c44C64ebFdCBad8297fe5bDafdBbdd86',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 123
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'alphabnb',
//     name: 'ALPHA',
//     token: 'ALPHA-BNB LP',
//     tokenDescription: 'ALPHA',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ALPHA',
//     earnedTokenAddress: '0x53a31e5bfa7b40243df3aecb7158beb99d853777',
//     earnContractAddress: '0x53a31e5bfa7b40243df3aecb7158beb99d853777',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xACF47CBEaab5c8A6Ee99263cfE43995f89fB3206',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 125
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'btcbnb',
//     name: 'BTC',
//     token: 'BTC-BNB LP',
//     tokenDescription: 'BTC',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BTC',
//     earnedTokenAddress: '0xeda8986d2df3d0626c93fd7cbd84e2a6b6dbbf32',
//     earnContractAddress: '0xeda8986d2df3d0626c93fd7cbd84e2a6b6dbbf32',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 126
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'ethbnb',
//     name: 'ETH',
//     token: 'ETH-BNB LP',
//     tokenDescription: 'ETH',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ETH',
//     earnedTokenAddress: '0x40293dbe472dcc8da5ff63988376d4199fb97287',
//     earnContractAddress: '0x40293dbe472dcc8da5ff63988376d4199fb97287',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 127
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'xvsbnb',
//     name: 'XVS',
//     token: 'XVS-BNB LP',
//     tokenDescription: 'XVS',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11XVS',
//     earnedTokenAddress: '0xd3ae5ede9e3efd34ac859743ca1964d85cab097b',
//     earnContractAddress: '0xd3ae5ede9e3efd34ac859743ca1964d85cab097b',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x7EB5D86FD78f3852a3e0e064f2842d45a3dB6EA2',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 137
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'twtbnb',
//     name: 'TWT',
//     token: 'TWT-BNB LP',
//     tokenDescription: 'TWT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11TWT',
//     earnedTokenAddress: '0x313ece8be11cab51e8fd730740f4e0f035b32cd5',
//     earnContractAddress: '0x313ece8be11cab51e8fd730740f4e0f035b32cd5',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x3DcB1787a95D2ea0Eb7d00887704EeBF0D79bb13',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 135
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'linkbnb',
//     name: 'LINK',
//     token: 'LINK-BNB LP',
//     tokenDescription: 'LINK',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11LINKBNB',
//     earnedTokenAddress: '0xb6e754db11fba321c1e27d449677177fb0024d1f',
//     earnContractAddress: '0xb6e754db11fba321c1e27d449677177fb0024d1f',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x824eb9faDFb377394430d2744fa7C42916DE3eCe',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 136
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'eosbnb',
//     name: 'EOS',
//     token: 'EOS-BNB LP',
//     tokenDescription: 'EOS',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11EOS',
//     earnedTokenAddress: '0x0aac7f59c8c2605b649fa9de127bc77d13222f57',
//     earnContractAddress: '0x0aac7f59c8c2605b649fa9de127bc77d13222f57',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xB6e34b5C65Eda51bb1BD4ea5F79d385Fb94b9504',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 134
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'dotbnb',
//     name: 'DOT',
//     token: 'DOT-BNB LP',
//     tokenDescription: 'DOT',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11DOT',
//     earnedTokenAddress: '0x2b65d7653c2d66d130ab59a65df04250e071c621',
//     earnContractAddress: '0x2b65d7653c2d66d130ab59a65df04250e071c621',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 133
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'bandbnb',
//     name: 'BAND',
//     token: 'BAND-BNB LP',
//     tokenDescription: 'BAND',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BAND',
//     earnedTokenAddress: '0xae663b34779074a3ac54149b0990d14b589269d9',
//     earnContractAddress: '0xae663b34779074a3ac54149b0990d14b589269d9',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x168B273278F3A8d302De5E879aA30690B7E6c28f',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 132
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'adabnb',
//     name: 'ADA',
//     token: 'ADA-BNB LP',
//     tokenDescription: 'ADA',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11ADA',
//     earnedTokenAddress: '0x010d7c8d616eee6dc878c6aab5c47aa6f84c0c23',
//     earnContractAddress: '0x010d7c8d616eee6dc878c6aab5c47aa6f84c0c23',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x28415ff2C35b65B9E5c7de82126b4015ab9d031F',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 131
//     }
//   },
//   {
//     network: 'bsc',
//     id: 'busdbnb',
//     name: 'BUSD',
//     token: 'BUSD-BNB LP',
//     tokenDescription: 'BUSD',
//     tokenDecimals: 18,
//     uses: 'Uses pancakeswap',
//     itokenDecimals: 18,
//     depostLimit:0,
//     tokenDescriptionUrl: '',
//     tokenDescriptionUrl2: '',
//     earnedToken: '11BUSD',
//     earnedTokenAddress: '0x2465fedeac581418e08d9fbfb6d987d0817f5c16',
//     earnContractAddress: '0x2465fedeac581418e08d9fbfb6d987d0817f5c16',
//     defaultApy: "39.54",
//     pricePerFullShare: 1,
//     pastPricePerFullShare: 1,
//     tokenAddress: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
//     categories: ['Pancake'],

//     farm: {
//       isDisabled: true,
//       earnedToken: 'ELE',
//       earnedTokenDecimals: 18,
//       earnedTokenAddress: '0x3b63da9BCB2447e3492CFaA4979a6d42d4f38A44',
//       earnContractAddress: '0x1657ae435012b87f3Cd39817B294fBC71EfeeA6B',
//       masterchefPid: 130
//     },

//     fees: {
//       deposit: 0,
//       withdrawal: 0.1,
//       controller: 0.275,
//       platform: 0.275,
//       dividends: 0.1,
//       buybacks: 1.55
//     }
//   },
];
