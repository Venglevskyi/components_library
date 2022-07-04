/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

it('should render React Image component', () => {
  render(<App />);
  const image = screen.getAllByTestId('react image');

  expect(image).toBeTruthy();
});
