import React from 'react';
import {BpComponent} from './BpComponent.jsx';
import renderer from 'react-test-renderer';

describe('Boilerplate Component', () => {
  it('renders initial message', () => {
    const component = renderer.create(
      <BpComponent
        buttonText={"Toggle Title"}
        headingTitle={"Boilerplate"}
        subHeading={"Start with something rather than nothing!"}
        titleToggleText={"Base Dish"}
      />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
