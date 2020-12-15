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
import { Navigation } from 'react-native-navigation';

import AsyncStorageMethod from './../utilities/method/async-storage';
import SampleData from '.././data/sample-data';
import Clean from './../type/clean';
import TopicDescriptionAndTaskDialog from './../utilities/topic-description-and-task-dialog';
import HomeFooter from '../utilities/home-footer';

UIManager.setLayoutAnimationEnabledExperimental(true);

export default class FindJob extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state
        }
        this.storage = new AsyncStorageMethod();
    }

    state = {
        search: [],
        expand: false,
        searchbutton: [],
        deleted: [],
        history: [],
        cancelkeyboard: Keyboard.dismiss,
        location: ""
    }

    deleted(key) {
        if (this.state.deleted !== undefined) {
            this.state.deleted.push(key);
            this.setState({ deleted: this.state.deleted }, () => {
                console.log(this.state.deleted);
            });
        }
    }

    SearchEngineTerm(value) {
        this.state.search[0] = value;
        this.setState({ search: this.state.search });
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
                await this.storage.StoreData("history", SearchTerm);
            }

            if (/^\d+$/.test(SearchTerm) || /^[+-]?\d+(\.\d+)?$/.test(SearchTerm)) {
                if (+SearchTerm === 0) {
                    this.CanonizeNumber = 1;
                    console.log("History: ", SearchTerm);
                    await this.storage.StoreData("history", "" + SearchTerm);
                } else {
                    this.CanonizeNumber = +SearchTerm;
                    console.log("History: ", SearchTerm);
                    await this.storage.StoreData("history", "" + SearchTerm);
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
                    <TopicDescriptionAndTaskDialog
                        deleted={this.deleted.bind(this)}
                        value={value} />
                </ListItem>
            );
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
                            autoFocus={false}
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
                                                onPress={() => this.storage.RemoveValue("history")}>
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
                                <Text>{this.state.location == "" ? "Loading..." : `Popular in ${this.state.location}`}</Text>
                            </Row>
                        </Grid>
                        {
                            SampleData.map((value, key) => {
                                if (this.state.deleted.length !== 0) {
                                    this.PopularTopicCondition = this.state.deleted.every(v => v != value.id);
                                } else {
                                    this.PopularTopicCondition = true;
                                }
                                if (this.PopularTopicCondition) {
                                    if ((value.location === "Paltic")) {
                                        const page = "Find Job";
                                        this.state.location = value.location;
                                        return <Clean
                                            page={page}
                                            deleted={this.deleted.bind(this)}
                                            key={key}
                                            data={value} />;
                                    }
                                }
                            })
                        }
                    </Content>
                )}

                <HomeFooter {...this.props} page="Find Job" />
            </Container>
        );
    }

    async componentDidMount() {
        try {
            this.setState({ page: "Find Job" });
            if (SampleData.length !== 0) {
                // await this.storage.Clear();
                const data = SampleData.filter(v => v.cleaner > 20);
                data.forEach(v => {
                    console.log(v.cleaner);
                });
            }
            const value = await this.storage.GetAllKeys();
            if (value.length !== 0) {
                const deleted = value.filter(v => v == "cleaning")[0];
                const history = value.filter(v => v == "history")[0];
                if (deleted != null) {
                    const DeletedValue = await this.storage.GetData(deleted);
                    JSON.parse(DeletedValue, (key, value) => {
                        if (typeof value == "string") {
                            this.state.deleted.push(value)
                            this.setState({ deleted: this.state.deleted });
                        }
                    });
                }

                if (history != null) {
                    const HistoryValue = await this.storage.GetData(history);
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