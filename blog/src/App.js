import React, {Component}from 'react';
import './App.css';
import Home from '../src/components/layouts/Home'
import About from '../src/components/layouts/About'
import {BrowserRouter, Route} from "react-router-dom";
import MainLayout from "./components/layouts/ManLayout";
import ItemDetails from "./components/present/ItemDetails";
import {Provider} from "react-redux";
import store from "./store/store";


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MainLayout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/news/:id" component={ItemDetails} />
                    </MainLayout>
                </BrowserRouter>
            </Provider>
        );
    }

}

export default App;
