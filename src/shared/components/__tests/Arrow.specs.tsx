import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { CEArrow } from '../index';

describe('<CEArrow />: snapshots', () => {
  test('tree snapshots match', () => {
    const arrowTree = renderer.create(<CEArrow />).toJSON();
    expect(arrowTree).toMatchSnapshot();
  });
});

describe('Component: <CEArrow />', () => {
  let CEArrowComponent: any;
  beforeEach(() => {
    CEArrowComponent = mount(<CEArrow />);
  });

  test('should render properly with default props', () => {
    expect(CEArrowComponent.length).toBeDefined();
    expect(CEArrowComponent.length).toBe(1);
  });
  test('should render with two div elements with default proper', () => {
    expect(CEArrowComponent.find('div').length).toBeDefined();
    expect(CEArrowComponent.find('div').length).toBe(2);
  });
});
