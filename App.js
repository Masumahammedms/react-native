import React, { Component, useState } from "react";
import { Text, Image, Button, TextInput, ScrollView, View,StyleSheet} from "react-native";

class App extends Component {
  state = {
    name: "",
    age: null,
    email: "",
    sta: false,
    phoneNumber: null,


  }

  render() {
    return (
      <ScrollView style={style.margin}>
        <Text style={style.lavel}>Your name : </Text><TextInput style={style.boxBorder}
                                                                onChangeText={(nm) => this.setState({ name: nm })}></TextInput>
        <Text style={style.lavel}>Your age : </Text><TextInput style={style.boxBorder}
                                                               onChangeText={(age) => this.setState({ age: age })}></TextInput>
        <Text style={style.lavel}>Your email : </Text><TextInput style={style.boxBorder}
                                                                 onChangeText={(email) => this.setState({ email: email })}></TextInput>
        <Text style={style.lavel}>Your phone number : </Text><TextInput style={style.boxBorder}
                                                          onChangeText={(phone) => this.setState({ phoneNumber: phone })}></TextInput>


        <Text style={style.textStyle}>My Name : {this.state.name}</Text>
        <Text style={style.textStyle}>My Age : {this.state.age}</Text>
        <Text style={style.textStyle}>My Email : {this.state.email}</Text>
        <Text style={style.textStyle}>My Phone number : {this.state.phoneNumber}</Text>

        <Button title={"click me"} onPress={(eveent) => alert("sampal")}></Button>

      </ScrollView>
    )
  }
}
const style = StyleSheet.create({
  boxBorder:{
    borderColor: "blue",
    borderWidth: 1,
    borderStyle: "solid"
  },
  textStyle:{
    fontSize:25,
    color: "blue",
    textTransform:"uppercase"
  },
  lavel:{
    fontSize: 28,
    fontWeight:"bold",

  },
  margin:{
    marginTop:2,
    marginLeft:5,
    marginRight:5
  }
})
export default App;
