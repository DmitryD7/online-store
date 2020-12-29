import React from 'react';
import './App.css';
import {ItemsList} from "../features/items/itemsList";
import {Header} from "../features/header/header";
import {Cart} from "../features/cart/cart";
import {Route, Switch} from 'react-router-dom';
import {Container} from '@material-ui/core';

function App() {
    return <div className="App">
        <Header/>
        <Container >
            <Switch>
                <Route exact path={'/'} render={() => <ItemsList/>}/>
                <Route path={'/cart'} render={() => <Cart/>}/>
                <Route exact path="*" render={() => <div><h2>404 NOT FOUND</h2></div>}/>
            </Switch>
        </Container>
    </div>
}

export default App;