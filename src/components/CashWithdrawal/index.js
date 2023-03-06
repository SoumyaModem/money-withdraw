import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}

  withDraw = value => {
    this.setState(prevState => ({
      count: prevState.count - value,
    }))
  }

  render() {
    const {count} = this.state
    const {denominationsList} = this.props

    return (
      <div className="container">
        <div className="sub-container">
          <div className="name-container">
            <h1 className="logo">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance">Your Balance</p>
            <div className="money-container">
              <p className="money">{count}</p>
              <p className="rupee">In Rupees</p>
            </div>
          </div>
          <p className="heading">WithDraw</p>
          <p className="paragraph">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items-holder">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                value={eachItem.value}
                withDraw={this.withDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
