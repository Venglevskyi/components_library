import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput, Button } from 'react-native-paper';

import Section from 'components/Section/Section';

const Tab = createMaterialBottomTabNavigator();

const Feed = () => {
  const [text, setText] = React.useState('');
  return (
    <Section isScrolled>
      <View style={{ height: 500, width: '100%', backgroundColor: 'yellow' }}>
        <Text>Some content</Text>
      </View>
      <TextInput
        label="Email"
        value={text}
        onChangeText={txt => setText(txt)}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}>
        Press me
      </Button>
    </Section>
  );
};

const Notifications = () => (
  <Section
    isScrolled
    centerContentHorizontally
    withHeader
    withShadow
    isStickyHeader>
    <Text>Notifications</Text>
    <View
      style={{
        width: 100,
        height: 700,
        backgroundColor: 'white',
      }}
    />
    <Button
      icon="camera"
      mode="contained"
      onPress={() => console.log('Pressed')}>
      Press me
    </Button>
  </Section>
);

const Profile = () => (
  <View style={{ flex: 1 }}>
    <Text>Profile</Text>
  </View>
);

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e"
        barStyle={{ backgroundColor: 'black' }}
        shifting>
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Notifications',
            tabBarBadge: 2,
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
