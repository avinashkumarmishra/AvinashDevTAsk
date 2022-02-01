import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native';
import SpendingProgressItem from '../app/components/SpendingProgressItem';

jest.useFakeTimers();
afterEach(cleanup);

describe('<SpendingProgressItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<SpendingProgressItem />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it('should have spent-amount - 500', () => {
    const rendered = render(<SpendingProgressItem spentAmount="500"/>);
    const textComponent = rendered.getByTestId('spent-amount');

    expect(textComponent.props.children).toContain('500');
  });

  it('should have spend-amount-limit - 5000', () => {
    const rendered = render(<SpendingProgressItem totalAmount="5000"/>);
    const textComponent = rendered.getByTestId('spend-limit');

    expect(textComponent.props.children).toContain('5000');
  });
});