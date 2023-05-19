
import React from 'react';
import { View, ImageBackground, Image, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { useTheme } from 'spread/src/hooks';
import { Images } from 'spread/src/theme';

const FullScreenImage = () => {
    const { Layout, Gutters, Images } = useTheme();
  return (
  
  <>
    <StatusBar barStyle={'dark-content'} />
      <ImageBackground
        source={Images.splash}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
        <ActivityIndicator size={'large'} style={[Gutters.largeVMargin]} />
        </View>
      </ImageBackground>
  </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: 50
  },
  logo: {
    width: 100, // Adjust the width of the logo as needed
    height: 100, // Adjust the height of the logo as needed
  },
});

export default FullScreenImage;