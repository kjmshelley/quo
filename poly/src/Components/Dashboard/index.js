import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import { getCategories } from "./data";
import "./style.css";

function displayCategory(d) {
    return (
        <div className="row">
            <div className="column">
                <div className="topic">
                    <div className="topic-img">
                        <img src={`assets/img/${d.img}`} alt={d.name} />
                    </div>
                    <div className="topic-text">
                        <span>{d.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Dashboard() {
    const [categories, setCategories] = useState(getCategories());

    return (
        <div class="topics">
            <div class="topics-list">
                { categories.map(c => displayCategory(c)) }
            </div>
        </div>
                <div class="row">
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/introduction.png" />
                            </div>
                            <div class="topic-text">
                                <span>Basics</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/numbers.png" />
                            </div>
                            <div class="topic-text">
                                <span>Numbers</span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/colors.png" />
                            </div>
                            <div class="topic-text">
                                <span>Color</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/family.png" />
                            </div>
                            <div class="topic-text">
                                <span>Family</span>
                            </div>
                        </div>
                    </div>
                    <div class="column tea-shop">
                        <Link to={`learning/food`}>
                            <div class="topic">
                                <div class="topic-img">
                                    <img src="assets/img/diet.png" />
                                </div>
                                <div class="topic-text">
                                    <span>Food</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                

                <div class="row">
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/destination.png" />
                            </div>
                            <div class="topic-text">
                                <span>Travel</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/airport.png" />
                            </div>
                            <div class="topic-text">
                                <span>Airport</span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/toy-train.png" />
                            </div>
                            <div class="topic-text">
                                <span>Train</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/hotel.png" />
                            </div>
                            <div class="topic-text">
                                <span>Hotel</span>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="topic">
                            <div class="topic-img">
                                <img src="assets/img/embassy.png" />
                            </div>
                            <div class="topic-text">
                                <span>Embassy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;