import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import db from "../config"
import firebase from 'firebase'

export default class SignupLogin extends Component{

    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
        return alert("Successfully logged in")
    })
    .catch((error)=>{
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
    })
}

userSignUp = (username,password)=>{
    firebase.auth().createUserWithEmailAndPassword(username,password)
    .then((response)=>{
        return alert("User added successfully")
    })
    .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage)
    })
}

showModal = ()=>(
    <Modal
      /*animationType="fade"
      transparent={true}
      visible={this.state.isVisible}*/
      >
      <View>
        <ScrollView style={{width:'100%'}}>
          <KeyboardAvoidingView style={{flex:1,justifyContent:'center', alignItems:'center'}}>
          <Text
            style={{justifyContent:'center', alignSelf:'center', fontSize:30,color:'blue',margin:50}}
            >Registration</Text>
          <TextInput
            style={styles.textInput}
            placeholder ={"First Name"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                firstName: text
              })
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder ={"Last Name"}
            maxLength ={8}
            onChangeText={(text)=>{
              this.setState({
                lastName: text
              })
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder ={"Mobile Number"}
            maxLength ={10}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
              this.setState({
                mobileNumber: text
              })
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder ={"Address"}
            multiline = {true}
            onChangeText={(text)=>{
              this.setState({
                address: text
              })
            }}
          />
          <TextInput
            style={styles.textInput}
            placeholder ={"Username"}
            keyboardType ={'email-address'}
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
          /><TextInput
            style={styles.textInput}
            placeholder ={"Password"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                password: text
              })
            }}
          /><TextInput
            style={styles.textInput}
            placeholder ={"Confirm Password"}
            secureTextEntry = {true}
            onChangeText={(text)=>{
              this.setState({
                confirmPassword: text
              })
            }}
          />
          <View>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={()=>
                this.userSignUp(this.state.username, this.state.password, this.state.confirmPassword)
              }
            >
            <Text style={styles.registerButtonText}>Register</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.cancelButton}
              //onPress={()=>this.setState({"isVisible":false})}
            >
            <Text style={{color:'blue'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </Modal>
  )


    render(){
        return(
            <View>
                <View>
                <Text style={styles.title}>Barter App</Text>
                </View>
                <View>
                    <Text style = {styles.inputText}>Username:</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.loginBox}
                    keyboardType = 'email-address'
                    placeholder = 'abc@example.com'
                    onChangeText = {(text)=>{
                        this.setState({
                            username: text
                        })
                    }}
                    />
                </View>
                <View>
                    <Text style = {styles.inputText}>Password:</Text>
                </View>
                <View>
                    <TextInput
                    style = {styles.loginBox}
                    secureTextEntry = {true}
                    placeholder = 'Enter password'
                    onChangeText = {(text)=>{
                        this.setState({
                            password: text
                        })
                    }}
                    />
                </View>
                <View style = {{alignItems: 'center'}}>
                    <TouchableOpacity
                        style = {[styles.button, {marginBottom: 10}]}
                        onPress = {()=>{
                            this.userLogin(this.state.username, this.state.password)
                        }}>
                            <Text style={{color:'red',fontSize:18,fontWegiht:'bold'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style = {styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.username, this.state.password)
                    }}>
                        <Text style={{color:'red',fontSize:18,fontWegiht:'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 65,
        fontWeight: "300",
        paddingBottom: 30,
        color: "blue"
      },
    inputText: {
        color: 'blue',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 55
    },
    loginBox: {
        width: 300,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor: "black",
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
      },
      button: {
        width: 300,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        backgroundColor: "pink"
    },
    textInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#ffab91',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30
      },
      registerButtonText:{
        color:'#ff5722',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
})