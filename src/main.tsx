import * as React from 'react';
import App from '@/app';
import { render } from 'react-dom';

import './style/index.scss';

render(
  <App/>,
  document.getElementById('app') as HTMLElement,
);