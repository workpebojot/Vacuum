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
    ListItem
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
    TextInput,
    Image,
    TouchableOpacity,
    LayoutAnimation,
    UIManager
} from 'react-native';
import SampleData from '.././data/sample-data';

UIManager.setLayoutAnimationEnabledExperimental(true);

export default class FindJob extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            search: []
        }
    }

    state = {
        search: [],
        expand: false
    }

    SearchTerm(value) {
        this.state.search.push(value);
        this.setState({ search: this.state.search }, () => {
            console.log(this.state.search)
        });
    }

    isFocused(focused) {
        LayoutAnimation.configureNext(
            {
                duration: 700,
                create: { type: 'linear', property: 'opacity' },
                update: { type: 'spring', springDamping: 0.4 },
                delete: { type: 'linear', property: 'opacity' }
            }
        )
        if (focused) {
            this.setState({ expand: true });
        } else {
            this.setState({ expand: false }, () => {
                this.state.search = [];
                console.log(this.state.search);
            });
        }
    }

    InButtonSearched() {
        // Search Term
        const SearchTerm = this.state.search.pop();
        // Search Author
        const Author = SampleData.filter((value) => value.author == SearchTerm) || 1;
        const author = Author.length !== 0 ? Author[0].author : false;
        // Search Location
        const Location = SampleData.filter((value) => value.location == SearchTerm) || 1;
        const location = Location.length !== 0 ? Location[0].location : false;
        // Search Reward
        const Reward = SampleData.filter((value) => value.reward == SearchTerm) || 1;
        const reward = Reward.length !== 0 ? Reward[0].reward : false;
        // Search Name
        const Name = SampleData.filter((value) => value.name == SearchTerm) || 1;
        const name = Name.length !== 0 ? Name[0].name : false;

        switch (SearchTerm) {
            case author:
                console.log(Author);
                break;
            case location:
                console.log(Location);
                break;
            case reward:
                console.log(Reward);
                break;
            case name:
                console.log(Name);
                break;
            default:
                console.log("Not found! :((");
        }
    }

    InButtonSearchedQuery(author) {
        console.log(author)
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
                                this.isFocused(true);
                            }}
                            onBlur={() => {
                                this.isFocused(false);
                            }}
                            autoFocus={true}
                            placeholder="Search"
                            onChangeText={(value) => this.SearchTerm(value)} />
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
                        <Row style={{ marginTop: -8 }}>
                            <List>
                                <ListItem itemHeader first>
                                    <Text>Recent</Text>
                                </ListItem>
                                {
                                    this.state.search.map((value, key) => (
                                        <ListItem key={key}>
                                            <Text>{value}</Text>
                                        </ListItem>
                                    )).reverse()
                                }
                            </List>
                        </Row>
                    </Grid>
                )}
                <Content
                    padder
                    contentContainerStyle={{
                        backgroundColor: "#e5f8f5",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        display: this.state.expand ? "none" : "flex"
                    }}>
                    {/* <Card transparent style={{ borderRadius: 10, padding: 10, backgroundColor: "#e5f8f5" }}>
                        <CardItem style={{ borderRadius: 10, padding: 10, flexDirection: "column" }}>
                            <Body style={{ padding: 10, backgroundColor: "#e4f7fd", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <Item inlineLabel style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                    <Label>First Name</Label>
                                    <Input maxLength={20} />
                                </Item>
                                <Item inlineLabel last style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#fcc4c3", borderBottomWidth: 3 }}>
                                    <Label>Last Name</Label>
                                    <Input maxLength={20} />
                                </Item>
                                <Grid>
                                    <Col>
                                        <Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                            <Icon name='md-location-outline' />
                                            <Icon name='information-circle' />
                                        </Item>
                                    </Col>
                                </Grid>
                                <Text>
                                    {'\n'}
                                </Text>
                                <Button
                                    rounded
                                    block
                                    onPress={() => Navigation.push(this.props.componentId, {
                                        component: {
                                            name: "SelectTask"
                                        }
                                    })}
                                    style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <H3 style={{ color: "#FFFFFF" }}>Ready!</H3>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card> */}
                </Content>
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
}

/* <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search" />
                        <Input placeholder="Search" />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content />
                <Footer>
                    <FooterTab>
                        <Button badge vertical>
                            <Badge><Text>2</Text></Badge>
                            <Icon name="apps" />
                            <Text>Apps</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="camera" />
                            <Text>Camera</Text>
                        </Button>
                        <Button active badge vertical>
                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />
                            <Text>Navigate</Text>
                        </Button>
                        <Button vertical>
                            <Icon name="person" />
                            <Text>Contact</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container> */


/* <Grid>
    <Row size={20} style={{ justifyContent: "center", flexDirection: "column", alignContent: "center" }}>
        <Row style={{ backgroundColor: "pink", height: 50 }}>
            <Text>A</Text>
        </Row>
        <Row style={{ backgroundColor: "pink", justifyContent: "center", alignItems: "center", height: 50 }}>
            <Title>Vacuum</Title>
        </Row>
        <Row style={{ backgroundColor: "gray", height: 50, elevation: 1, shadowColor: "#ffffff" }}>
            <Col size={10} style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name="md-search-outline" />
            </Col>
            <Col size={80} style={{ justifyContent: "center" }}>
                <TextInput placeholder="Hello" style={{ borderColor: "red", borderWidth: 3 }} />
            </Col>
            <Col size={10} style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name="md-people-outline" />
            </Col>
        </Row>
    </Row>
    <Row size={70} style={{ backgroundColor: "pink" }}>
        <Text>
            B
        </Text>
    </Row>
    <Row size={10} style={{ backgroundColor: "red" }}>
        <Text>
            C
        </Text>
    </Row>
</Grid> */