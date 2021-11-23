import React from 'react' //write rafce and code snippit will be written

import { Navbar, Brand, CTA } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

const App = () => {
    return (
        <div>
            <div className="App">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    )
}

export default App
