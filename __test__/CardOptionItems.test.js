import React from 'react';
import renderer from 'react-test-renderer';
import {render, cleanup} from '@testing-library/react-native';
import CardOptionItems from '../app/components/CardOptionItems';

afterEach(cleanup);

describe('<CardOptionItems />', () => {
  it('has 5 children', () => {
    const tree = renderer.create(<CardOptionItems />).toJSON();
    expect(tree.children.length).toBe(5);
  });

  it('should have item - Top-up account', () => {
    const rendered = render(<CardOptionItems />);
    expect(rendered.getByText('Top-up account')).toBeTruthy();
  });

  it('should have item - Weekly spending limit', () => {
    const rendered = render(<CardOptionItems />);
    expect(rendered.getByText('Weekly spending limit')).toBeTruthy();
  });

  it('should have item - Freeze card', () => {
    const rendered = render(<CardOptionItems />);
    expect(rendered.getByText('Freeze card')).toBeTruthy();
  });

  it('should have item - Get a new card', () => {
    const rendered = render(<CardOptionItems />);
    expect(rendered.getByText('Get a new card')).toBeTruthy();
  });

  it('should have item - Deactivated cards', () => {
    const rendered = render(<CardOptionItems />);
    expect(rendered.getByText('Deactivated cards')).toBeTruthy();
  });
});