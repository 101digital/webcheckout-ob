import React from 'react'
import styles from './styles.module.css'


 const BankItem = ({bankData, onSubmit}) => {
    let {bankId, bankName, logo, type} = bankData
     return (
    <li onClick = {(e) => { e.preventDefault(); onSubmit({bankId, bankName, type})}}>
        <div>
        <span>{bankName}</span>
        </div>
    </li>)
 }


 const BankList = ({filterText, banks, onSubmit}) => {
    const rows = []
    banks.forEach((bank) => {
      if (bank.bankName.indexOf(filterText) === -1) {
        return;
      }else {
        rows.push(bank)
      }})

     const listItem = rows.map(bank =>
            <BankItem bankData = {bank} key = {bank.bankId} onSubmit = {onSubmit} />)

     return (
     <React.Fragment>
        {listItem}
      </React.Fragment>)
 }


 class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }

    render() {
      return (
        <form className = {styles.searchBar}>
          <input
            type="text"
            placeholder="Search..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
        </form>
      );
    }
  }


 export default class OBWebCheckout extends React.Component {
    constructor(props){
        super(props)
        this.state = {filterText: '', data: {paymentMethod:[]}}

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);

        this.handleAction = this.handleAction.bind(this)
        this.setStatus = this.setStatus.bind(this)

    }

    handleAction(action) {
      window.location = action.url
    }

    setStatus(status, details) {
      console.log(`status =${status}: details = ${JSON.stringify(details)}`)
    }

    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      })
    }

    handleSubmit(paymentMethod) {
        let state = {data: {paymentMethod}}
        this.props.configuration.onSubmit(state, this)
    }

     async componentDidMount() {

     }

     render() {
        return (
         <div className = {styles.OBWebCheckout} >
            <SearchBar
                       filterText={this.state.filterText}
                       onFilterTextChange={this.handleFilterTextChange}
           />
             <ul className = {styles.bankList}>
             <BankList banks = {this.props.configuration.paymentMethods}
                       onSubmit = {this.handleSubmit}
                       filterText={this.state.filterText} />
             </ul>
        </div>)
     }
    }



