import React from 'react';
import renderer from 'react-test-renderer';

import { CESwapButton } from '../index';

describe('<CESwapButton />', () => {
  test('tree snapshots match', () => {
    const swapButtonTree = renderer
      .create(
        <CESwapButton
          swapState={false}
          onSwapInvoke={swapState => swapState}
        />,
      )
      .toJSON();
    expect(swapButtonTree).toMatchSnapshot();
  });
});
