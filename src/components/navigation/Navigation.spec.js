import React from 'react';
import {Navigation} from './Navigation.jsx';
import renderer from 'react-test-renderer';

describe('Navigation Component', () => {
  const navItems = [
    {url: '#', label: 'Nav One'},
    {url: '#', label: 'Nav Two'},
    {url: '#', label: 'Nav Three'},
    {url: '#', label: 'Nav Four'},
    {url: '#', label: 'Nav Five'}
  ];

  it('renders navigation', () => {
    const component = renderer.create(
      <Navigation
        links={navItems}
        listClassname="test-nav"
      />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
