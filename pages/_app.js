import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/styles.css'
const App = ({ Component, pageProps  }) => {
    return(
        <div>
           <Header />
           <div className='min-h-screen'>
              <Component  {...pageProps}/>
           </div>
           <Footer/>
          
        </div>

    ) 
}

export default App