import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export const WordSearch = () => {
    const [word, setWord] = useState<string>('')
    const handleWord = () => {
        setWord(word)
    }
  return (
    <View style = {styles.inputContainer}>
        <TextInput 
        value = {word}
        onChangeText = {handleWord}
        style = {styles.inputBox} 
        placeholder = "Enter a word"
        />
        <Pressable style={styles.searchButton}>
            <Text>Search</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create ({
    inputContainer: {
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    inputBox: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 200
    },
    searchButton: {
        borderWidth: 1,
        padding: 10,
    }
})
