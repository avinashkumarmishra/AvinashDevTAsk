import React from 'react';
import renderer from 'react-test-renderer';

import ToolbarItem from '../app/components/ToolbarItem';

describe('<ToolbarItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<ToolbarItem />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});