import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Data from './data';

const data = [{name: "USD/JPY",price: 112.986,change: -0.002093}]

it('renders without crashing', () => {
  const parent = document.createElement('div')
  ReactDOM.render(<Data data={data} />, parent)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Data data={data} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});