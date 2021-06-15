import { networks } from 'features/configure';

export const getNetworkMulticall = (networkName) => {
  const networkData = networks.find(network => network.name == networkName);
  return networkData?.multicall || '';
}

export const getNetworkTokenShim = (networkName) => {
  const networkData = networks.find(network => network.name == networkName);
  return networkData?.nativeTokenShim || '';
}