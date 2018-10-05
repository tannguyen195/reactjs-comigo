import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import Head from '../src/components/head'
import HeaderContainer from '../src/components/header/HeaderContainer'

import stylesheet from '../src/styles/index.less'
import { Cookies } from 'react-cookie'
import { signInSuccess } from '../src/actions/authAction'
const cookies = new Cookies()

class MyApp extends App {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: null
    }
  }



  componentDidMount() {
    let isLoggedIn = cookies.get('token') ? true : false
    if (isLoggedIn) {
      this.props.reduxStore.dispatch(signInSuccess())
    }
    this.setState({
      isLoggedIn
    })
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props

    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <style dangerouslySetInnerHTML={{
              __html: stylesheet
            }} />

            <Head />
            <div className="page-container">
              <HeaderContainer {...pageProps} />
              <div className="body-content">
                <div className="max-width">
                  <Component {...pageProps} />
                </div>

              </div>
            </div>
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
