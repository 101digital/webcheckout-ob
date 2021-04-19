# webcheckout-ob

# Install

```bash
yarn add https://github.com/101digital/webcheckout-ob
```

## Usage

```jsx
import React, { Component } from 'react'

import ObWebCheckout from 'webcheckout-ob'
import 'webcheckout-ob/dist/index.css'

const configuration = {
  paymentMethods: [],
  onSubmit: (state, dropin) => {

  },
  onError(error) {
    console.error(error)
  }
 }


class Example extends Component {

  async componentDidMount() {
       let paymentMethodsResponse = await getPaymmentMethod()
       this.setState({paymentMethods: paymentMethodsResponse.paymentMethods})
    }
  render() {
    return <ObWebCheckout  configuration={configuration} />
  }
}
```


## Develop library
```
git clone git@github.com:101digital/webcheckout-ob.git
cd webcheckout-ob
yarn install && yarn build
yarn link

cd example
yarn link webcheckout-ob
```