import './currencyField.css'

export default function CurrencyField(props) {
    return (
        <select
            className='forex-live-wall--currency-select'
            value={props.currencyToCheck}
            onChange={(e) => { props.setCurrencyToCheck(e.target.value) }}
            required
        >
            <option disabled value=''>Choose a Currency Pair</option>
            {props.currencies && props.currencies.map((item) => {
                return (<option key={`forex-live-wall--currency-select-${item.ticker}`} value={item.ticker}>{item.ticker}</option>)
            })}
        </select>
    )
}