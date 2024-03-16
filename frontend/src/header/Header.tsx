export default function Header() {
    return (
        <header className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-col items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 py-1">
                    <img width="96" height="96" src="https://img.icons8.com/nolan/96/radar.png" alt="radar" />
                    <span className="ml-3 text-7xl">Rent Radar</span>
                </a>
            </div>
        </header>
    )
}