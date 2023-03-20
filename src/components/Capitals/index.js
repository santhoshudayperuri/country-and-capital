import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {count: countryAndCapitalsList[0]}

  tellId = () => {
    const res = document.getElementById('lis').value
    const resu = countryAndCapitalsList.find(eachOne => eachOne.id === res)
    console.log(resu)
    this.setState({count: resu})
  }

  render() {
    const {count} = this.state
    return (
      <div className="contain">
        <div className="box">
          <h1>Countries And Capitals</h1>
          <div className="b">
            <select id="lis" onChange={this.tellId}>
              {countryAndCapitalsList.map(eachId => (
                <option value={eachId.id} key={eachId.country}>
                  {eachId.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <h1>{count.country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
