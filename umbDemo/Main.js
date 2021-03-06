/**
 * UMB Demo - Damascus Edge - The Forge
 * https://github.com/justchad/geha_blueberry_demo
 * @flow
 */

'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  AsyncStorage,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';


//Dimensions and Calculated Heights

var {height, width}     = Dimensions.get('window');
var headerHeight        = 85 - 25;
var footerHeight        = 70 - 1;
var calculatedHeight    = height - headerHeight - footerHeight;
var contentHeight       = calculatedHeight;
var divider             = 50;
var paddedWidth         = width - 20;

//Colors and Color Sets

//Color Pallete
var baseColor           = "'rgba(29,136,202,1)'";
var secondaryColor      = "'rgba(39,39,39,1)'";
var tertiaryColor       = "'rgba(142,179,221,1)'";
var light               = "'rgba(239,241,243,1)'";
var dark                = "'rgba(105,103,115,1)'";
var gray                = "'rgba(239,245,247,1)'";
var grayTwo             = "'rgba(231,233,238,1)'";
//Dark Set
var baseTextDark        = "'rgba(0,0,0,1)'";
var primaryTextDark     = "'rgba(0,0,0,0.87)'";
var secondaryTextDark   = "'rgba(0,0,0,0.54)'";
var disabledTextDark    = "'rgba(0,0,0,0.38)'";
var dividersDark        = "'rgba(0,0,0,0.12)'";
var iconsActiveDark     = "'rgba(29,136,202,1)'";
var iconsInactiveDark   = "'rgba(148,147,147,1)'";
//Light Set
var baseTextLight       = "'rgba(255,255,255,1)'";
var primaryTextLight    = "'rgba(255,255,255,1)'";
var secondaryTextLight  = "'rgba(255,255,255,0.7)'";
var disabledTextLight   = "'rgba(255,255,255,0.5)'";
var dividersLight       = "'rgba(255,255,255,0.12)'";
var iconsActiveLight    = "'rgba(255,255,255,1)'";
var iconsInactiveLight  = "''rgba(255,255,255,0.5)'";

//Typography

//Sizes
var p                   = 14;
var h1                  = 30;
var h2                  = 28;
var h3                  = 26;
var h4                  = 22;
var h5                  = 20;
var h6                  = 18;

class Main extends Component {
  
  navigate(routeName) {
    this.props.navigator.push({
      name: routeName
    });
  }
  
  render() {
    return (
    <View style={styles.wrapper}>
        
        <View style={styles.headerwrapper}>
            <View style={styles.headernavigation}>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.titlebutton}>
                        <Text style={styles.headertitle}>CVS</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
      
        <View style={styles.contentwrapper}>
      
            <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.button}>
                <Text style={styles.welcome}>Hello! I'm Your New App!</Text>
            </TouchableHighlight>
            
            <Text style={styles.p}>This is where we are going to drop our proximity technology! We are going to add a response, aware and detect state.</Text>
            
            <Text style={styles.p}>Click around to tour your new application! Have a peek at your NEAR FUTURE! Have Fun!</Text>
        
        </View>

        <View style={styles.footerwrapper}>
            <View style={styles.footernavigation}>
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Currentstore') } style={styles.buttonbottom}>
                        <Image
                            style = {styles.imageicon}
                            source = {require('./images/currentstoreIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Items') } style={styles.buttonbottom}>
                        <Image
                            style = {styles.imageicon}
                            source = {require('./images/itemsIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Main') } style={styles.buttonbottom}>
                        <Image
                            style = {styles.imageicon}
                            source = {require('./images/helpmeplanIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Exit') } style={styles.buttonbottom}>
                        <Image
                            style = {styles.imageicon}
                            source = {require('./images/historyIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonWrap}>
                    <TouchableHighlight onPress={ this.navigate.bind(this, 'Receipt') } style={styles.buttonbottom}>
                        <Image
                            style = {styles.imageicon}
                            source = {require('./images/receiptIcon.png')}
                        />
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        
    </View>
    );
  }
}

const styles = StyleSheet.create({
  p: {
    fontSize: p,
    marginBottom: 10,
  },
  wrapper: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: baseColor,
    width: width,
    height: headerHeight,
    borderBottomWidth: 1,
    borderBottomColor: dividersDark,
  },
  headertitle: {
    color: baseTextLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
  divider: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: dividersDark,
    width: 1,
    height: divider,
  },
  headernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding:10,
    flexWrap: 'wrap',
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 25,
    width: width,
  },
  contentwrapper: {
    alignSelf: 'stretch',
    backgroundColor: '#FFFFFF',
    height: contentHeight,
    padding: 10,
    width: width,
  },
  footerwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: gray,
    width: width,
    height: footerHeight,
    borderTopWidth: 1,
    borderTopColor: dividersDark,
  },
  footernavigation: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  buttonWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbottom: {
    height: 75,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: h2,
    color: primaryTextDark,
    marginBottom: 30,
    marginTop: 15,
  },
  button: {
    height: 50,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlebutton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageicon: {
    width: 75,
    height: 45,
  },
});

export default Main
