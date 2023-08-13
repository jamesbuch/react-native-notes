import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Text, Button, IconButton, FAB, TouchableRipple, Card } from 'react-native-paper'
import { observer } from 'mobx-react-lite'
import { noteStore } from '../stores/note'

const HomeScreen = observer(({ navigation }: any): JSX.Element => {

  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <>
          <IconButton
            icon="filter"
            iconColor="#fff"
            size={26}
            onPress={() => console.log('Filter')}
          />
          <IconButton
            icon="note"
            iconColor="#fff"
            size={26}
            onPress={() => navigation.push('AddNote')}
          />
        </>
      ),
    });
  }, [navigation])

  return (
    noteStore.count > 0 ?
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList
        data={noteStore.notes}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index, separators}: any) => (
          <TouchableRipple
            key={index}
            onPress={() => console.log(`Pressed item ${index}: Title: ${item.title}`)}
            rippleColor="rgba(0, 0, 0, .32)"
            style={{ width: 300, paddingTop: 10, paddingBottom: 3 }}
          >
             <Card mode='elevated'>
              <Card.Title titleVariant='headlineMedium' title={item.title} />
              <Card.Content>
                <Text variant="titleMedium">{item.title}</Text>
                <Text variant="bodyMedium">{item.content}</Text>
                <Text variant="bodyMedium">Tags: {item.tag}</Text>
              </Card.Content>
            </Card>
          </TouchableRipple>
        )}
      />
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.push('AddNote')}
      />
    </View> :
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>No notes yet!</Text>
    </View>
  )
})


const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})

export default HomeScreen
