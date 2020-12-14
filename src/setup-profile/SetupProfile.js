import * as React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Left,
    Right,
    Body,
    Card,
    Text,
    CardItem,
    Item,
    Icon,
    Label,
    Input,
    H3,
    Picker
} from 'native-base';
import { BackHandler, Image, Pressable } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Navigation } from 'react-native-navigation';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-picker';
import Location from '.././data/location-data';
import DialogAndroid from 'react-native-dialogs';

export default class SetupProfile extends React.Component {

    state = {
        imagePath: require('.././assets/images/1-demo-user.png'),
        isLoading: false,
        selected: "Select Location",
    }

    OnPickLocation(value, index) {
        this.setState({
            selected: value
        }, () => {
            if (index != 0) {
                console.log(this.state.selected, index);
            }
        });
    }

    chooseFile = () => {
        this.setState({ status: '' });
        var options = {
            title: 'Select Image',
            storageOptions: {
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('Cancelled');
            } else if (response.error) {
                console.log('Error: ', response.error);
            } else {
                let path = response.path
                let fileName = this.getFileName(response.fileName, path);
                this.setState({ imagePath: path });
                this.uploadImageToStorage(path, fileName);
            }
        });
    };

    getFileName(name, path) {
        if (name != null) { return name; }
        return path.split("/").pop();
    }

    uploadImageToStorage(path, name) {
        this.setState({ isLoading: true });
        let reference = storage().ref(`user/image/${name}`);
        let task = reference.putFile(path);
        task.then(() => {
            console.log('Uploaded');
            this.setState({ isLoading: false });
        }).catch((e) => {
            console.log('uploading image error => ', e);
            this.setState({ isLoading: false });
        });
    }

    getPlatformURI(imagePath) {
        let imgSource = imagePath;
        if (isNaN(imagePath)) {
            imgSource = { uri: this.state.imagePath };
            imgSource.uri = "file:///" + imgSource.uri;
        }
        return imgSource;
    }

    ShowDialogAndroidLocationInfo() {
        DialogAndroid.alert("",
            `<b>Why is your location not here?</b>
             So far, only a few locations are available here in vacuum application`,
            {
                contentIsHtml: true
            }
        );
    }

    render() {
        let { imagePath } = this.state;
        let imgSource = this.getPlatformURI(imagePath);
        return (
            <Container style={{ backgroundColor: "#05dee2" }}>
                <Header
                    androidStatusBarColor="#05dee2"
                    noLeft
                    transparent>
                    <Left style={{ flex: 1, margin: 10 }}>

                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Button transparent block>
                            <Title>Setup</Title>
                        </Button>
                    </Body>
                    <Right style={{ flex: 1, margin: 10 }}>

                    </Right>
                </Header>
                <Content padder>
                    <Card transparent style={{ borderRadius: 10, padding: 10, backgroundColor: "#e5f8f5" }}>
                        <CardItem style={{ borderRadius: 10, padding: 10, flexDirection: "column" }}>
                            <Grid>
                                <Col style={{ backgroundColor: "#e4f7fd", padding: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Row></Row>
                                    <Row>
                                        <Col></Col>
                                        <Image
                                            style={{
                                                width: 200,
                                                height: 200,
                                                borderRadius: 100,
                                                borderColor: this.state.isLoading ? "#fcc4c3" : "#e5f8f5",
                                                borderWidth: 4
                                            }}
                                            blurRadius={this.state.isLoading ? 5 : 0}
                                            source={imgSource}
                                        />
                                        <Col style={{ flexDirection: "column-reverse" }}>
                                            <Button
                                                transparent
                                                style={{
                                                    marginLeft: -80,
                                                    borderRadius: 100,
                                                    elevation: 0
                                                }}
                                                onPress={this.chooseFile}>
                                                <Icon type="AntDesign" style={{ fontSize: 50, color: "#05dee2", backgroundColor: "#ffffff", borderRadius: 100 }} name="pluscircle" />
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row></Row>
                                </Col>
                            </Grid>
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
                                            <Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.selected}
                                                onValueChange={(v, i) => { this.OnPickLocation(v, i) }}>
                                                {
                                                    Location.map((v) => (
                                                        <Picker.Item key={v} label={v} value={v} />
                                                    ))
                                                }

                                            </Picker>
                                            <Icon onPress={this.ShowDialogAndroidLocationInfo} name='information-circle' />
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
                                            name: "SelectTask",
                                            passProps: {
                                                props: this.props
                                            }
                                        }
                                    })}
                                    style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <H3 style={{ color: "#FFFFFF" }}>Ready!</H3>
                                </Button>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }

    /* componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    } */
}