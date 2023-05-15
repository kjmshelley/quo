const categories = [{
    name: "Travel",
    link: "",
    img: "",
    topics: [
        [
            { name: "Airport", order: 1, link: "", img: "airport.png" },
            { name: "Train", order: 2, link: "", img: "toy-train.png" },
            { name: "Bus", order: 3, link: "", img: "bus.png" },
        ],
        [
            { name: "Hotel", order: 1, link: "", img: "hotel.png" },
            { name: "Embassy", order: 2, link: "", img: "embassy.png" },
        ]
    ]
}];

const x = {
    getCategories: () => categories
};

export default x;