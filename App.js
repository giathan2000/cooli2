import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import AppNavigator from './navigation/AppNavigator'
import RNBootSplash from 'react-native-bootsplash'
export default class App extends React.Component {
    state = {
        isLoadingComplete: false,
    }

    componentDidMount = () => {
        try {
            const init = async () => {
                // …do multiple sync or async tasks
                this._loadResourcesAsync();
            };

            init().finally(async () => {
                await RNBootSplash.hide({ fade: true });
                this._handleFinishLoading();
            });
        } catch (error) {
            this._handleLoadingError(error)
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={false} />
                <AppNavigator />
            </View>
        )
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            () => {
                require('./assets/images/splash.png');
                require('./assets/images/icon.png');
            }
        ])
    }

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error)
    }

    _handleFinishLoading = () => {
        this.setState({ isLoadingComplete: true })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})
