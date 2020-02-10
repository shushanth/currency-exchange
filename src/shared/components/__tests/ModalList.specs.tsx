import React from 'react';
import renderer from 'react-test-renderer';

import { CEModalList } from '../index';

describe('<CEModalList />', () => {
  test('tree snapshots match', () => {
    const modalTree = renderer
      .create(
        <CEModalList
          name="test-modal"
          showModal={true}
          onClose={() => {}}
          onItemSelect={() => {}}
        />,
      )
      .toJSON();
    expect(modalTree).toMatchSnapshot();
  });
});
