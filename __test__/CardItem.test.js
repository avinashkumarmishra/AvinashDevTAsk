import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native';
import CardItem from '../app/components/CardItem';

afterEach(cleanup);

describe('<CardItem />', () => {
  it('has 2 children', () => {
    const tree = renderer.create(<CardItem cardNumber={"5647341124132020"} />).toJSON();
    expect(tree.children.length).toBe(2);
  });

  it('should render green background for card', () => {
    const rendered = render(<CardItem cardNumber={"5647341124132020"} />);
    const cardComponent = rendered.getByTestId('card');
    
    expect(cardComponent.props.style).toMatchObject({backgroundColor: '#01D167'});
  });

  it('should have the card-owner-name - Mark Henry', () => {
    const rendered = render(<CardItem ownerName={"Mark Henry"} cardNumber={"5647341124132020"} />);
    const textComponent = rendered.getByTestId('text-name');

    expect(textComponent.props.children).toEqual('Mark Henry');
  });

  it('should not have the card-owner-name - Doug Henry', () => {
    const rendered = render(<CardItem ownerName={"Doug Henry"} cardNumber={"5647341124132020"} />);
    const textComponent = rendered.getByTestId('text-name');

    expect(textComponent.props.children).not.toEqual('Mark Henry');
  });

  it('should render white text for card-owner-name', () => {
    const rendered = render(<CardItem ownerName={"Mark Henry"} cardNumber={"5647341124132020"} />);
    const textComponent = rendered.getByTestId('text-name');
    
    expect(textComponent.props.style).toMatchObject({color: '#FFFFFF'});
  });
});