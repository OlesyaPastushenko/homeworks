import React, { useState } from "react";
import App from "./app";
import { render } from 'react-dom';
import { ContextuserBasket, ContextCatalogue } from "store/context";
import { BrowserRouter } from 'react-router-dom';

function Init() {
    const [catalogue, setCatalogue] = useState([])
    const [userBasket, setUserBasket] = useState([])
    
                
    return (
        <React.StrictMode>
            <BrowserRouter>
            <ContextCatalogue.Provider value={{catalogue, setCatalogue}}>
                <ContextuserBasket.Provider value={{userBasket, setUserBasket}}>
                    <App/>
                </ContextuserBasket.Provider>
            </ContextCatalogue.Provider>
            </BrowserRouter>
        </React.StrictMode>
    )
}
render (<Init />, document.getElementById('root'));

const devMode = process.env.NODE_ENV === "development"
if(devMode && module && module.hot){
    module.hot.accept()
}
