import React from 'react'
import '../styles/styles.css'
const App = ({ Component, pageProps  }) => {
    return(
        <div>
            <h1>APP</h1>
            <Component  {...pageProps}/>
        </div>

    ) 
}

export default App