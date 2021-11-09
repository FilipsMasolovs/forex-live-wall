import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Button from './button';

it('renders without crashing', () => {
  const parent = document.createElement('div')
  ReactDOM.render(<Button buttonText='Search' />, parent)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Button buttonText='Search' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})