import React from 'react'; 
import { StyleSheet,FlatList,Picker, Text, View,Image, ActivityIndicator, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
export default class Paylasim extends React.Component {
  state = {
    image: null,
  };

  constructor(props) {
    super(props);
    this.state = { 
      isLoading:true,
      //selected_post:0,
      
      img_url:"",
      title:"",
      content:"",
    };
  }
  componentDidMount() {
    this.getPermissionAsync();
    return fetch('192.168.1.10:80/SosyalMedya/public/api/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        img_url: this.state.img_url,
        title: this.state.title,
        content: this.state.content,
        

      }),
    });


  }
  
  getPermissionAsync=async()=>{
    if(Constants.platform.ios){
      const{status}=await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if(status!='granted'){
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  _pickImage=async()=>{
    let result=await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.All,
      allowsEditing:true,
      aspect:[4,3],
    });
    console.log(result);
    if(!result.cancelled){
      this.setState({image:result.uri});
    }
 
  };
      
  render() {
   
    let {image}=this.state;    
    return (
      <View style={styles.container}>
        <View style={
          {
            flex: 0.5,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#d8ebff',
          }}></View>

        <View style={
          {
            flex: 1.8,
            width: '100%',
            height: '100%',
            alignItems:'flex-end',
            justifyContent: 'center',
            
          }}>

            {image && 
            <Image style={{width:250, height:150,margin:40, borderRadius:15}}
            source={{uri:image}} />}
         
         
            </View>
            <View style={
          {
            flex: 0.7,
            width: '100%',
            height: '100%',
            alignItems:'flex-end',
            justifyContent: 'center',
          }}>
            <TouchableOpacity onPress={this._pickImage} style={{backgroundColor:'white',
            width:100,fontSize:15,borderWidth:1, height:40,margin:40,padding:8,borderRadius:15}}>
                <Text style={{ fontStyle:'italic', color:"#06047a"}}>Dosya Seç</Text>
            </TouchableOpacity>
            </View>

        <View style={
          {
            flex: 0.7,
            width: '100%',
            height: '100%',
            alignItems:'flex-start',
            justifyContent: 'center',
            backgroundColor:'#d8ebff',
          }}>
         <View style={{ flexDirection: 'row' }}>
          <Text style={{margin:10,fontSize:15,width:50}}>Baslik: </Text>
          <TextInput placeholder="Başlığı Giriniz..." maxLength={20} onChangeText={(title) => this.setState({ title })}
            value={this.state.Baslik}
              style={{ borderWidth: 1, width: 250, height: 40, backgroundColor: 'white',fontSize:15,padding:6 }}>
            </TextInput>
            </View>
            
        </View>

        <View style={
          {
            flex: 2.9,
            width: '100%',
            height: '100%',
            alignItems:'flex-start',
            justifyContent:'flex-start',
            backgroundColor:'#d8ebff',
          }}>
              <View style={{ flexDirection: 'row' }}>
          <Text style={{margin:10,fontSize:15,width:50}}>İcerik: </Text>
          <TextInput placeholder="İçeriği Giriniz..." onChangeText={(content) => this.setState({ content })}


          multiline={true} maxLength={150}
          numberOfLines={5}
            value={this.state.İcerik}
              style={{ borderWidth: 1, width: 250, backgroundColor: 'white', fontSize:15,padding:6, }}>
            </TextInput>
            </View>

        </View>
        <View style={
          {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems:'flex-end',
            justifyContent:'center',
            backgroundColor:'#d8ebff',
          }}>
            <View style={{ flexDirection: 'row' }}>
              
            <TouchableOpacity style={{ height:50,margin:19,padding:10}} onPress={() => {
               this.props.navigation.goBack();}}>
                 <Image style={{width:50, height:50, borderRadius:10 }}
                source={require('.././assets/geri1.png')} />
            </TouchableOpacity>

          <TouchableOpacity style={{ height:50,margin:19,padding:10}} onPress={() => {
                this.props.navigation.navigate('Anasayfa');}}>
                <Image style={{width:50, height:50, borderRadius:10}}
                source={require('.././assets/home.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ height:50,margin:19,padding:10}} onPress={() => {
                this.props.navigation.navigate('Anasayfa');}}>
                <Image style={{width:50, height:50, borderRadius:10}}
                source={require('.././assets/paylas.png')} />
          </TouchableOpacity>
          </View>
          </View>

        </View>
      
    );
  }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:21,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#d8ebff',
    },
  });
   
  