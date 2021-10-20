import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View, TextInput } from "react-native";
import { useDispatch } from 'react-redux';
import * as scoreAction from '../store/action';

const WindowScreen = (props) => {
  const dispatch = useDispatch()
  const [text, setText] = useState('');

  const submitHandler = () => {
    props.changeVisible();
    dispatch(scoreAction.createScore(text, props.score));
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.vis}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Score: {props.score}</Text>
            <TextInput
              style={{height: 40}}
              placeholder="Enter User Name"
              onChangeText={text => setText(text)}
              defaultValue={text}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={submitHandler}
            >
              <Text style={styles.textStyle}>Send</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default WindowScreen;