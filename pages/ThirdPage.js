// Home screen
import React, { Component } from 'react';
//import react in our code.
import { Text, View, SafeAreaView , ScrollView, Image, StyleSheet} from 'react-native';
//import all the components we are going to use.
 
export default class ThirdPage extends React.Component {
  render() {
    return (
     <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.header}>
              Kapcsolat
        </Text>
            <Text style={styles.header2}>
             Elérhetőségeink:
        </Text>
           
            <Text style={styles.paragraph}>
             3910 Tokaj, Szerelmi Pincesor 11.{"\n"}{"\n"}

Tel.: 47 / 715-001 , Fax: 47 / 352-886{"\n"}{"\n"}

Mobil: 20 / 9531 - 383{"\n"}{"\n"}

E-mail: borkatakomba @ erdospince . hu{"\n"}{"\n"}
        </Text>

             
 <Text style={styles.header2}>
             Nyitvatartás::
        </Text>

            <Text style={styles.paragraph}>
           Március 15-től Október 15-ig 10-18 óráig, hétfő kivételével.
Október 15 és Március 15 között hétvégenként rendszerint nyitva tartunk.
{"\n"}{"\n"}
Egyéb időpontban: előzetes bejelentkezés alapján.{"\n"}{"\n"}
        </Text>

             
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292929',
    padding: 8,
  },
  header2: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  header: {
    margin: 24,
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
  },
});