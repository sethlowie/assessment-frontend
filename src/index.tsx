import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { store } from "./api";
import { Provider } from "react-redux";

const Root = () => (
    <div>
        <Link to="/page-one">Page One</Link>
        <br />
        <Link to="/page-two">Page Two</Link>
        <br />
        <Link to="/page-three">Page Three</Link>
    </div>
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Root />
                    </Route>
                    <Route path="/:id">
                        <App />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
