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
} from 'react-native';
import {IMG_search, IMG_vector} from '../../../assets/images';
import {IMG_cart} from '../../../assets/images';
import {IMG_Scroll1, IMG_Scroll2} from '../../../assets/images';
import {IMG_Tym, IMG_History, IMG_Home, IMG_user} from '../../../assets/images';
import styles from './styles';
import UnderlineButton from '../../../components/UnderlineButton';
import CUSTOM_COLOR from '../../../constants/colors';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: 'Foods',
    };
  }
  render() {
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
          <TextInput
            placeholder="Search"
            hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}}
            placeholderTextColor={'black'}
            style={styles.searchInput}/>
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
              hitSlop = {this.props.hitSlop | undefined}>
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
              onPress={() => this.setState({select:'Drinks'})}
              hitSlop = {this.props.hitSlop | undefined}>
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
              onPress={() => this.setState({select:'Snacks'})}
              hitSlop = {this.props.hitSlop | undefined}>
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
              onPress={() => this.setState({select:'Sauce'})}
              hitSlop = {this.props.hitSlop | undefined}>
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
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.option}></TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Image source={IMG_Scroll1} style={styles.imageOption} />
              <Text style={styles.optionText1}>
                {'Veggie \ntomato mix'}
              </Text>
              <Text style={styles.optionText2}>{'N1,900'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option}>
              <Image source={IMG_Scroll2} style={styles.imageOption} />
              <Text style={styles.optionText1}>{'Spicy fish\nsauce'}</Text>
              <Text style={styles.optionText2}>{'N2,300.99'}</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <></>
        {/* Tools */}
        <View style = {styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Image source={IMG_Home} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
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
