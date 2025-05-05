import axios from 'axios';
import { useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from './contexts/authContext';
import { api } from './libs/axios';

export default function Screen() {
  const [movieCount, setMovieCount] = useState(0);

  const auth = useContext(AuthContext);

  const handleClick = async () => {
    const response = await axios.get('https://reactnative.dev/movies.json', {
      params: {
        genere: 'action'
      }
    });

    if (response.status === 200) {
      console.log(response.data.movies);
      setMovieCount(response.data.movies.length);
    }
  };

  const handleClickPost = async () => {
    const response = await api.post(
      '/posts',
      //const response = await axios.post(
      // 'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1
      }
    );
    if (response.status === 201) {
      console.log(response.data);
    }
  };

  const handleClickUser = async () => {
    auth?.setData('Talytha');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text style={styles.moviecount}>Filmes: {movieCount}.</Text>
      <View style={{ marginBottom: 20 }}>
        <Button title="Carregar" onPress={handleClick} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="Inserir novo post" onPress={handleClickPost} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Button title="mudar usario" onPress={handleClickUser} />
      </View>
      <Text>nome do usuario: {auth?.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  moviecount: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  }
});
