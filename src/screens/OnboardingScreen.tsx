import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1418985227304-f32df7d84e39?q=80&w=1000&auto=format&fit=crop' }}
      className="flex-1 justify-between pb-10"
      resizeMode="cover"
    >
      <View className="mt-20 items-center">
        <Text className="text-white text-7xl font-bold italic tracking-wider">Aspen</Text>
      </View>

      <View className="px-6 space-y-4">
        <View>
          <Text className="text-white text-2xl font-light">Plan your</Text>
          <Text className="text-white text-4xl font-bold">Luxurious</Text>
          <Text className="text-white text-4xl font-bold">Vacation</Text>
        </View>

        <TouchableOpacity 
          className="bg-primary py-4 rounded-2xl items-center mt-4"
          onPress={() => navigation.replace('Home')}
        >
          <Text className="text-white text-lg font-bold">Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
