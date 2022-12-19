import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export const WordSearch = () => {
  return (
    <View style = {styles.inputContainer}>
        <TextInput 
        style = {styles.inputBox} 
        placeholder="Enter a word"
        />
    </View>
  )
}

const styles = StyleSheet.create ({
    inputContainer: {
        padding: 10,
    },
    inputBox: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 200
    },
})
