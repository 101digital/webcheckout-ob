import React from 'react'

import  ObWebCheckout  from 'webcheckout-ob'
import 'webcheckout-ob/dist/index.css'


const configuration = {
  paymentMethods: [],
  onSubmit: (state, dropin) => {

  },
  onError(error) {
    console.error(error)
  }
 }


 export default class App extends React.Component {
  constructor(props){
      super(props)
      this.state = {paymentMethods:[]}
    }

    async componentDidMount() {
       //let paymentMethodsResponse = await getPaymmentMethod()
       let paymentMethodsResponse= {"paymentMethods":[{"bankId":7.0,"bankName":"NatWest","type":"fractal"},{"bankId":47.0,"bankName":"Nationwide","type":"fractal"},{"bankId":8.0,"bankName":"Ulster","type":"fractal"},{"bankId":62.0,"bankName":"Clydesdale Bank","type":"fractal"},{"bankId":54.0,"bankName":"Vanquis Bank","type":"fractal"},{"bankId":32.0,"bankName":"Bank of Ireland","type":"fractal"},{"bankId":56.0,"bankName":"M&S Bank","type":"fractal"},{"bankId":39.0,"bankName":"Cater Allen","type":"fractal"},{"bankId":31.0,"bankName":"Monzo","type":"fractal"},{"bankId":58.0,"bankName":"Yorkshire Building Society","type":"fractal"},{"bankId":3.0,"bankName":"Danske","type":"fractal"},{"bankId":65.0,"bankName":"Unity Trust","type":"fractal"},{"bankId":38.0,"bankName":"Cash Plus","type":"fractal"},{"bankId":2.0,"bankName":"Lloyds - Personal","type":"fractal"},{"bankId":21.0,"bankName":"Barclays (Business)","type":"fractal"},{"bankId":40.0,"bankName":"Chelsea Building Society","type":"fractal"},{"bankId":55.0,"bankName":"First Direct","type":"fractal"},{"bankId":9.0,"bankName":"Barclays","type":"fractal"},{"bankId":53.0,"bankName":"TSB Bank","type":"fractal"},{"bankId":52.0,"bankName":"Tide","type":"fractal"},{"bankId":4.0,"bankName":"HSBC","type":"fractal"},{"bankId":13.0,"bankName":"First Trust Bank (UK) - Personal","type":"fractal"},{"bankId":16.0,"bankName":"First Trust Bank (UK) - Business","type":"fractal"},{"bankId":45.0,"bankName":"Handelsbanken UK","type":"fractal"},{"bankId":41.0,"bankName":"Coutts & Company","type":"fractal"},{"bankId":6.0,"bankName":"RBS","type":"fractal"},{"bankId":63.0,"bankName":"Sainsbury's Bank","type":"fractal"},{"bankId":46.0,"bankName":"MBNA","type":"fractal"},{"bankId":50.0,"bankName":"Starling Bank","type":"fractal"},{"bankId":36.0,"bankName":"Barclays Corporate","type":"fractal"},{"bankId":59.0,"bankName":"Capital One","type":"fractal"},{"bankId":20.0,"bankName":"Revolut","type":"fractal"},{"bankId":61.0,"bankName":"BBank","type":"fractal"},{"bankId":33.0,"bankName":"Bank of Scotland Business","type":"fractal"},{"bankId":34.0,"bankName":"Bank of Scotland","type":"fractal"},{"bankId":35.0,"bankName":"Barclaycard","type":"fractal"},{"bankId":42.0,"bankName":"Cumberland Building Society","type":"fractal"},{"bankId":1.0,"bankName":"AIB (UK) - Personal","type":"fractal"},{"bankId":37.0,"bankName":"Barclays Wealth","type":"fractal"},{"bankId":51.0,"bankName":"Tesco Bank","type":"fractal"},{"bankId":64.0,"bankName":"Yorkshire Bank","type":"fractal"},{"bankId":43.0,"bankName":"Halifax Personal","type":"fractal"},{"bankId":5.0,"bankName":"Santander","type":"fractal"},{"bankId":107.0,"bankName":"Natwest Sandbox","type":"fractal"},{"bankId":23.0,"bankName":"HSBC Business","type":"fractal"},{"bankId":30.0,"bankName":"Bank of Ireland (Business)","type":"fractal"},{"bankId":15.0,"bankName":"AIB (UK) - Business","type":"fractal"},{"bankId":57.0,"bankName":"Danske (Business)","type":"fractal"},{"bankId":60.0,"bankName":"Lloyds Business","type":"fractal"}],"paymentMethodsConfiguration":{"card":{"enableStoreDetails":true,"holderNameRequired":true,"hideCVC":false,"hasHolderName":true}}}
       this.setState({paymentMethods: paymentMethodsResponse.paymentMethods})
    }

    render() {
      configuration.paymentMethods = this.state.paymentMethods
      return (
       <div>
          <ObWebCheckout configuration={configuration} />
      </div> )
    }
  }


