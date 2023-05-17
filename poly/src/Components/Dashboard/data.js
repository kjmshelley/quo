const categories = [{
    name: "Travel",
    link: "",
    img: "introduction.png",
    topics: [
        [
            { name: "Airport", order: 1, link: "/lesson/airport", img: "airport.png" },
            { name: "Train", order: 2, link: "/lesson/train", img: "toy-train.png" },
            { name: "Bus", order: 3, link: "/lesson/bus", img: "bus1.png" },
        ],
        [
            { name: "Hotel", order: 1, link: "/lesson/hotel", img: "hotel.png" },
            { name: "Embassy", order: 2, link: "/lesson/embassy", img: "embassy.png" },
        ]
    ]
}];

const x = {
    getCategories: () => categories
};

export default (() => x)();