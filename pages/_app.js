import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import Head from '../src/components/head'
import HeaderContainer from '../src/components/header/HeaderContainer'
import { loginSuccess, getProfile, loginError } from '../src/actions/user'
import stylesheet from '../src/styles/index.less'
import _postCard from '../src/components/common/postCard/_postCard.less'
import _peopleCard from '../src/components/common/peopleCard/_peopleCard.less'
import { Cookies } from 'react-cookie'
import Loading from '../src/components/common/loading/Loading'
import jwtDecode from 'jwt-decode'

import VerifyAccountContainer from '../src/components/verify/VerifyAccountContainer'
import { Router } from 'routes'
const cookies = new Cookies()

class MyApp extends App {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: null,
      isVerify: false
    }
  }

  componentDidMount() {
    let isLoggedIn = cookies.get('token') ? true : false
    if (isLoggedIn) {

      this.setState({
        isVerify: jwtDecode(cookies.get('token')).verified,
        isLoggedIn
      })
      this.props.reduxStore.dispatch(loginSuccess())
      this.props.reduxStore.dispatch(getProfile())
    }
    else this.props.reduxStore.dispatch(loginError())
    this.setState({
      isLoggedIn
    })
  }
  renderComponent(isLoggedIn, isVerify) {
    const { Component, pageProps } = this.props

    if (isLoggedIn === null)
      return <Loading />
    else if (Router.query && Router.query.token)
      return <VerifyAccountContainer />
    else if (isLoggedIn === false && !isVerify)
      return <Component {...pageProps} />
    else if (isLoggedIn === true && !isVerify)
      return <VerifyAccountContainer />
    else if (isLoggedIn === true && isVerify)
      return <Component {...pageProps} />
  }

  render() {
    const { reduxStore, pageProps } = this.props
    const { isLoggedIn, isVerify } = this.state
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  stylesheet +
                  _postCard +
                  _peopleCard
              }} />
            <Head />
            <div className="page-container">
              <HeaderContainer {...pageProps} />
              <div className="body-content">
                {
                  this.renderComponent(isLoggedIn, isVerify)
                }
              </div>
            </div>
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
