import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const BookCards = (props) => {
  return (
    <ScrollView horizontal className="pt-8 px-3">
      <BookCard img="https://m.media-amazon.com/images/I/51J7PtO0ElL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" />
      <BookCard img="https://cdn.shopify.com/s/files/1/0458/6386/2439/products/RichDad_PoorDadbyRobertT.Kiyosaki-books_1024x1024.jpg?v=1609441318" />
      <BookCard />
    </ScrollView>
  );
};

function BookCard({ img }) {
  return (
    <View className="mr-4">
      <Image
        source={{
          uri:
            img ||
            "https://www.citimuzik.com/wp-content/uploads/2022/11/61AtWVLF2CL-1-810x1250.jpg",
        }}
        className="w-32 h-44 rounded-lg bg-transparent"
      />
      <Text className="mt-4 text-sm font-inter">Think And Grow Rich</Text>
      <Text className="text-xs text-gray-500">Napoleon Hill</Text>
    </View>
  );
}

export default BookCards;
