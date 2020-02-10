import React from 'react';
import renderer from 'react-test-renderer';

import { CEInput } from '../index';
import { mount } from 'enzyme';

describe('<CEInput /> snapshots', () => {
  test('tree snapshots match', () => {
    const inputTree = renderer
      .create(<CEInput val={1} inputType={'number'} />)
      .toJSON();
    expect(inputTree).toMatchSnapshot();
  });
});

describe('Component: <CEInput />', () => {
  let CEInputComponentWrapper: any;
  beforeEach(() => {
    CEInputComponentWrapper = mount(<CEInput val={1} inputType={'number'} />);
  });

  test('it should render properly', () => {
    expect(CEInputComponentWrapper.length).toBeDefined();
  });
  test('it should match the input value with the props passed value', () => {
    expect(CEInputComponentWrapper.prop('val')).toEqual(1);
    expect(CEInputComponentWrapper.prop('inputType')).toEqual('number');
  });
});
