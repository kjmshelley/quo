import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

import data from "../../data";
import "./style.css";

const getCategories = data.getCategories;
console.log(data.getCategories());

function displayTopic(d) {
    return (
        <div className="column">
            <Link to={`${d.link}`}>
                <div className="topic">
                    <div className="topic-img">
                        <img src={`/assets/img/${d.img}`} alt={d.name} />
                    </div>
                    <div className="topic-text">
                        <span>{d.name}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

function displayCategory(c) {
    
    return (
        <div  key={`${c.name}`}>
            {/* top level */}
            <div className="row">
                { displayTopic(c)}
            </div>

            {/* sub levels */}
            { c.topics.map(topic => {
                return (
                    <div className="row">
                        {topic.map(t => displayTopic(t))}
                    </div>
                )
            })}
        </div>
    )
}

function Dashboard() {
    const [categories] = useState(getCategories());

    return (
        <div className="topics">
            <div className="topics-list">
                { categories.map(c => displayCategory(c)) }
            </div>
        </div>
    );
}

export default Dashboard;