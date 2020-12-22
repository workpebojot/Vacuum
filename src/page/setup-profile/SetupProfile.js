import * as React from 'react';
import * as Library from '../../abstract-library';
import * as Data from '../../abstract-data';

export default class SetupProfile extends React.Component {

    state = {
        imagePath: require('../../assets/images/1-demo-user.png'),
        isLoading: false,
        selected: "Select Location",
    }

    OnPickLocation(value, index) {
        this.setState({ selected: value });
    }

    chooseFile = () => {
        this.setState({ status: '' });
        const options = {
            title: 'Select Image',
            storageOptions: {
                path: 'images',
            },
        };
        Library.PickImage.showImagePicker(options, response => {
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
        Library.DialogAndroid.alert("",
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
            <Library.Base.Container style={{ backgroundColor: "#05dee2" }}>
                <Library.Base.Header
                    androidStatusBarColor="#05dee2"
                    noLeft
                    transparent>
                    <Library.Base.Left style={{ flex: 1, margin: 10 }}>
                    </Library.Base.Left>
                    <Library.Base.Body style={{ flex: 1 }}>
                        <Library.Base.Button transparent block>
                            <Library.Base.Title>Setup</Library.Base.Title>
                        </Library.Base.Button>
                    </Library.Base.Body>
                    <Library.Base.Right style={{ flex: 1, margin: 10 }}>

                    </Library.Base.Right>
                </Library.Base.Header>
                <Library.Base.Content padder>
                    <Library.Base.Card transparent style={{ borderRadius: 10, padding: 10, backgroundColor: "#e5f8f5" }}>
                        <Library.Base.CardItem style={{ borderRadius: 10, padding: 10, flexDirection: "column" }}>
                            <Library.Box.Grid>
                                <Library.Box.Col style={{ backgroundColor: "#e4f7fd", padding: 10, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
                                    <Library.Box.Row></Library.Box.Row>
                                    <Library.Box.Row>
                                        <Library.Box.Col></Library.Box.Col>
                                        <Library.Native.Image
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
                                        <Library.Box.Col style={{ flexDirection: "column-reverse" }}>
                                            <Library.Base.Button
                                                transparent
                                                style={{
                                                    marginLeft: -80,
                                                    borderRadius: 100,
                                                    elevation: 0
                                                }}
                                                onPress={this.chooseFile}>
                                                <Library.Base.Icon type="AntDesign" style={{ fontSize: 50, color: "#05dee2", backgroundColor: "#ffffff", borderRadius: 100 }} name="pluscircle" />
                                            </Library.Base.Button>
                                        </Library.Box.Col>
                                    </Library.Box.Row>
                                    <Library.Box.Row></Library.Box.Row>
                                </Library.Box.Col>
                            </Library.Box.Grid>
                            <Library.Base.Body style={{ padding: 10, backgroundColor: "#e4f7fd", borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}>
                                <Library.Base.Item inlineLabel style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                    <Library.Base.Label>First Name</Library.Base.Label>
                                    <Library.Base.Input maxLength={20} />
                                </Library.Base.Item>
                                <Library.Base.Item inlineLabel last style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#fcc4c3", borderBottomWidth: 3 }}>
                                    <Library.Base.Label>Last Name</Library.Base.Label>
                                    <Library.Base.Input maxLength={20} />
                                </Library.Base.Item>
                                <Library.Box.Grid>
                                    <Library.Box.Col>
                                        <Library.Base.Item picker style={{ backgroundColor: "#e5f8f5", borderBottomColor: "#05dee2", borderBottomWidth: 3 }}>
                                            <Library.Base.Icon name='md-location-outline' />
                                            <Library.Base.Picker
                                                mode="dialog"
                                                style={{ width: undefined }}
                                                selectedValue={this.state.selected}
                                                onValueChange={(v, i) => { this.OnPickLocation(v, i) }}>
                                                {
                                                    Data.Data.location.map((v) => (
                                                        <Library.Base.Picker.Item key={v} label={v} value={v} />
                                                    ))
                                                }

                                            </Library.Base.Picker>
                                            <Library.Base.Icon onPress={this.ShowDialogAndroidLocationInfo} name='information-circle' />
                                        </Library.Base.Item>
                                    </Library.Box.Col>
                                </Library.Box.Grid>
                                <Library.Base.Text>
                                    {'\n'}
                                </Library.Base.Text>
                                <Library.Base.Button
                                    rounded
                                    block
                                    onPress={() => Library.Nav.push(this.props.componentId, {
                                        component: {
                                            name: "SelectTask",
                                            passProps: {
                                                props: this.props
                                            }
                                        }
                                    })}
                                    style={{ backgroundColor: "#05dee2", elevation: 0 }}>
                                    <Library.Base.H3 style={{ color: "#FFFFFF" }}>Ready!</Library.Base.H3>
                                </Library.Base.Button>
                            </Library.Base.Body>
                        </Library.Base.CardItem>
                    </Library.Base.Card>
                </Library.Base.Content>
            </Library.Base.Container>
        );
    }

    componentDidMount() {
        Library.Native.BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        Library.Native.BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => {
        return true;
    }
}