import './button.css'

export default function Button(props) {
  return (
    <button
      className='forex-live-wall--button'
      onClick={props.handleButtonClick}
    >
      {props.buttonText}
    </button>
  )
}