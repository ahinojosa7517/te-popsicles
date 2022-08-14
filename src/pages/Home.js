import React from "react";
import { Helmet } from "react-helmet";

import Config from "../Config.json";

import popsicleRainbow from "../images/popsicle-rainbow.jpg";
import bluePop from "../images/blue-pop.png";

const TITLE = "Home | " + Config.SITE_TITLE;

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                {/* 
                Helmet allows us to update page title - TITLE variable pulls from Config.json to avoid hardcoding.
                 */}
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <main>
                    <img src={popsicleRainbow} alt="popsicle rainbow" />
                    <section id="list">
                        <h2>Did You Know?</h2>
                        <ul>
                            <li>
                                The earliest know popsicles date as far back as
                                1872. Back then, a popsicle was called a{" "}
                                <i>Hokey-Pokey.</i>
                            </li>
                            <li>
                                Popsicles are also know as freezer pops, ice
                                lollies, and ice pops.
                            </li>
                            <li>
                                The world's largest popsicle was made in 1997
                                and was 21 feet tall.
                            </li>
                            <li>
                                Popsicles have become so popular that a popular
                                arts and craft item is called a popsicle stick.
                            </li>
                        </ul>
                    </section>
                </main>
                <section className="race">
                    <img src={bluePop} alt="Blue Popsicle" id={"racepic"} />
                    <h2>Popsicle Race</h2>
                    <p>
                        Don't forget to sign up for the race! Each attendee will
                        receive their own box of popsicles when they reach the
                        end.
                    </p>
                </section>
                <section className="store">
                    <h2>Get refreshed this Summer!</h2>
                    <p>
                        Mark this very special occasion of the launch of Tech
                        Elevator Popsicles by buying a gift from our stunning
                        array of items, shipped directly from Cleveland.
                    </p>
                    <a href="/" className="store-button">
                        Store
                    </a>
                </section>
            </div>
        );
    }
}

export default Home;
