import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,800,900" rel="stylesheet" />
                    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
                    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
                    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
                    <link rel="icon" href="/static/favicon.ico" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}