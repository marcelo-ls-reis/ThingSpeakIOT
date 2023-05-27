import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Cards = ({ title, value }) => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>{value}</Text>
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },
    value: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },

});

export default Cards;