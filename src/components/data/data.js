import './data.css'

export default function Data(props) {
    return (
        <div className='forex-live-wall--currency-data'>
            {props.data.length ?
                <>
                    <h2>{props.data[0].name}</h2>
                    <h3>Price: {props.data[0].price}</h3>
                    <h3 className={props.data[0].change > 0 ? 'positive' : 'negative'}>Change: <span>{props.data[0].change}</span></h3>
                </> :
                <p>Select a currency pair and click "Search"</p>
            }
        </div>
    )
}