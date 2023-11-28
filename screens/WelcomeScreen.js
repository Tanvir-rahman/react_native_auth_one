import React from 'react';
import { View, Text, Image, ImageBackground, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WelcomeScreen() {
  const screenWidth = Dimensions.get('window').width;

  const imageWidth = screenWidth * 0.6;
  const imageHeight = imageWidth;

  return (
    <SafeAreaView className="flex-1">
      {/* Background Circles */}
      {/*
      <View>
        <View className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] rounded-full" />
        <View className="absolute top-[-250px] right-[-250px] w-[500px] h-[500px] rounded-full bg-red-600" />
      </View>
      */}

      {/* Content */}
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        <View className="m-10">
          <Image
            source={require('../assets/welcome_image.png')}
            resizeMode="contain"
            style={{ width: imageWidth, height: imageHeight }}
            className="mb-20"
          />
          <View>
            <Text className="text-primary text-4xl font-semibold text-center mb-4">
              Discover Your Dream Job here
            </Text>
            <Text className="m-4 text-sm text-center">
              Explore all the existing job roles based on your interest and
              study major
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
