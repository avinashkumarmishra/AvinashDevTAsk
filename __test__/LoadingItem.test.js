import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native';
import LoadingItem from '../app/components/LoadingItem';

jest.useFakeTimers();
afterEach(cleanup);

describe('<LoadingItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<LoadingItem />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it('should render text in white color', () => {
    const rendered = render(<LoadingItem />);
    const textComponent = rendered.getByTestId('text');

    expect(textComponent.props.style).toMatchObject({color: '#FFFFFF'});
  });

  it('should have text - Please Wait', () => {
    const rendered = render(<LoadingItem text="Please Wait"/>);
    const textComponent = rendered.getByTestId('text');

    expect(textComponent.props.children).toEqual('Please Wait');
  });

  it('should not have text - Syncing', () => {
    const rendered = render(<LoadingItem text="Please Wait"/>);
    const textComponent = rendered.getByTestId('text');

    expect(textComponent.props.children).not.toEqual('Syncing');
  });
});