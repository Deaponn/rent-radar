import Header from "./header/Header"
import Content from "./content/Content"
import Footer from "./footer/Footer"
import './App.css'
import ItemList from "./content/ItemList"
import { useEffect, useState } from "react"

function App() {
    const [entries, setEntries] = useState([]);
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
