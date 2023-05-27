import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const Dashboard = () => {
    const [temperature, setTemperature] = useState(null);
    const [humidity, setHumidity] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const response = await axios.get(
                'https://api.thingspeak.com/channels/2068822/feeds.json?api_key=O4UO2E3ETQILY3RJ&results=2'
            );
            const data = response.data.feeds[0];
            setTemperature(data.field1);
            setHumidity(data.field2);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text style = {styles.Text} >Temperatura: {temperature}°C</Text>
            <Text style = {styles.Text} >Umidade: {humidity}%</Text>
        </View>
    );
};
export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',   
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    Text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
});