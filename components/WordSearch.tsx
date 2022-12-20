import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export const WordSearch = () => {
    const [word, setWord] = useState<string>('')
    const handleSearch = () => {
        alert(word)
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((json) => {
            
        });
    }
  return (
    <View style = {styles.inputContainer}>
        <TextInput 
        value = {word}
        onChangeText = {setWord}
        style = {styles.inputBox} 
        placeholder = "Enter a word"
        />
        <Pressable 
        style={styles.searchButton}
        onPress={handleSearch}
        >
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
