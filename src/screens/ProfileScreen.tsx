import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

export default function ProfileScreen() {
  return (
    <View className="flex-1 bg-white pt-20 px-6">
      <Text className="text-3xl font-bold text-gray-900 mb-6">Profile</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="items-center mb-8">
          <View className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
            <Image
              source={{
                uri: "https://images.unsplash.com/photo-1590847169880-9856a731bfce?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              className="w-full h-full"
            />
          </View>
          <Text className="text-xl font-bold text-gray-900">Mila Carter</Text>
          <Text className="text-gray-500">Travel Enthusiast</Text>
        </View>

        <View className="space-y-4">
          <TouchableOpacity className="flex-row items-center p-4 bg-gray-50 rounded-2xl">
            <Icon name="user" size={20} color="#1F2937" />
            <Text className="ml-4 text-gray-800 font-medium">
              Personal Information
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center p-4 bg-gray-50 rounded-2xl">
            <Icon name="settings" size={20} color="#1F2937" />
            <Text className="ml-4 text-gray-800 font-medium">Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center p-4 bg-gray-50 rounded-2xl">
            <Icon name="help-circle" size={20} color="#1F2937" />
            <Text className="ml-4 text-gray-800 font-medium">Help Center</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
