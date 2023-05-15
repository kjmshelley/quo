import "./style.css";
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
    return (
        <div class="topics">
            <div class="topics-list">
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