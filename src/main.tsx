import * as React from 'react';
import { render } from 'react-dom';

import './style/index.scss';
import MyRouter from '@/my-router';

render(
  <MyRouter/>,
  document.getElementById('app') as HTMLElement,
);