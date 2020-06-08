import { useContext } from 'react'
import { Context } from '../store/appContext'
import Head from 'next/head'

const Home = () => {
  const { actions, store } = useContext(Context)
  return (
    <>
      <Head>
        <title>Proyecto de Testeo</title>
      </Head>
      <h1>titulo cambiado</h1>
      <h1>{store.value}</h1>
      <button className="btn btn-primary mr-3" onClick={() => actions.test('chao')}>Change Chao</button>
      <button className="btn btn-primary" onClick={() => actions.test('hola')}>Change Hola</button>
    </>
  )
}
export default Home