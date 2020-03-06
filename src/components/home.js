import React from 'react';
import { View, Text, StyleSheet, Platform, FlatList } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { getToHome, initRestaurantDetails } from '../redux/actions';
import Restocard from './restoCard'

class Home extends React.Component {
    componentDidMount() {
        this.props.getToHome()
    }

    // ICON
    Icons = (icons, types, name) => {
        return (
            <View style={{ alignItems: 'center', width: '25%', marginVertical: 10 }}>
                <Icon
                    name={icons}
                    size={30}
                    type={types}
                    color='tomato'
                    containerStyle={{
                        borderWidth: 2,
                        borderColor: 'tomato',
                        borderRadius: 45,
                        width: 45,
                        height: 45,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                />
                <Text style={{ fontSize: 13 }}>{name}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <Header
                    rightComponent={{
                        text: `Hi,${this.props.user.username}`,
                        style: { color: 'white', fontSize: 18, fontWeight: '700' }
                    }}
                    leftComponent={{
                        icon: 'ticket-account',
                        color: 'white',
                        type: 'material-community'
                    }}
                    containerStyle={{
                        backgroundColor: 'tomato',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                    rightContainerStyle={{
                        flex: 3
                    }}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingTop: 10
                }}>
                    {this.Icons('credit-card', 'entypo', 'Credit')}
                    {this.Icons('food-variant', 'material-community', 'Variant')}
                    {this.Icons('food-fork-drink', 'material-community', 'Recipe')}
                    {this.Icons('location-pin', 'entypo', 'Location')}
                    {this.Icons('shopping-cart', 'font-awesome', 'Cart')}
                    {this.Icons('local-pizza', 'material', 'Pizza')}
                    {this.Icons('hamburger', 'material-community', 'Burger')}
                    {this.Icons('more-horizontal', 'feather', 'More')}
                </View>
                <FlatList
                    data={this.props.list.listPost}
                    renderItem={({ item }) => (
                        <View style={{ width: '50%' }}>
                            <Restocard data={item} />
                        </View>
                    )}
                    keyExtractor={item => item.restaurant.name}
                    style={{ width: '95%' }}
                    numColumns={2}
                    onRefresh={() => this.props.getToHome()}
                    refreshing={this.props.list.loading}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center'
    }
})



const mapStateToProps = ({ list, user }) => {
    return {
        list,
        user
    }
}

export default connect(mapStateToProps, { getToHome, initRestaurantDetails })(Home);