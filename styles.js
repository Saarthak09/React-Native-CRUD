import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    container:{
      padding: 20,
      color:"#000000",
      alignItems: "center", 
      justifyContent: "center"
    },
    txt:{
        color:"#000000",
    },
    header:{
        fontSize:16,
        color:"#000000",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        color:"#000000"
    },
    tasks:{
        fontWeight:'bold', 
        fontSize:15, 
        color:"#000000",
        textAlign: "center",
        padding: 10
    },
    btn: {
        width: '100%', 
      height: 50, 
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
      },
  })