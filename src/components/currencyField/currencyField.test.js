import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CurrencyField from './currencyField';

const currencies = [{ticker: "EUR/USD"},{ticker: "USD/JPY"},{ticker: 'GBP/USD'}]

it('renders without crashing', () => {
  const parent = document.createElement('div')
  ReactDOM.render(<CurrencyField currencies={currencies} />, parent)
})

it('renders correctly', () => {
  const tree = renderer
    .create(<CurrencyField currencies={currencies} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});