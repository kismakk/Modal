import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  const setModalState = () => {
    setModalVisible(!modalVisible)
  }

  const handlePress = () => {
    setModalVisible(true)
  }

  return (
    <View style={styles.centerView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={setModalState}
      >
        <View style={styles.centerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is a modal</Text>
            <Pressable onPress={setModalState}>
              <Text style={styles.modalClose}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable onPress={handlePress}>
        <Text>Show Modal Message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: 320,
    height: 126,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalClose: {
    fontWeight: 'bold',
    marginTop: 26,
  }
});
