import injectContext from '../store/appContext'
import '../styles/styles.scss'
import Head from 'next/head'

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        </Head>
        <Component {...pageProps} />
    </>
)
export default injectContext(App);