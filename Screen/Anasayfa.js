import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
export default class GirisYap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Sifre: "",
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View

          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.1,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <ImageBackground source={require('./assets/logo.jpg')} style={{ width: '98.6%', height: 200, }} >
          <Text style={{
            color: '#FFF',backgroundColor:'rgba(0,0,0,0.4)', paddingHorizontal: 5, paddingVertical: 10, width: '98.6%', padding: 4,
            fontSize: 16, fontWeight: '200'
          }}>Papatya</Text>
          </ImageBackground>


          <Text style={{
            color: '#000', paddingHorizontal: 5, paddingVertical: 10, width: '100%', padding: 4,
            fontSize: 12, fontWeight: '200', paddingHorizontal: 10,
          }}>   Biz papatya yoluyoruz seviyor mu sevmiyor mu diye.
                Hayatta bizi yoluyor aslında dayanacak mı
                dayanamayacak mı diye.  Paul Auster
                Biz papatya yoluyoruz seviyor mu sevmiyor mu diye.
                Hayatta bizi yoluyor aslında dayanacak mı
              dayanamayacak mı diye.  Paul Auster </Text>
        </View>
        <View style={
          {
            flex: 3,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}></View>
        <View style={
          {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ }} onPress={() => {
               this.props.navigation.goBack();}}>
                 <Image style={{width:50, height:50,margin:20,padding:10 }}
                source={require('./assets/geri1.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 50, margin: 10, padding: 10 }} onPress={() => {
              this.props.navigation.navigate('Anasayfa');
            }}>
              <Image style={{ width: 50, height: 50, borderRadius: 10 }}
                source={require('./assets/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 50, margin: 10, padding: 10 }} onPress={() => {
              this.props.navigation.navigate('Paylasim');
            }}>
              <Image style={{ width: 50, height: 50, borderRadius: 10 }}
                source={require('./assets/post.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={
          {
            flex: 0.1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 21,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});



/*import React from 'react';
import { StyleSheet, FlatList, Picker, ActivityIndicator, Text, View, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
export default class GirisYap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Sifre: "",
      posts: [],
    }
  }
  componentDidMount() {
    return fetch('192.168.1.10:80/SosyalMedya/public/api/post')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.getPost();
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch((error) => {
        alert(error)
      });

  }
  yeniliste(value) {
    this.setState({
      isLoading: true,
    })
    if (value > 0)
      return fetch('192.168.1.10:80/SosyalMedya/public/api/post?id' + value)
        .then((response) => response.json())
        .then((responseJson) => {
          //this.getPost();
          this.setState({
            isLoading: false,
            dataSource: responseJson,
          });

        })
        .catch((error) => {
          console.error(error);
        })
  }


  items() {
    dizi = []
    this.state.posts.forEach(element => {
      dizi.push(<Picker.item value={element.id} label={element.title}></Picker.item>)
    })
    return dizi
  }

  getPost() {
    fetch('192.168.1.10:80/SosyalMedya/public/api/post')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          posts: responseJson,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });

  }
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <View

          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.1,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,

            elevation: 9,
          }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('TamEkranİmage', {
                  img_url: item.img_url,
                  title: item.title,

                });
              }}>
                <ImageBackground source={{ uri: '192.168.1.10:80/SosyalMedya/public/api/post' + item.img_url }}>
                  <Text style={{
                    color: '#FFF', backgroundColor: 'rgba(0,0,0,0.4)', paddingHorizontal: 5, paddingVertical: 10, width: '98.6%', padding: 4,
                    fontSize: 16, fontWeight: '200'
                  }}>{item.title}</Text>
                </ImageBackground>


                <Text style={{
                  color: '#000', paddingHorizontal: 5, paddingVertical: 10, width: '100%', padding: 4,
                  fontSize: 12, fontWeight: '200', paddingHorizontal: 10,
                }}>  {item.content} </Text></TouchableOpacity>
            }>
          </FlatList>
        </View>
        <View style={
          {
            flex: 3,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}></View>
        <View style={
          {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{}} onPress={() => {
              this.props.navigation.goBack();
            }}>
              <Image style={{ width: 50, height: 50, margin: 20, padding: 8 }}
                source={require('.././assets/geri1.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 50, margin: 10, padding: 10 }} onPress={() => {
              this.props.navigation.navigate('Anasayfa');
            }}>
              <Image style={{ width: 50, height: 50, borderRadius: 10 }}
                source={require('.././assets/home.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 50, margin: 10, padding: 10 }} onPress={() => {
              this.props.navigation.navigate('Paylasim');
            }}>
              <Image style={{ width: 50, height: 50, borderRadius: 10 }}
                source={require('.././assets/post.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={
          {
            flex: 0.1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 21,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

*/
