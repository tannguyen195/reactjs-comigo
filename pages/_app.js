import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'

import Head from '../src/components/head'
import HeaderContainer from '../src/components/header/HeaderContainer'
import FooterContainer from '../src/components/footer/FooterContainer'

import stylesheet from '../src/styles/index.less'
class MyApp extends App {

  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Container>
        <Provider store={reduxStore}>
          <div>
            <style dangerouslySetInnerHTML={{
              __html: stylesheet
            }} />

            <Head>

            </Head>
            <HeaderContainer {...pageProps} />
            <Component {...pageProps} />
            <FooterContainer {...pageProps} />
          </div>
        </Provider>
      </Container>
    )
  }
}

export default withReduxStore(MyApp)
