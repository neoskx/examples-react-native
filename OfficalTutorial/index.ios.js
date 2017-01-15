/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    ScrollView,
    ListView,
    Navigator
} from 'react-native';

import MyScene from './MyScene';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        )
    }
}

class BlinkText extends Component {
    constructor(props) {
        super();
        this.state = {showText: false};
        setInterval(() => {
            this.setState({
                showText: !this.state.showText
            });
        }, 1000)
    }

    render() {
        let text = this.state.showText ? this.props.text : "";
        return (
            <Text>{text}</Text>
        )
    }
}

class FixedDimensionsBasics extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>
                <View style={{width: 50, height:50, backgroundColor: 'powderblue'}}/>
                <View style={{width: 50, height:50, backgroundColor: 'skyblue'}}/>
                <View style={{width: 50, height:50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

class PizzaTranslator extends Component{
    constructor(props){
        super(props);
        this.state = {text:''};
    }

    render(){
        return (
            <View style={{padding:10}}>
                <TextInput
                    placeholder="Please type translate text"
                    style={{
                        height:40,
                        padding: 10
                    }}
                    onChangeText={(text)=>this.setState({text})}
                >
                </TextInput>
                <Text>
                    {this.state.text.split(' ').map((word)=>{
                        return word&&'Pizza';
                    }).join(' ')}
                </Text>
            </View>
        )
    }
}

class FirstScrollView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 90}}>
                    Just for test
                </Text>
                <Image source={require('./img/favicon.png')}></Image>
                <Text style={{fontSize: 90}}>
                    Just for test
                </Text>
                <Image source={require('./img/favicon.png')}></Image>
                <Text style={{fontSize: 90}}>
                    Just for test
                </Text>
                <Image source={require('./img/favicon.png')}></Image>

            </ScrollView>
        )
    }
}

class FirstListView extends Component{
    constructor(props){
        super(props);
        // initial data source instance
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2)=> r1!=r2 });
        // initial data to data source
        this.state = {
            dataSource: ds.cloneWithRows(['John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin','John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'])
        }
    }

    render(){
        return (
            <View style={{padding: 20}}>
                <ListView
                 dataSource={this.state.dataSource}
                renderRow={(rowData) => <Text>{rowData}</Text>}
                ></ListView>
            </View>
        )
    }
}

class FirstNavigator extends Component{
    render(){
        return (
            <Navigator
                initialRoute={{title: 'My First Router', index: 0}}
                renderScene={ (router, navigator)=>
                    <MyScene
                        title={router.title}
                        // function called when new scene added
                        onForward= {()=>{
                            let index = router.index;
                            index++;
                            navigator.push({
                                title: "Scene "+index,
                                index: index
                            });
                        }}
                        // function called when scene pop
                        onBack= {()=>{
                            if(router.index>0){
                                navigator.pop();
                            }
                        }}
                    /> }
            >
            </Navigator>
        )
    }
}

export default class OfficalTutorial extends Component {
    render() {
        return (
            <FirstNavigator></FirstNavigator>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('OfficalTutorial', () => OfficalTutorial);
