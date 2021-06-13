import React from 'react';

import { render } from '@testing-library/react-native';

import App from '../App';

test('render without crashing', () => {
  const { getByText } = render(<App />);
  getByText('hello world');
});
