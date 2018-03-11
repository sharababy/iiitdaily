import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

var menuItems = require('./messMenu.js')
var now;

export default class Screen1 extends React.Component {

  render() {
    now = new Date();
    var day = now.getDay()

    return (
      <View  style={styles.container}>
        <Text style={styles.mainText}>Hi there, Vedant</Text>

        <Text style={styles.subText}>Shakti Mess - {menuItems[day].day}'s menu</Text>

        <Text style={styles.messMenu}>
          <Text style={styles.messMenuHead}>Breakfast</Text>
          {"\n"}
          {menuItems[day].breakfast}          
        </Text>
        <Text style={styles.messMenu}>
        <Text style={styles.messMenuHead}>Lunch</Text>
          {"\n"}
          {menuItems[day].lunch}
        </Text>
        <Text style={styles.messMenu}>
          <Text style={styles.messMenuHead}>Dinner</Text>
          {"\n"}
          {menuItems[day].dinner}
        </Text>


        <Text style={styles.subText}>Your classes TODAY</Text>
        <Text style={styles.smallText}>10th March 2018</Text>

        <Text style={styles.timeSlot}>
          Advanced Data Strucures and Algorithms
          {"\n"}
          <Text style={styles.smallText}>9 - 10 am</Text>          
        </Text>
        <Text style={styles.timeSlot}>
          Digital Image Processing
          {"\n"}
          <Text style={styles.smallText}>10 - 11 am</Text>          
        </Text>
        <Text style={styles.timeSlot}>
          Embedded Systems
          {"\n"}
          <Text style={styles.smallText}>11 - 12 am</Text>          
        </Text>
        <Text style={styles.timeSlot}>
          Computer Organization
          {"\n"}
          <Text style={styles.smallText}>12 - 1 pm</Text>          
        </Text>
        <Text style={styles.timeSlot}>
          Design Quality Realization
          {"\n"}
          <Text style={styles.smallText}>2 - 3 pm</Text>          
        </Text>


        <Text style={styles.subText}>Items Available at Gurunath Stores</Text>
        <Text style={styles.smallText}>as of 7:22pm 10th March 2018</Text>

        <Text style={styles.messMenu}>
          Lays (Green , Red) ,
          Aloo Bhujia,
          Veg and Chicken Puffs,
          Dairy Milk Silk,
          Coke,
          7up
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  mainText:{
    fontSize:25,
    marginTop:50,

  },
  subText:{
    fontSize:21,
    marginTop:30,
  },
  smallText:{
    fontSize:12,
    marginTop:10,
  },
  messMenu:{
    textAlign:'center',
    alignSelf: 'stretch',
    fontSize:15,
    margin:15,
    borderWidth:1,
    borderColor:'#aaa',    
    padding:15,
  },
  timeSlot:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    textAlign:'center',
    alignSelf: 'stretch',
    fontSize:15,
    margin:15,
    borderWidth:1,
    borderColor:'#aaa',    
    padding:15,
  },
  messMenuHead:{
    textAlign:'center',
    alignSelf: 'stretch',
    fontSize:19,
    padding:15,
  }

});
