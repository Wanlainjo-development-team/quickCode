import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, View, TouchableOpacity } from 'react-native';

import getStarted from './style';

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../../assets/background.png')} style={getStarted.container}>
      <StatusBar style="light" />
      <View style={getStarted.textContainer}>
        <Text style={getStarted.textContainerTitle}>QUICK CODE</Text>
        <Text style={getStarted.textContainerSubtitle}>Your One stop to all your favourite USSD codes</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.8} style={getStarted.getStartedButton}>
        <ImageBackground source={require('../../../assets/butonBackground.png')} style={getStarted.getStartedButtonBackground}>
          <Text style={getStarted.getStartedButtonText}>Get Started</Text>
        </ImageBackground>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default GetStarted