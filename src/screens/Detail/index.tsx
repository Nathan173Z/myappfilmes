import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Feather, Ionicons } from '@expo/vector-icons'
import { ScrollView, Modal } from 'react-native'
import {
    Container,
    Title,
    Header,
    HeaderButton,
    Banner,
    BannerLink,
    ContentArea,
    Rate,
    ListGenres,
    Description
} from './styles';
import { api, key } from '../../services/api';
import firestore from '@react-native-firebase/firestore';

export type FavoriteProps = {
    id: string;
    description: string;
    quantity: number;
    done: boolean;
  }

type Props = {
    data: FavoriteProps;
  }



type MoviesProps = {
    id: number
    title: string
    overview: string
    vote_average: number
    poster_path: string
    genres: [{ id: number, name: string }],
}


export default function Detail({data } : Props) {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<Record<string, MoviesProps>, string>>();
    const [favoriteMovie, setFavoriteMovie] = useState(false);

    const [movie, setMovie] = useState<MoviesProps>({
        id: 0,
        overview: '',
        title: '',
        poster_path: '',
        vote_average: 0,
        genres: [{ id: 0, name: '' }],
    });

    useEffect(() => {
        let isActive: boolean = true;

        async function getMovie() {
            try {
                const response = await api.get(`/movie/${route.params?.id}`, {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                    }
                })

                if (isActive) {
                    setMovie(response.data)       
                }
            } catch (error) {
                console.log(error)
            }}
        if (isActive) {
            getMovie()
        }
        return () => {
            isActive = false
        }
    }, [])

    function handleDoneToggle(){
        firestore()
        .collection('Favorite')
        .doc(data.id)
        .update({
          done: !data.done
        })
      }
    
    

    return (
        <Container>
            <Header>
                <HeaderButton>
                    <Feather name="arrow-left" size={28} color="#FFFFFF" onPress={() => navigation.goBack()} />
                </HeaderButton>

                <HeaderButton onPress={handleDoneToggle}>       
                       <Ionicons name={"bookmark"} size={28} color="#FFFFFF" />                                        
                </HeaderButton>
               
            </Header>

            <Banner
                resizeMethod='resize'
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                }}
            />

            <Title numberOfLines={2}>{movie.title}</Title>
                 
            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Descrição</Title>
                <Description>
                    {movie?.overview}
                </Description>
            </ScrollView>   
        </Container>
    )
}