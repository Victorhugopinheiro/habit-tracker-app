import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default function AddHabit() {
  return (
    <View style={style.content}>
      <TextInput mode='outlined' label="New Habit" />
      <TextInput mode='outlined' label="Description" multiline numberOfLines={4} style={{ marginTop: 16 }} />

      <Button mode='contained' style={{ marginTop: 16 }}>Adicionar Hábito</Button>

    </View>
  )
}


const style = StyleSheet.create(
  {
    content: { flex: 1, justifyContent: 'center', padding: 16 },

    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  }
)
