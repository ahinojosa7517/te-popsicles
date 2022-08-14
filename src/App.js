import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact-us" component={ContactUs} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
