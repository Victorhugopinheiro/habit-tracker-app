import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs

      screenOptions={
        {
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: '#666666',
          headerStyle: { backgroundColor: '#f5f5f5' },
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: '#f5f5f5',
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0

          },

        }

      }>

      <Tabs.Screen name="index" options={{
        title: 'Habitos Diarios', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        )
      }} />


      <Tabs.Screen name="streaks" options={{
        title: 'Adicionar hábito ', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chart-line" size={size} color={color} />
        )
      }} />

      <Tabs.Screen name="add-habit" options={{
        title: 'Adicionar hábito ', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
        )
      }} />




    </Tabs>
  )

}
