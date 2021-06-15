import { VaultPage } from './';

export default {
  path: 'vault',
  childRoutes: [
    { path: ':category?', component: VaultPage, isIndex: true },
  ],
};
