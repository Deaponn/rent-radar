export type Item = {
    imageUrl?: string;
    address?: string;
    size?: number;
    price?: number;
    deposit?: number;
    roomsCount?: number;
    separateKitchen?: boolean;
    heatingType?: "Gazowe" | "Elektryczne" | "Miejskie" | "Inne";
    waterType?: "Gazowe" | "Elektryczne" | "Miejskie" | "Inne";
    bathOrShower?: "Wanna" | "Prysznic";
    url: string;
}

interface IItemListProps {
    itemList: Item[];
    sortAsc: boolean;
    sortBy?: "size" | "price" | "roomsCount";
    toggleSort: (newSortBy: "size" | "price" | "roomsCount") => void;
}

export default function ItemList({ itemList, sortAsc, sortBy, toggleSort }: IItemListProps) {
    return (
        <>
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                    <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Zdjęcie</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Adres</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800"
                            onClick={() => toggleSort("size")}
                        >Powierzchnia {(sortBy == "size" && (sortAsc ? "👇" : "☝️")) || "🔀"}</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800"
                            onClick={() => toggleSort("price")}
                        >Cena {(sortBy == "price" && (sortAsc ? "👇" : "☝️")) || "🔀"}</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Kaucja</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800"
                            onClick={() => toggleSort("roomsCount")}
                        >Liczba pokoi {(sortBy == "roomsCount" && (sortAsc ? "👇" : "☝️")) || "🔀"}</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Osobna kuchnia</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Ogrzewanie</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Woda</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Kąpielkompleks</th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList.map(({ imageUrl, address, size, price, deposit, roomsCount, separateKitchen, heatingType, waterType, bathOrShower, url }) => (
                        <tr className="hover:bg-slate-800">
                            <td className={`px-4 py-3 text-${imageUrl ? "lg" : "4xl"} text-white`}>
                                {imageUrl ?
                                    (
                                        <img src={imageUrl} className="object-contain max-w-40 max-h-32"></img>
                                    ) : "🫥"}
                            </td>
                            <td className={`px-4 py-3 text-${address ? "lg" : "4xl"} text-white`}>{address || "🫥"}</td>
                            <td className={`px-4 py-3 text-${size ? "lg" : "4xl"} text-white`}>{size ? size + " m²" : "🫥"}</td>
                            <td className={`px-4 py-3 text-${price ? "lg" : "4xl"} text-white`}>{price ? price + " zł" : "🫥"}</td>
                            <td className={`px-4 py-3 text-${deposit ? "lg" : "4xl"} text-white`}>{deposit ? deposit + " zł" : "🫥"}</td>
                            <td className={`px-4 py-3 text-${roomsCount ? "lg" : "4xl"} text-white`}>{roomsCount || "🫥"}</td>
                            <td className="px-4 py-3 text-4xl text-white">{separateKitchen != undefined ? (separateKitchen ? "✅" : "❌") : "🫥"}</td>
                            <td className={`px-4 py-3 text-${heatingType ? "lg" : "4xl"} text-white`}>{heatingType || "🫥"}</td>
                            <td className={`px-4 py-3 text-${waterType ? "lg" : "4xl"} text-white`}>{waterType || "🫥"}</td>
                            <td className="px-4 py-3 text-4xl text-white">{bathOrShower == "Wanna" ? "🛁" : (bathOrShower ? "🚿" : "🫥")}</td>
                            <td className="px-4 py-3 text-lg text-white">
                                <a href={url} target="_blank">
                                    Przejdź do oferty
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}