import {Component} from 'react';
import React from 'react';
import {
  SafeAreaView,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {IMG_search, IMG_vector} from '../../../assets/images';
import {IMG_cart} from '../../../assets/images';
import {IMG_Scroll1, IMG_Scroll2} from '../../../assets/images';
import {IMG_Tym, IMG_History, IMG_Home, IMG_user} from '../../../assets/images';
import styles from './styles';
import UnderlineButton from '../../../components/UnderlineButton';
import CUSTOM_COLOR from '../../../constants/colors';
import APIUtils from '../../../../utils/apiUtils';
const Max = 50;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'Foods',
      data: [],
    };
  }
  componentDidMount = () =>{
    APIUtils.get('/product').then(
      response => this.setState({select: this.state.select, data: response.data})
    )
  }
  render() {
    const Item = props => (
      <TouchableOpacity
        style={styles.option}
        onPress = {() => this.props.navigation.navigate('ProductDetail',{...props})}>
        <Image source={{uri: props.Pic1}} style={styles.imageOption}/>
        <Text style={styles.optionText1}>{props.name}</Text>
        <Text style={styles.optionText2}>{props.price}</Text>
      </TouchableOpacity>
    );
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <></>
        {/* Logo1 */}
        <TouchableOpacity
          style={styles.vectorContainer}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => this.props.navigation.openDrawer()}>
          <Image source={IMG_vector} />
        </TouchableOpacity>
        <></>
        {/* Logo2 */}
        <TouchableOpacity
          style={styles.cartContainer}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => {
            console.log(this.props);
            this.props.navigation.navigate('Orders');
          }}>
          <Image source={IMG_cart} style={{opacity: 0.5}} />
        </TouchableOpacity>
        <></>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
        </View>
        <></>
        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Image source={IMG_search} style={styles.searchImage} />
          <TouchableOpacity
            style={styles.searchInput}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('Search');
            }}>
            <Text style={{color: CUSTOM_COLOR.Black, opacity: 0.5}}>
              Search{' '}
            </Text>
          </TouchableOpacity>
        </View>
        <></>
        {/* Type of food */}
        <View style={styles.typeContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <UnderlineButton
              style={styles.type}
              underlineStyle={[
                styles.underline,
                {
                  backgroundColor:
                    this.state.select == 'Foods'
                      ? CUSTOM_COLOR.SunsetOrange
                      : 'transparent',
                },
              ]}
              onPress={() => this.setState({select: 'Foods'})}
              hitSlop={this.props.hitSlop | undefined}>
              <Text
                style={{
                  alignSelf: 'center',
                  color:
                    this.state.select == 'Foods'
                      ? CUSTOM_COLOR.SunsetOrange
                      : CUSTOM_COLOR.Manatee,
                }}>
                {'Foods'}
              </Text>
            </UnderlineButton>
            <UnderlineButton
              style={styles.type}
              underlineStyle={[
                styles.underline,
                {
                  backgroundColor:
                    this.state.select == 'Drinks'
                      ? CUSTOM_COLOR.SunsetOrange
                      : 'transparent',
                },
              ]}
              onPress={() => this.setState({select: 'Drinks'})}
              hitSlop={this.props.hitSlop | undefined}>
              <Text
                style={{
                  alignSelf: 'center',
                  color:
                    this.state.select == 'Drinks'
                      ? CUSTOM_COLOR.SunsetOrange
                      : CUSTOM_COLOR.Manatee,
                }}>
                {'Drinks'}
              </Text>
            </UnderlineButton>
            <UnderlineButton
              style={styles.type}
              underlineStyle={[
                styles.underline,
                {
                  backgroundColor:
                    this.state.select == 'Snacks'
                      ? CUSTOM_COLOR.SunsetOrange
                      : 'transparent',
                },
              ]}
              onPress={() => this.setState({select: 'Snacks'})}
              hitSlop={this.props.hitSlop | undefined}>
              <Text
                style={{
                  alignSelf: 'center',
                  color:
                    this.state.select == 'Snacks'
                      ? CUSTOM_COLOR.SunsetOrange
                      : CUSTOM_COLOR.Manatee,
                }}>
                {'Snacks'}
              </Text>
            </UnderlineButton>
            <UnderlineButton
              style={styles.type}
              underlineStyle={[
                styles.underline,
                {
                  backgroundColor:
                    this.state.select == 'Sauce'
                      ? CUSTOM_COLOR.SunsetOrange
                      : 'transparent',
                },
              ]}
              onPress={() => this.setState({select: 'Sauce'})}
              hitSlop={this.props.hitSlop | undefined}>
              <Text
                style={{
                  alignSelf: 'center',
                  color:
                    this.state.select == 'Sauce'
                      ? CUSTOM_COLOR.SunsetOrange
                      : CUSTOM_COLOR.Manatee,
                }}>
                {'Sauce'}
              </Text>
            </UnderlineButton>
          </ScrollView>
        </View>
        <></>
        {/* Big ScrollView */}
        <View style={styles.scrollContainer}>
          <TouchableOpacity
            style={styles.moreContainer}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Text style={styles.seeMore}>{'see more'}</Text>
          </TouchableOpacity>
          <FlatList
            style={{backgroundColor: CUSTOM_COLOR.WhiteSmoke}}
            data={this.state.data}
            renderItem={({item}) => (
              <Item {...item}/>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <></>
        {/* Tools */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Image source={IMG_Home} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('ProductDetail');
            }}>
            <Image source={IMG_Tym} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Image source={IMG_user} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              console.log(this.props);
              this.props.navigation.navigate('History');
            }}>
            <Image source={IMG_History} style={{opacity: 0.5}} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
