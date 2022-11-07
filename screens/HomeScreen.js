import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

class HomeScreen extends React.Component {

    arrImage = [
        {
            pic: 'https://cdn.lorem.space/images/movie/.cache/150x220/wonder-woman-2.jpg',
            title: 'Charlie, 32',
            caption: '24 miles away',
        },
        {
            pic: 'https://cdn.lorem.space/images/movie/.cache/150x220/wonder-woman-2.jpg',
            title: 'Monica, 35',
            caption: '19 miles away',
        }]
    // {
    //   pic: require('https://picsum.photos/452/680'),
    //   title: 'Charlie, 32',
    //   caption: '24 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women4.jpg'),
    //   title: 'Mary, 23',
    //   caption: '45 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women5.jpg'),
    //   title: 'Lucy, 27',
    //   caption: '32 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women6.jpg'),
    //   title: 'Rachel, 29',
    //   caption: '30 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women7.jpg'),
    //   title: 'Ava, 31',
    //   caption: '14 miles away',
    // },
    // {
    //   pic: require('../assets/images/women/women8.jpg'),
    //   title: 'Monica, 35',
    //   caption: '19 miles away',
    // },

    componentDidMount(){
        console.log(this.arrImage)
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    onSwiped = () => {
        var obj = HomeScreenPics[this.getRandomInt(0,HomeScreenPics.length - 1)];
        this.arrImage.push(
            obj
        );
        console.log(obj);
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Swiper
                    cards={this.arrImage}
                    renderCard={Card}
                    infinite
                    backgroundColor="white"
                    cardHorizontalMargin={0}
                    stackSize={1}
                    onSwiped={this.onSwiped}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
})

export default HomeScreen
