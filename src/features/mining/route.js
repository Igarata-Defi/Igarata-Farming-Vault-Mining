// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { MiningPage } from './';

export default {
  path: 'mining',
  childRoutes: [
    {path: 'test?', component: MiningPage, isIndex: true},
  ],
};
