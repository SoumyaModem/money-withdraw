import './index.css'

const DenominationItem = props => {
  const {value, withDraw} = props

  const withDrawMoney = () => {
    withDraw(value)
  }

  return (
    <li className="list">
      <button type="button" className="button" onClick={withDrawMoney}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
