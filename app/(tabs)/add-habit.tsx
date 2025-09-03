import { AppWriteFuncContext } from '@/context/appWriteFunc';
import React, { useContext, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons, TextInput } from 'react-native-paper';


export default function AddHabit() {

  const { addHabit } = useContext(AppWriteFuncContext)!

  const frequency = ['Diário', 'Semanal', 'Mensal'];

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [last_completed, setLast_completedy] = useState(frequency[0]);
  const [streak_count, setStreak_count] = useState(0);


  return (
    <View style={style.content}>
      <TextInput value={title} onChangeText={setTitle} mode='outlined' label="Novo Hábito" />
      <TextInput value={description} onChangeText={setDescription} mode='outlined' label="Descrição" multiline numberOfLines={4} style={{ marginTop: 16 }} />
      <SegmentedButtons
        value={last_completed}
        style={{ marginTop: 16 }}
        onValueChange={(value) => setLast_completedy(value)}
        buttons={frequency.map((button) => ({

          value: button, label: button
        }))} />
      <Button onPress={() => addHabit({ title, description, last_completed, streak_count })} mode='contained' style={{ marginTop: 16 }}>Adicionar Hábito</Button>

    </View>
  )
}


const style = StyleSheet.create(
  {
    content: { flex: 1, justifyContent: 'center', padding: 16 },

    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  }
)
