import React, {useState, useEffect} from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

function MainScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text> Welcome </Text>
    </View>
  );
}

function TimeScreen({data}) {
  const [date, setDate] = useState(data.addHours(3));
  
  function refreshClock() {
    let time = new Date();
    Date.prototype.addHours = function(h) {
      this.setTime(this.getTime() + (h*60*60*1000));
      return this;
    }
    let newTime = time.addHours(3);

    setDate(newTime);
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text> {date.toLocaleTimeString()} </Text>
    </View>
  );
}

function DateScreen({ date }) {
   return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>{date.toDateString()} </Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  let date = new Date();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen 
            name="Main" 
            component={() => <MainScreen/>} 

        />
        <Drawer.Screen 
              name="Time" 
              component={() => <TimeScreen data={date}/>}
              options={({ navigation }) => ({
                headerRight: () => (

                      
                  <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Main')} >
                            <Icon name="md-arrow-forward" size={16} color="#000" />
                  </TouchableWithoutFeedback>
                      )
        })}
        />
        <Drawer.Screen 
              name="Date" 
              component={() => <DateScreen date={date}/>}
              options={({ navigation }) => ({
                headerRight: () => (
                  <TouchableWithoutFeedback 
                            onPress={() => navigation.navigate('Main')} >
                            <Icon name="md-arrow-forward" size={16} color="#000" />
                  </TouchableWithoutFeedback>
                      )
        })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}