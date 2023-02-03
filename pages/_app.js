import React from 'react'
import Header from '../components/Header'
import '../styles/styles.css'
const App = ({ Component, pageProps  }) => {
    return(
        <div>
           <Header />
            <Component  {...pageProps}/>
        </div>

    ) 
}

export default App