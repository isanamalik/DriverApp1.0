import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, FONTS, SIZES } from '../constants';
import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
import { color } from 'react-native-reanimated';
const LandingScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={images.shuttle}
          resizeMode="contain"
          style={{
            width: '50%',
            height: '50%',
            
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
          {/* <Text style={{ ...FONTS.h2 ,color: COLORS.white}}>Driver App</Text> */}
          <Text style={{ color: COLORS.white,  
             textAlign: 'center', ...FONTS.body3 }}>
          Login to Proceed
            </Text>
        </View>
              <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
              
          <TouchableOpacity
          onPress={ () => navigation.navigate('LoginScreen') }
          >
             <Button style={styles.button  } >Start</Button>
          </TouchableOpacity>
        </View> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B151B",
    // alignItems: 'center',
    padding: 10,
  },  
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    backgroundColor : "#FBA92B",
     color: COLORS.white,
     width : 180,
     borderRadius: 30
  }

});

export default LandingScreen;