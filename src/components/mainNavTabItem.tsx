import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image, Assets, Button} from 'react-native-ui-lib';

const TabItem =()=> {
 
    return (
      <View flex padding-20>
       
        <Text text40 white>
          Home
        </Text>
        <View absR marginR-20>
          <Button
            marginT-20
            round
            style={{width: 50}}
            size={Button.sizes.small}
            iconSource={Assets.icons.search}
            white
          />
        </View>
      </View>
    );
  
}

export default TabItem;
