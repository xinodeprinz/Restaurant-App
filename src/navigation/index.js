import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import DishDetailsScreen from '../screens/DishDetailsScreen';
import BasketScreen from '../screens/BasketScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { StyleSheet } from 'react-native';
import Login from '../screens/Login';
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={HeaderConfig}
        >
            <Stack.Screen
                name="Delivery"
                component={TabNavigation}
            // options={{
            //     headerShown: false
            // }}
            />
            <Stack.Screen
                name="Dish"
                component={DishDetailsScreen}
            />
            <Stack.Screen
                name="Basket"
                component={BasketScreen}
            />
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetailsScreen}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Register"
                component={Register}
            />
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            barStyle={{
                backgroundColor: '#151515',
            }}
            screenOptions={HeaderConfig}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'History',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="clipboard-list" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Basket"
                component={BasketScreen}
                options={{
                    tabBarLabel: 'Basket',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="basket" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            screenOptions={HeaderConfig(false)}
        >
            <HomeStack.Screen
                name="Início"
                component={HomeScreen}
            // options={{
            //     headerShown: false
            // }}
            />
            <HomeStack.Screen
                name="Restaurant"
                component={RestaurantDetailsScreen}
            // options={{
            //     headerShown: false
            // }}
            />
        </HomeStack.Navigator>
    );
}

const LoginIcon = () => {
    const navigation = useNavigation();
    return <Ionicons
        name='person-add'
        style={styles.login}
        onPress={() => navigation.navigate('Login')}
    />
}

const HeaderConfig = (headerShown = false) => {
    return {
        headerShown,
        title: "Doordash",
        headerRight: () => LoginIcon(),
    };
}

const styles = StyleSheet.create({
    login: {
        fontSize: 25,
    }
});

export default Navigation;