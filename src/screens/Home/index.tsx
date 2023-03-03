import React, { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator, Alert } from 'react-native';
import {
    Container,
    SearchContainer,
    Input,
    SearchButton,
    Title,
    Banner,
    BannerButton,
    SliderMovie,
    Loading
} from './styles';

import Header from '../../components/header';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


export default function Home() {

    const [input, setInput] = useState('');
    const navigation = useNavigation();


    function handleSearchMovie() {
        if (input === '') return;

        navigation.navigate('Search', { name: input })
        setInput('')
    }



    return (
        <Container>
            <Header title="React Prime" />
            <SearchContainer>
                <Input
                    placeholder="Ex Vingadores"
                    placeholderTextColor="#DDD"
                    value={input}
                    onChangeText={(text: string) => setInput(text)}
                />
                <SearchButton onPress={handleSearchMovie}>
                    <Feather name="search" size={38} color="#FFFFFF" />
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}