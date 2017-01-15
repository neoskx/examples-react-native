/**
 * Created by shaokexu on 1/15/17.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class MyScene extends Component{
    constructor(props){
        super(props);
    }

    static get defaultProps(){
        return {
            title: "My Scene"
        }
    }

    render(){
        return (
            <View style={{padding:40}}>
                <Text>{this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Touch me to forward</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Touch me to back</Text>
                </TouchableHighlight>
            </View>
        )
    }

}

MyScene.propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
};
