const user = [
    {
        id: 0,
        image: require('../assets/images/1-demo-user.png'),
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
        image: require('../assets/images/3-demo-user.png'),
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
        image: require('../assets/images/2-demo-user.png'),
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

const location = [
    "Select Location",
    "Paltic",
    "Aplaya",
    "Butas Na Bato",
    "Matawe",
    "Caragsacan",
    "Davildavilan",
    "Dikapanikian",
    "Ibona",
    "Poblacion",
    "Tanawan",
    "Umiray"
]

const job = [
    "Select Work",
    "Kitchen",
    "Living",
    "Wash",
    "Bath",
    "Bed",
    "Garage",
    "Closets",
    "Dining",
    "Office",
    "Throughout House"
]

const reward = [
    "Select Bounty",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000"
]

const hour = [
    "Select Hour",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8"
]

const bath = [
    { label: "Scrub shower walls & fixtures" },
    { label: "Scrub bathtub & faucet " },
    { label: "Clean / wash shower curtain " },
    { label: "Empty trash " },
    { label: "Wash out trash can " },
    { label: "Wipe down mirrors " },
    { label: "Scrub countertops & sink faucet " },
    { label: "Scrub toilet " },
    { label: "Wash rugs " },
    { label: "Clean out/organize cabinets " },
    { label: "Clean out/organize drawers " },
    { label: "Wipe down cabinets" }
]

const bed = [
    { label: "Dust tops of dressers / headboard " },
    { label: "Vacuum drapes w / attachment " },
    { label: "Pick up clothes " },
    { label: "Wash pillows " },
    { label: "Wash bedding " },
    { label: "Flip and rotate mattress" }
]
const closet = [
    { label: "Sort clothes to keep / donate /throw out" },
    { label: "Take dry cleaning and / or clothes to be tailored " },
    { label: "Organize items " },
    { label: "Dust shelves" }
]

const dining = [
    { label: "Dust top of china cabinet/buffet table" },
    { label: "Organize miscellaneous items" },
    { label: "Wipe down table" },
    { label: "Polish silver" }
]

const entry = [
    { label: "Dust furniture" },
    { label: "Clean rug / welcome mat" },
    { label: "Organize shoes / coats" }
]

const garage = [
    { label: "Sweep out floors and clean up any oil spills " },
    { label: "Clean out vehicles " },
    { label: "Take trash/recycling to disposal center " },
    { label: "Put away/organize tools " },
    { label: "Organize sporting equipment / toys " },
    { label: "Organize seasonal decor in bins" }
]

const house = [
    { label: "Change air filters" },
    { label: "Change batteries in smoke / CO2 detectors " },
    { label: "Polish wood floors " },
    { label: "Steam clean carpets " },
    { label: "Change burned out light bulbs " },
    { label: "Dust light fixtures " },
    { label: "Dust ceiling / corners of room " },
    { label: "Dust shelves / picture frames " },
    { label: "Dust decorative accents " },
    { label: "Dust blinds & window sills " },
    { label: "Dust baseboards" },
    { label: "Dust doors & doorframes " },
    { label: "Sweep / mop / vacuum floors & rugs " },
    { label: "Wash windows" }
]

const kitchen = [
    { label: "Wash and put away dishes" },
    { label: "wipe down cabinets" },
    { label: "Organize cabinets" },
    { label: "Organize drawers" },
    { label: "Throw out expired food in pantry, fridge, & freezer" },
    { label: "Wipe down & disinfect interior of fridge & freezer" },
    { label: "Organize pantry items" },
    { label: "Empty trash" },
    { label: "Scrub inside microwave" },
    { label: "Wipe down backwash" },
    { label: "Wipe down countertops" },
    { label: "Deep clean oven & stovetop" },
    { label: "Wipe down appliances" },
    { label: "Dust tops of cabinets " },
    { label: "Scrub & disinfect sink" },
    { label: "Clean garbage disposal w / ice and lemon slices" },
    { label: "Wash out garbage can" }
]

const laundry = [
    { label: "Empty trash " },
    { label: "Run cleaning cycle in washing machine " },
    { label: "Clean out dryer vents & duct " },
    { label: "Wipe down exterior of washer & dryer " },
    { label: "Reorganize / discard old cleaning supplies" }
]

const living = [
    { label: "Dust mantel / shelves / picture frames " },
    { label: "Dust tabletops" },
    { label: "Dust electronics" },
    { label: "Organize miscellaneous items" },
    { label: "Organize media cabinet" },
    { label: "Steam clean sofas / chairs or wash slipcovers" },
    { label: "Wash throw blankets and pillow covers" },
    { label: "Vacuum drapes w / attachment" }
]

const office = [
    { label: "File documents / important papers" },
    { label: "Backup and / or delete old files on computer" },
    { label: "Organize cabinets / drawers" },
    { label: "Refill office supplies" },
    { label: "Dust desk top & furniture " },
    { label: "Dust electronics" }
]

module.exports = {
    user: user,
    location: location,
    job: job,
    reward: reward,
    hour: hour,
    bath: bath,
    bed: bed,
    closet: closet,
    dining: dining,
    entry: entry,
    garage: garage,
    house: house,
    kitchen: kitchen,
    laundry: laundry,
    living: living,
    office: office
}