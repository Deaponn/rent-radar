import Header from "./header/Header"
import Content from "./content/Content"
import Footer from "./footer/Footer"
import { Item } from "./content/ItemList"
import './App.css'
import ItemList from "./content/ItemList"
import { useEffect, useState } from "react"

const longList: Item[] = [
    {
        address: "ul. Długopolska 21",
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
        imageUrl: "https://ireland.apollo.olxcdn.com/v1/files/8ewcj343c2rq-PL/image;s=1000x700",
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
        imageUrl: "https://ireland.apollo.olxcdn.com/v1/files/tmy1n1pbzpf42-PL/image;s=1000x700",
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
    const [perPage, setPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [sortAsc, setSortAsc] = useState(false);
    const [sortBy, setSortBy] = useState<"size" | "price" | "roomsCount" | undefined>(undefined);

    useEffect(() => {
        // GET request using fetch inside useEffect React hook
        fetch(`http://192.168.123.62:3000/offers?perPage=1000${sortBy ? `&sortBy=${sortBy}` : ""}${sortAsc ? "&sort=asc" : "&sort=desc"}`)
            .then(response => response.json())
            .then(data => setEntries(data.items));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [sortBy, sortAsc]);

    return (
        <>
            <Header></Header>
            <Content>
                <ItemList
                    itemList={entries}
                    sortAsc={sortAsc}
                    sortBy={sortBy}
                    toggleSort={(newSort: "size" | "price" | "roomsCount") => {
                        if (newSort != sortBy) {
                            setSortBy(newSort);
                            setSortAsc(false);
                        }
                        else setSortAsc(old => !old);
                    }}
                />
            </Content>
            <Footer></Footer>
        </>
    )
}

export default App
