import * as React from 'react';
import {
    Container,
    Header,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text,
    Badge,
    Input,
    Item,
    Right,
    Left,
    Title,
    Label,
    Card,
    CardItem,
    Picker,
    Body,
    H3,
    List,
    ListItem,
    Thumbnail
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
    TextInput,
    Image,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Keyboard
} from 'react-native';
import DialogAndroid from 'react-native-dialogs';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SampleData from '.././data/sample-data';
import Clean from './../type/clean';

UIManager.setLayoutAnimationEnabledExperimental(true);

export default class FindJob extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state
        }
    }

    state = {
        search: [],
        expand: false,
        animation: [],
        deleted: [],
        searchbutton: [],
        history: [],
        cancelkeyboard: Keyboard.dismiss
    }

    SearchEngineTerm(value) {
        this.state.search[0] = value;
        this.setState({ search: this.state.search }, () => {
            console.log("Array :", this.state.search)
        });
    }

    isFocused() {
        LayoutAnimation.configureNext(
            {
                duration: 700,
                create: { type: 'linear', property: 'opacity' },
                update: { type: 'spring', springDamping: 0.4 },
                delete: { type: 'linear', property: 'opacity' }
            }
        )
        this.setState({ expand: true }, () => {
            try {
                this.SearchExit.play();
                setTimeout(() => {
                    try {
                        this.SearchExit.pause();
                    } catch (e) {
                        ``
                    }
                }, 2000)
            } catch (e) {
                console.log(e.message);
            }
        });
    }

    isBackSpaced() {
        this.state.searchbutton = [];
        this.setState({ searchbutton: this.state.searchbutton });
    }

    isFocusedExitButton() {
        LayoutAnimation.configureNext(
            {
                duration: 700,
                create: { type: 'linear', property: 'opacity' },
                update: { type: 'spring', springDamping: 0.4 },
                delete: { type: 'linear', property: 'opacity' }
            }
        )
        this.setState({ expand: false }, () => {
            this.state.search = [];
        });
        this.state.cancelkeyboard = Keyboard.dismiss();
        this.setState({ cancelkeyboard: this.state.cancelkeyboard })
    }

    async InButtonSearched() {
        // Search Term
        if (this.state.search.length !== 0) {
            const SearchTerm = this.state.search.slice(0, 1)[0];
            if (/^[A-Za-z]+$/.test(SearchTerm) || /^[a-zA-Z\s]*$/.test(SearchTerm)) {
                this.CanonizeString = SearchTerm.toLowerCase().replace(/\s/g, "");
                await this.StoreData("history", SearchTerm);
            }

            if (/^\d+$/.test(SearchTerm) || /^[+-]?\d+(\.\d+)?$/.test(SearchTerm)) {
                if (+SearchTerm === 0) {
                    this.CanonizeNumber = 1;
                    console.log("History: ", SearchTerm);
                    await this.StoreData("history", "" + SearchTerm);
                } else {
                    this.CanonizeNumber = +SearchTerm;
                    console.log("History: ", SearchTerm);
                    await this.StoreData("history", "" + SearchTerm);
                }
            }
            // Search Author
            const AuthorFirst = SampleData.filter((value) => {
                const AuthorFirst = value.author.first;
                const LowerAuthorFirstAndRemoveSpace = AuthorFirst.toLocaleLowerCase().replace(/\s/g, "");
                if (LowerAuthorFirstAndRemoveSpace === this.CanonizeString) {
                    return AuthorFirst;
                }
            }) || 1;
            const FirstAuthor = AuthorFirst.length !== 0 ? AuthorFirst[0].author.first.toLocaleLowerCase().replace(/\s/g, "") : false;

            const AuthorLast = SampleData.filter((value) => {
                const AuthorLast = value.author.last;
                const LowerAuthorLastAndRemoveSpace = AuthorLast.toLocaleLowerCase().replace(/\s/g, "");
                if (LowerAuthorLastAndRemoveSpace === this.CanonizeString) {
                    return AuthorLast;
                }
            }) || 1;
            const LastAuthor = AuthorLast.length !== 0 ? AuthorLast[0].author.last.toLocaleLowerCase().replace(/\s/g, "") : false;

            const Author = SampleData.filter((value) => {
                const author = value.author;
                const AuthorFirst = value.author.first;
                const AuthorLast = value.author.last;
                const LowerAuthorFirstAndRemoveSpace = AuthorFirst.toLocaleLowerCase().replace(/\s/g, "");
                const LowerAuthorLastAndRemoveSpace = AuthorLast.toLocaleLowerCase().replace(/\s/g, "");
                const FullName = `${LowerAuthorFirstAndRemoveSpace}${LowerAuthorLastAndRemoveSpace}`;
                if (FullName === this.CanonizeString) {
                    return author;
                }
            }) || 1;
            const author = Author.length !== 0 ? `${Author[0].author.first.toLocaleLowerCase().replace(/\s/g, "")}${Author[0].author.last.toLocaleLowerCase().replace(/\s/g, "")}` : false

            // Search Location
            const Location = SampleData.filter((value) => {
                const location = value.location;
                const LowerLocationAndRemoveSpace = location.toLocaleLowerCase().replace(/\s/g, "");
                if (LowerLocationAndRemoveSpace === this.CanonizeString) {
                    return location;
                }
            }) || 1;
            const location = Location.length !== 0 ? Location[0].location.toLocaleLowerCase().replace(/\s/g, "") : false;

            // Search Reward
            const Reward = SampleData.filter((value) => {
                const reward = value.reward;
                if (value.reward == this.CanonizeNumber) {
                    return reward;
                }
            }) || 1;
            const reward = Reward.length !== 0 ? Reward[0].reward : false;
            // Search Name
            const Name = SampleData.filter((value) => {
                const name = value.name;
                const LowerNameAndRemoveSpace = name.toLocaleLowerCase().replace(/\s/g, "");
                if (LowerNameAndRemoveSpace === this.CanonizeString) {
                    return name;
                }
            }) || 1;
            const name = Name.length !== 0 ? Name[0].name.toLocaleLowerCase().replace(/\s/g, "") : false;

            if (this.CanonizeString) {
                switch (this.CanonizeString) {
                    case FirstAuthor:
                        this.state.searchbutton = AuthorFirst;
                        this.setState({ searchbutton: this.state.searchbutton });
                        break;
                    case LastAuthor:
                        this.state.searchbutton = AuthorLast;
                        this.setState({ searchbutton: this.state.searchbutton });
                        break;
                    case author:
                        this.state.searchbutton = Author;
                        this.setState({ searchbutton: this.state.searchbutton });
                        break;
                    case location:
                        this.state.searchbutton = Location;
                        this.setState({ searchbutton: this.state.searchbutton });
                        break;
                    case name:
                        this.state.searchbutton = Name;
                        this.setState({ searchbutton: this.state.searchbutton });
                        break;
                    default:
                        DialogAndroid.alert("Not Found", `${SearchTerm} is not found!`)
                }
            } else if (this.CanonizeNumber) {
                switch (this.CanonizeNumber) {
                    case reward:
                        this.state.searchbutton = Reward;
                        this.setState({ searchbutton: this.state.searchbutton });
                        break;
                    default:
                        DialogAndroid.alert("Not Found", `${SearchTerm} is not found!`)
                }
            }
        }
    }

    SearchQuery(ValueInSearchInput) {
        this.ValueInSearchInput = ValueInSearchInput;
        return SampleData.filter(this.SearchQueryFilter.bind(this)).map(this.SearchQueryMap.bind(this));
    }

    SearchQueryFilter(ValueInStorage) {
        if (/^[A-Za-z]+$/.test(this.ValueInSearchInput) || /^[a-zA-Z\s]*$/.test(this.ValueInSearchInput)) {
            this.CanonizeSearchString = this.ValueInSearchInput.toLowerCase().replace(/\s/g, "");

        }

        if (/^\d+$/.test(this.ValueInSearchInput) || /^[+-]?\d+(\.\d+)?$/.test(this.ValueInSearchInput)) {
            this.CanonizeSearchNumber = +this.ValueInSearchInput;
        }

        const first = ValueInStorage.author.first.toLowerCase().replace(/\s/g, "");
        const last = ValueInStorage.author.last.toLowerCase().replace(/\s/g, "");
        const FullName = `${first}${last}`;
        const location = ValueInStorage.location.toLowerCase().replace(/\s/g, "");
        const reward = +ValueInStorage.reward;
        const name = ValueInStorage.name.toLowerCase().replace(/\s/g, "");

        if (this.CanonizeSearchString == first) {
            return this.ValueInSearchInput;
        }
        if (this.CanonizeSearchString == last) {
            return this.ValueInSearchInput;
        }

        if (this.CanonizeSearchString == FullName) {
            return this.ValueInSearchInput;
        }

        if (this.CanonizeSearchString == location) {
            return this.ValueInSearchInput;
        }

        if (this.CanonizeSearchNumber == reward) {
            return this.ValueInSearchInput;
        }

        if ((this.CanonizeSearchString == name) || this.CanonizeSearchString == `${name}room`) {
            return this.ValueInSearchInput;
        }
    }

    SearchQueryMap(value, key) {

        if (this.state.deleted.length !== 0) {
            this.SearchQueryMapCondition = this.state.deleted.every(v => v != value.id);
        } else {
            this.SearchQueryMapCondition = true;
        }

        if (this.SearchQueryMapCondition) {
            return (
                <ListItem avatar key={key} style={{ backgroundColor: "#e4f7fd" }}>
                    <TouchableOpacity
                        onPress={() => this.InListButtonSearched(value)}
                        style={{ flex: 1, flexDirection: "row" }}>
                        <Left>
                            <Thumbnail source={value.image} />
                        </Left>
                        <Body>
                            <Text style={{ color: "#000000" }}>{`${value.author.first} ${value.author.last}`}</Text>
                            <Text note>
                                <Text style={{ fontWeight: "bold" }}>{value.name}</Text> room with
                                                    <Text style={{ fontWeight: "bold" }}>{" "}{value.reward} Pesos</Text>{" "}Bounty.{" "}
                                                    Starting on <Text style={{ fontWeight: "bold" }}>{`${value.date} ${value.day}`}{" "}</Text> at
                                                    <Text style={{ fontWeight: "bold" }}>{" "}{value.location}</Text>
                            </Text>
                        </Body>
                        <Right style={{ justifyContent: "center", alignItems: "center" }}>
                            <Button
                                transparent
                                style={{
                                    borderRadius: 100,
                                    elevation: 0,
                                    alignSelf: "center",
                                    margin: 5,
                                    padding: 5,
                                    backgroundColor: "#e4f7fd"
                                }}
                                onPress={() => this.InListButtonSearchedCleaned(value.id)}>
                                <LottieView
                                    source={require('../assets/animation/lottie/8489-clean.json')}
                                    style={{ width: 50, height: 50 }}
                                    ref={animation => {
                                        const translated = String.fromCharCode(97 + value.id);
                                        const object = {};
                                        object[translated] = animation;
                                        this.state.animation.push(object);
                                    }}
                                />
                            </Button>
                        </Right>
                    </TouchableOpacity>
                </ListItem>
            );
        }
    }

    InListButtonSearched(value) {
        DialogAndroid.alert(
            `${value.name} by ${value.author.last}`,
            `
                <h5>Description</h5>
                    <span>
                        ${value.description}
                    </span>
                <h5>Task</h5>
                    ${value.task.map((task) => {
                return (` ${task}`)
            })}
            `,
            {
                contentIsHtml: true
            }
        );
    }

    async InListButtonSearchedCleaned(key) {
        const translated = String.fromCharCode(97 + key);
        const animated = this.state.animation.filter(v => v[translated])[0][translated];
        try {
            animated.play();
            setTimeout(() => {
                animated.pause();
            }, 3000)
        } catch (e) {
            console.log(e.message);
        }

        this.state.deleted.push(key);
        this.setState({ deleted: this.state.deleted });
        const value = "" + key;
        await this.StoreData("deleted", value);
        // await AsyncStorage.clear();
    }

    async StoreData(key, value) {
        try {
            const object = await this.GetData(key);
            if (object != null) {
                const ParseObject = JSON.parse(object);
                ParseObject[value] = value;
                const StringObject = JSON.stringify(ParseObject);
                await AsyncStorage.setItem(key, StringObject);
            } else {
                const deleted = {};
                deleted[value] = value;
                const StringObject = JSON.stringify(deleted);
                await AsyncStorage.setItem(key, StringObject);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    async GetData(key) {
        try {
            const value = await AsyncStorage.getItem(key);
            if (value !== null) {
                return value;
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    async GetAllKeys() {
        let keys = [];
        try {
            keys = await AsyncStorage.getAllKeys();
        } catch (e) {

        }
        if (keys.length !== 0) {
            return keys;
        }
    }

    async RemoveValue(key) {
        try {
            this.state.history = [];
            this.setState({ history: this.state.history });
            await AsyncStorage.removeItem(key)
        } catch (e) {
            // remove error
        }
    }

    render() {
        return (
            <Container style={{ backgroundColor: "#e5f8f5" }}>
                <Header
                    androidStatusBarColor="#05dee2"
                    searchBar
                    rounded
                    style={{

                        backgroundColor: "#05dee2",
                        marginTop: "7.5%",
                        elevation: 0,
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center"
                    }}>
                    <Item>
                        <Icon name="search" />
                        <Input
                            onFocus={() => {
                                this.isFocused();
                            }}
                            onKeyPress={({ nativeEvent }) => {
                                if (nativeEvent.key === "Backspace") {
                                    this.isBackSpaced();
                                }
                            }}
                            autoFocus={true}
                            onSubmitEditing={this.state.cancelkeyboard}
                            placeholder="Search"
                            onChangeText={(value) => this.SearchEngineTerm(value)} />
                        <Icon name="ios-people" />
                    </Item>
                    <TouchableOpacity
                        style={{ padding: 5 }}
                        onPress={() => this.InButtonSearched()}>
                        <H3 style={{ color: "#ffffff" }}>Search</H3>
                    </TouchableOpacity>
                </Header>
                {this.state.expand && (
                    <Grid style={{ backgroundColor: "#e5f8f5" }}>
                        <Row style={{ flexDirection: "column" }}>
                            <List>
                                <ListItem itemHeader first>
                                    <Grid>
                                        <Col style={{ justifyContent: "center", alignItems: "center", padding: 5, margin: 5 }}>
                                            {
                                                this.state.history.length !== 0 ? (
                                                    <Text>Recent</Text>
                                                ) : (
                                                        <Text>New Explorer</Text>
                                                    )
                                            }
                                        </Col>
                                        <Col></Col>
                                        <Col style={{ justifyContent: "center", alignItems: "center", padding: 5, margin: 5 }}>
                                            <Button
                                                transparent
                                                style={{
                                                    borderRadius: 100,
                                                    elevation: 0,
                                                    alignSelf: "center"
                                                }}
                                                onPress={() => this.isFocusedExitButton()}>
                                                <LottieView
                                                    source={require('../assets/animation/lottie/13865-sign-for-error-flat-style.json')}
                                                    style={{ width: 50, height: 50 }}
                                                    ref={animation => {
                                                        this.SearchExit = animation;
                                                    }} />
                                            </Button>
                                        </Col>
                                    </Grid>
                                </ListItem>
                                {
                                    this.state.history.length !== 0 ? (
                                        <ListItem
                                            key="clean-history"
                                            style={{
                                                backgroundColor: "#e4f7fd",
                                                margin: 10,
                                                borderBottomWidth: 0
                                            }}>
                                            <TouchableOpacity
                                                style={{
                                                    flex: 1,
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                }}
                                                onPress={() => this.RemoveValue("history")}>
                                                <Text>Press here to clear history</Text>
                                            </TouchableOpacity>
                                        </ListItem>
                                    ) : <Text></Text>
                                }
                                {
                                    this.state.searchbutton.length !== 0 ?
                                        this.state.searchbutton.map(this.SearchQueryMap.bind(this))
                                        :
                                        this.state.search.map(this.SearchQuery.bind(this))
                                }
                                {
                                    this.state.history.length !== 0 ?
                                        this.state.history.map(this.SearchQuery.bind(this))
                                        :
                                        <Text></Text>
                                }
                            </List>
                        </Row>
                    </Grid>
                )}
                {!this.state.expand && (
                    <Content
                        padder
                        contentContainerStyle={{
                            backgroundColor: "#e5f8f5",
                            justifyContent: "center"
                        }}>
                        <Grid>
                            <Row style={{ justifyContent: "center", alignItems: "center", padding: 10 }}>
                                <Text>Popular in your location</Text>
                            </Row>
                        </Grid>
                        {
                            SampleData.map((value, key) => {
                                if ((value.location === "Paltic")) {
                                    return <Clean key={key} data={value} />;
                                }
                            })
                        }
                    </Content>
                )}

                <Footer>
                    <FooterTab style={{ backgroundColor: "#05dee2" }}>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" style={{ color: "#ffffff" }} />
                            <Text style={{ color: "#ffffff" }}>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" style={{ color: "#ffffff" }} />
                            <Text style={{ color: "#ffffff" }}>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge><Text>51</Text></Badge>
                            <Icon active name="navigate" style={{ color: "#ffffff" }} />
                            <Text style={{ color: "#ffffff" }}>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" style={{ color: "#ffffff" }} />
                            <Text style={{ color: "#ffffff" }}>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }

    async componentDidMount() {
        try {
            if (SampleData.length !== 0) {
                const data = SampleData.filter(v => v.cleaner > 20);
                data.forEach(v => {
                    console.log(v.cleaner);
                });
            }
            const value = await this.GetAllKeys();
            if (value.length !== 0) {
                const deleted = value.filter(v => v == "deleted")[0];
                const history = value.filter(v => v == "history")[0];
                if (deleted != null) {
                    const DeletedValue = await this.GetData(deleted);
                    JSON.parse(DeletedValue, (key, value) => {
                        if (typeof value == "string") {
                            this.state.deleted.push(value)
                            this.setState({ deleted: this.state.deleted });
                        }
                    });
                }

                if (history != null) {
                    const HistoryValue = await this.GetData(history);
                    JSON.parse(HistoryValue, (key, value) => {
                        if (typeof value == "string") {
                            this.state.history.push(value)
                            this.setState({ history: this.state.history });
                        }
                    });
                }
            } else {
                this.state.deleted = [];
                this.setState({ deleted: this.state.deleted });
            }
        } catch (e) {

        }
    }
}