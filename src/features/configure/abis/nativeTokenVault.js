const nativeTokenVaultABI = [
  { "constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" },
  { "constant": false, "inputs": [{ "internalType": "uint256", "name": "share", "type": "uint256" }], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }
];

export default nativeTokenVaultABI;