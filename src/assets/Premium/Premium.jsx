import React from "react";
import { Link } from 'react-router-dom';
import "./Premium.css"

function Premium(){

    return(
        <>
            <div className="premiumContainer">
                <div className="premiumHeading">
                    <h2>Go Premium Now!</h2>
                    <h3>Benefits: </h3>
                    <h4>1. Unlock Video Learning</h4>
                    <h4>2. Unlock Verified Notes</h4>
                    <h4>3. Unlock Advanced Exercise</h4>
                </div>

                <div className="premiumCardContainer">
                    <div className="premiumCard">
                        <div className="premiumText">
                            <h3>$5</h3>
                            <span>30 DAYS</span>

                            <button className="premiumJoin"><Link to="/payment">Join</Link></button>

                            <p>Enjoy a full month of subscription for full benefits. At no additional cost.</p>
                        </div>

                        <div className="premiumText">
                            <h3>$13</h3>
                            <span>90 DAYS</span>

                            <button className="premiumJoin"><Link to="/payment">Join</Link></button>

                            <p>Enjoy 3 full months of subscription for full benefits. At no additional cost.</p>
                        </div>

                        <div className="premiumText">
                            <h3>$45</h3>
                            <span>365 DAYS</span>

                            <button className="premiumJoin"><Link to="/payment">Join</Link></button>

                            <p>Enjoy one full year of subscription for full benefits. At no additional cost.</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Premium