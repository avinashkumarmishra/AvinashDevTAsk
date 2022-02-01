import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native';
import AvailableBalanceItem from '../app/components/AvailableBalanceItem';

afterEach(cleanup);

describe('<AvailableBalanceItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<AvailableBalanceItem />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it('should render text in white color', () => {
    const rendered = render(<AvailableBalanceItem />);
    const textComponent = rendered.getByTestId('amount');

    expect(textComponent.props.style).toMatchObject({color: '#FFFFFF'});
  });

  it('should have balance-amount - 5000', () => {
    const rendered = render(<AvailableBalanceItem amount="5000"/>);
    const textComponent = rendered.getByTestId('amount');

    expect(textComponent.props.children).toEqual('5000');
  });

  it('should not have balance-amount - 3000', () => {
    const rendered = render(<AvailableBalanceItem amount="5000"/>);
    const textComponent = rendered.getByTestId('amount');

    expect(textComponent.props.children).not.toEqual('3000');
  });
});