import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <Text style={styles.title}>my profile</Text>
      <Image
        source={{ uri: "https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?w=1380&t=st=1685916529~exp=1685917129~hmac=252883a34fa17f605ed85521b3ea58711cc5f57e81079d23d78685c8d496d393" }}
        style={styles.image}
      />
      <Card title="Name" text="Kaylani Naomi" />
      <Card title="Phone" text="678909876" />
      <Card title="Address" text="Street 4, Molyko Buea" />
    </ScrollView>
  );
}

const Card = ({ title, text }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    textTransform: 'capitalize',
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 10,
    // color: '#e47911',
  },
  card: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '500',
    marginBottom: 4,
    color: '#e47911'
  },
  cardText: {
    textTransform: 'capitalize'
  },
});
