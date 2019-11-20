import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      username: "",
      email: "",
      password: "",
    };
  }
 
    
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 10, fontSize: 15, width: 80 }}>Name: </Text>
            <TextInput placeholder="Adınızı Giriniz..." onChangeText={(name) => this.setState({ name })}
              value={this.state.name} maxLength={20}
              style={{ borderWidth: 1, width: 250, backgroundColor: 'white', fontSize: 15, padding: 6, }}>
            </TextInput>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 10, fontSize: 15, width: 80 }}>Surname:</Text>
            <TextInput placeholder="Soyadınızı Giriniz..." onChangeText={(surname) => this.setState({ surname })}
              value={this.state.surname} maxLength={20}
              style={{ borderWidth: 1, width: 250, backgroundColor: 'white', fontSize: 15, padding: 6, }}>
            </TextInput>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 10, fontSize: 15, width: 80 }}>Username:</Text>
            <TextInput placeholder="Kullanıcı Adınızı Giriniz..." onChangeText={(username) => this.setState({ username })}
              value={this.state.username} maxLength={20}
              style={{ borderWidth: 1, width: 250, backgroundColor: 'white', fontSize: 15, padding: 6, }}>
            </TextInput>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 10, fontSize: 15, width: 80 }}>Email: </Text>
            <TextInput keyboardType="email-address" placeholder="Emailinizi Giriniz..." onChangeText={(email) => this.setState({ email })}
              value={this.state.email} maxLength={30}
              style={{ borderWidth: 1, width: 250, backgroundColor: 'white', fontSize: 15, padding: 6, }}>
            </TextInput>
          </View>
        </View>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 10, fontSize: 15, width: 80 }}>Şifre: </Text>
            <TextInput secureTextEntry={true} placeholder="Şifrenizi Giriniz..." onChangeText={(password) => this.setState({ password })}
              value={this.state.password} maxLength={10}
              style={{ borderWidth: 1, width: 250, backgroundColor: 'white', fontSize: 15, padding: 6, }}>
            </TextInput>
          </View>
        </View>
        <View style={[styles.card,{alignItems:'flex-end'}]}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); }}>
            <Image style={{ width: 50, height: 50, borderRadius: 10,  }} source={require('.././assets/kisi.png')} />
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#d8ebff',
  },
  card:{
    width: '90%', alignItems: 'center', justifyContent: 'center',
    marginBottom:5
  }
});

