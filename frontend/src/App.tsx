import Header from "./header/Header"
import Content from "./content/Content"
import Footer from "./footer/Footer"
import { Item } from "./content/ItemList"
import './App.css'
import ItemList from "./content/ItemList"
import { useEffect, useState } from "react"

const longList: Item[] = [
    {
        address: "ul. Długopolska 2137",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Inne",
        waterType: "Gazowe",
        bathOrShower: "Prysznic",
        url: "https://www.wikipedia.org"
    },
    {
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Inne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Miejskie",
        bathOrShower: "Prysznic",
        url: "string"
    }
]

const shortList: Item[] = [
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Inne",
        waterType: "Gazowe",
        bathOrShower: "Prysznic",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3.5,
        roomsCount: 3,
        separateKitchen: false,
        heatingType: "Elektryczne",
        waterType: "Elektryczne",
        bathOrShower: "Wanna",
        url: "string"
    },
    {
        address: "string",
        size: 3,
        price: 3,
        roomsCount: 3,
        separateKitchen: true,
        heatingType: "Miejskie",
        waterType: "Miejskie",
        bathOrShower: "Prysznic",
        url: "string"
    }
]

function App() {
    const [entries, setEntries] = useState([]);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch('http://192.168.123.62:3000/offers')
            .then(response => response.json())
            .then(data => setEntries(data.items));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <>
            <Header></Header>
            <Content>
                <ItemList itemList={entries} />
            </Content>
            <Footer></Footer>
        </>
    )
}

export default App
