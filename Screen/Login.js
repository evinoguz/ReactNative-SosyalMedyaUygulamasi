import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    }
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
      <View style={{
        flex: 1,
        marginTop: 21,
       
        alignItems: 'center',
        justifyContent: 'center',
      }}>
       
          <KeyboardAvoidingView enabled behavior="padding" style={{ flex: 1 }}>
          <ScrollView
          contentContainerStyle={{
            flex: 1,
            marginTop: 21,
        
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >

            
            <View style={
              {
                flex: 0.2,
   
                width: '100%',
                height: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}></View>
            <View style={
              {
                flex: 3,
       
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={{ width:400, height: 270, borderRadius: 22 }}
                source={require('.././assets/s.png')} /></View>


            <View style={
              {
                flex: 0.5,
             
                width: '100%',
                height: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{  margin: 10, fontStyle: 'italic', fontSize: 15, width: 80 }}>UserName: </Text>
                <TextInput placeholder="Kullanıcı Adınızı Giriniz..." onChangeText={(username) => this.setState({ username })}
                  value={this.state.username} maxLength={30}
                  style={{ borderWidth: 1, width: 200, height: 40, backgroundColor: 'white',fontSize:15,padding:6 }}>
                </TextInput>
              </View>

            </View>
            <View style={
              {
                flex: 0.5,
                
                width: '100%',
                height: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'black', margin: 10, fontStyle: 'italic', fontSize: 15, width: 80 }}>Password: </Text>
                <TextInput secureTextEntry={true} placeholder="Şifrenizi Giriniz..." onChangeText={(password) => this.setState({ password })}
                  value={this.state.password} maxLength={10}
                  style={{ borderWidth: 1, width: 200, height: 40, backgroundColor: 'white',fontSize:15,padding:6 }}>
                </TextInput>
              </View>

            </View>

            <View style={
              {
                flex: 0.8,
              
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ backgroundColor: '#643f72', width: 120, height: 50, margin: 10, padding: 10,borderRadius:25, }} onPress={() => {
                  this.props.navigation.navigate('Anasayfa');
                }}>
                  <Text style={{ fontSize: 20, fontStyle: 'italic', color: "white"  }}>Giriş Yap</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ backgroundColor: '#ff9532', width: 120, height: 50, margin: 10, padding: 10,borderRadius:25, }} onPress={() => {
                  this.props.navigation.navigate('UyeOl');
                }}>
                  <Text style={{ fontSize: 20, fontStyle: 'italic', color: "white" }}>Üye Ol</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={
              {
                flex: 2,
               
                width: '100%',
                height: '50%',
                alignItems: 'center',
                justifyContent: 'center',
              }}></View>
              </ScrollView>
          </KeyboardAvoidingView>
      
      </View>
    );
  }
}
