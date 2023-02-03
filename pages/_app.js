import React from 'react'
import '../styles/styles.css'
const App = ({ Component, pageProps  }) => {
    return(
        <div>
           
            <Component  {...pageProps}/>
        </div>

    ) 
}

export default App