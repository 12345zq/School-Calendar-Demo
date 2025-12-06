import React from 'react';
import { Tabs } from 'expo-router';
import { Calendar, ListTodo } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6366f1',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Timetable',
          tabBarIcon: ({ size, color }) => (
            <Calendar size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="homework"
        options={{
          title: 'Homework',
          tabBarIcon: ({ size, color }) => (
            <ListTodo size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}