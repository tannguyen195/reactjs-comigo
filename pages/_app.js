import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import Head from '../src/components/head'
import HeaderContainer from '../src/components/header/HeaderContainer'
import FooterContainer from '../src/components/footer/FooterContainer'

import SidebarContainer from '../src/components/sidebar/SidebarContainer'

import stylesheet from '../src/styles/index.less'
import { Cookies } from 'react-cookie'
import { signInSuccess } from '../src/actions/authAction'
import ScreenLoading from '../src/components/common/screenLoading/ScreenLoading'
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

    const { isLoggedIn } = this.state

    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <style dangerouslySetInnerHTML={{
              __html: stylesheet
            }} />

            <Head />


            {
              isLoggedIn === true &&
              <div style={{ display: 'flex' }}>
                <SidebarContainer />
                <Component  {...pageProps} />
              </div>
            }
            {
              isLoggedIn === false &&
              <div>
                <HeaderContainer {...pageProps} />
                <Component {...pageProps} />
                <FooterContainer {...pageProps} />
              </div>
            }
            {
              isLoggedIn === null && <ScreenLoading />
            }
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
