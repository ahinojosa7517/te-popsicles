import React from "react";
import { Helmet } from "react-helmet";

import Config from "../Config.json";

const TITLE = "Contact Us | " + Config.SITE_TITLE;

class ContactUs extends React.Component {
    render() {
        return (
            <main id="main">
                {/* 
                Helmet allows us to update page title - TITLE variable pulls from Config.json to avoid hardcoding.
                 */}
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                <h2>Contact Us</h2>
                <form action="example.com" method="post" id="form">
                    <div>
                        <label for="name">Name:</label>
                        <input id="name" name="name" type="text" />
                    </div>
                    <div>
                        <label for="referral">How did you hear of us:</label>
                        <select id="referral" name="referral">
                            <option value="Popsicle Monthly">
                                Popsicle Monthly
                            </option>
                            <option value="Popsicle Weekly">
                                Popsicle Weekly
                            </option>
                            <option value="Popsicle Quarterly">
                                Popsicle Quarterly
                            </option>
                        </select>
                    </div>
                    <div>
                        <label for="color">
                            What is your favorite popsicle:
                        </label>
                        <input
                            type="color"
                            id="color"
                            name="color"
                            value="#00AFEF"
                        />
                    </div>
                    {/* <!-- Fix box sizing --> */}
                    <div>
                        <label for="comments">
                            Please let us know any comments your have:
                        </label>
                        <textarea
                            id="comments"
                            name="comments"
                            rows="10"
                            cols="60"
                        ></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                        {/* <input type="submit" value="Submit" type="button" /> */}
                    </div>
                </form>
            </main>
        );
    }
}

export default ContactUs;
