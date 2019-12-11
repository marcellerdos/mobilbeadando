
import React, { Component } from 'react';

import { Text, View, SafeAreaView , ScrollView, Image, StyleSheet} from 'react-native';

 
export default class FirstPage extends React.Component {
  render() {
    return (
     <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <Text style={styles.header}>
              Erdős Pince
        </Text>
            <Text style={styles.paragraph}>
              Az Erdős Pincét 1997-ben nyitottuk meg Tokajban, a Szerelmi pincesoron. Családunk mint régi tokaji család sok generáció óta foglalkozik szőlőtermesztéssel, borkészítéssel valamint borfogyasztással.
        </Text>
            <Text style={styles.paragraph}> <Image
              style={{ width: 150, height: 150 }}
              source={{ uri: 'http://erdospince.hu/beta/pic/pince_logo2.jpg' }}
            />
            </Text>
            <Text style={styles.paragraph}>
              A régi családi pince nem volt alkalmas a látogatók fogadására, így amikor 1990-ben a Szerelmi pincesoron lehetőségünk volt egy pincehely megvételére, belevágtunk.
        </Text>

              <Text style={styles.img1}> <Image
                style={{ width: 150, height: 150 }}
                source={{ uri: 'http://erdospince.hu/beta/pic/pince0002.jpg' }}
              />         <Image
                  style={{ width: 150, height: 150 }}
                  source={{ uri: 'http://erdospince.hu/beta/pic/pince0003.jpg' }}
                />
              </Text>

            <Text style={styles.paragraph}>
              A pince első 30 méterét lösz talajba vágtuk, majd a következő 20 méter már jóval nehezebbnek bizonyult. Az igen kemény vulkanikus andezit sziklán haladtunk néhány métert, majd szintemelésre kényszerültünk az utolsó 8 méteren. A továbbásás lehetőségét nem zártuk ki, egyszer talán folytatjuk még...
        </Text>

              <Text style={styles.img1}> <Image
                style={{ width: 150, height: 150 }}
                source={{ uri: 'http://erdospince.hu/beta/pic/pince_u_ag.jpg' }}
              />         <Image
                  style={{ width: 150, height: 150 }}
                  source={{ uri: 'http://erdospince.hu/beta/pic/pince_fent.jpg' }}
                />
              </Text>

            <Text style={styles.paragraph}>
              A pince jó szellőzését négy felfúrt szellőző biztosítja, a leghátsó kb. 30 méter magas. Mészkőkufával burkoltuk ki a pincét, amely porózussága miatt szintén a jó klímát, szellőzést biztosítja. Jól látható, hogy a nemespenész is szépen növekszik, ilyen fiatal pincék között ritka ez a gazdag nemespenész-burkolat.
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
  paragraph: {
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
  img1: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  }
});