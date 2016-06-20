import React, { Component } from 'react';
import  { Text, View, AppRegistry, StyleSheet, TouchableHighlight } from 'react-native';

class stopwatch extends Component{
    constructor(props){
        super(props);
        this.state = {
            timeElapsed: null,
            running: false,
            startTime: '',
            firstTime: true
        }
    }
    render(){
        return (
            <View style={styles.stopwatchText}>
                <View style={[styles.header, this.border('yellow')]}>
                    <View style={[styles.timerWrapper, this.border('red')]}>
                        <Text>
                            { this.state.timeElapsed }
                        </Text>
                    </View>
                    <View style={[styles.buttonWrapper, this.border('green')]}>
                        {this.startStopButton()}
                        {this.lapButton()}
                    </View>
                </View>
                <View style={[styles.footer, this.border('blue')]}>
                    <Text>
                        I am a list of props
                    </Text>
                </View>
            </View>
        )
    }
    startStopButton(){
        return (
            <TouchableHighlight onPress={() => this.handleStartPress()} underlayColor='grey'>
                <Text>
                    {this.state.running ? 'Stop' : 'Start'}
                </Text>
            </TouchableHighlight>
        )
    }
    handleStartPress(){
        if(this.state.running){
            clearInterval(this.interval);
            this.setState({ running: !this.state.running })
            return;
        }
        if(this.state.firstTime){
            this.state.startTime = new Date();
            this.setState({ firstTime: false })
        }
        this.interval = setInterval(() => {
            this.setState({
                timeElapsed: new Date() - this.state.startTime
            })
        }, 30)
        this.setState({ running: !this.state.running })
    }
    lapButton(){
        return (
            <View>
                <Text>
                    Lap
                </Text>
            </View>
        )
    }
    border(color){
        return {
            borderColor: color,
            borderWidth: 4
        }
    }
}

var styles = StyleSheet.create({
    stopwatchText: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    header: {
        flex: 1
    },
    footer: {
        flex: 1
    },
    timerWrapper: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})

AppRegistry.registerComponent('stopwatch', () => stopwatch);
