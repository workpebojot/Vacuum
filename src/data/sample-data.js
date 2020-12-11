const SampleData = [
    {
        id: 0,
        image: require('.././assets/images/1-demo-user.png'),
        name: "Kitchen",
        author: {
            first: "Edison",
            last: "Pebojot"
        },
        date: "January 1, 2021",
        day: "Friday",
        hours: 2,
        location: "Paltic",
        reward: 200.00,
        cleaner: 21,
        description: "As a cleaner, you will work in kitchen",
        task: ["Wash and put away dishes", "Wipe down cabinets", "Organize drawers"]
    },
    {
        id: 1,
        image: require('.././assets/images/3-demo-user.png'),
        name: "Living",
        author: {
            first: "James",
            last: "Gem"
        },
        date: "January 2, 2022",
        day: "Saturday",
        hours: 3,
        location: "Umiray",
        reward: 100,
        cleaner: 26,
        description: "Hi, do you like to work in the living room. Please join us.",
        task: ["Dust shelves", "Dust tabletops", "Dust electronics", "Vacuum drapes w/ attachment"]
    },
    {
        id: 2,
        image: require('.././assets/images/2-demo-user.png'),
        name: "Wash",
        author: {
            first: "Jasmine",
            last: "Ricc"
        },
        date: "January 3, 2021",
        day: "Sunday",
        hours: 3,
        location: "Matawe",
        reward: 100,
        cleaner: 18,
        description: "Hello! I am jasmine. Working in the laundry made easy.",
        task: ["Empty Trash", "Run cleaning cycle in washing machine", "Clean out dryer", "Reorganize supplies"]
    }
]

export default SampleData;