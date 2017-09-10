import React from 'react';
import {Banner} from './Banner.jsx';
import renderer from 'react-test-renderer';

describe('Banner Component', () => {
  it('renders banner', () => {
    const component = renderer.create(
      <Banner
        bgImageUrl="bg-image.png"
        centerImageUrl="center-image.png"
        heading="Banner Title"
        subHeading="additional sub text goes here"
      />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
