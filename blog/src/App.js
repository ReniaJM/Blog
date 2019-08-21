import React, {Component}from 'react';
import './App.css';
import Home from '../src/components/layouts/Home'
import About from '../src/components/layouts/About'
import {BrowserRouter, Route} from "react-router-dom";
import MainLayout from "./components/layouts/ManLayout";
import {Provider} from "react-redux";
import store from "./store/store";
import NewsDetails from "./components/containers/NewsDetails";


class App extends Component{
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MainLayout>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/news/:id" component={NewsDetails} />
                    </MainLayout>
                </BrowserRouter>
            </Provider>
        );
    }

}

export default App;
