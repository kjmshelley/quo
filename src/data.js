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

const questions = [
    { value: "Soy un chico", answer: "I am a boy", choices: ["You are a boy", "You are a girl", "I am a boy"]},
    { value: "Soy un estudiante", answer: "I am a student.", choices: ["She is a student.", "I am a student.", "She is not a student."]},
    { value: "Bebo aqua", answer: "I drink water.", choices: ["The water.", "She is drinking water.", "I drink water."]},
    { value: "Me gustan las manzanas", answer: "I like the apples.", choices: ["They like the apples.", "The apples are good.", "We like the apples."]},
    { value: "Me gusta beber agua", answer: "I like to drink water.", choices: ["Do you like the water?", "I like to drink water", "I like drinking water."]},
    { value: "Me gusta tomar agua", answer: "I like to drink water.", choices: ["I like to buy water.", "Did he take the water?", "Can you give me the water?"]},
];

const x = {
    getCategories: () => categories,
    getQuestions: () => questions,
};

export default (() => x)();