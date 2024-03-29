import "./Tag.css";

const COLORS_DICT = {
    "React Native": "#61DBFB",
    React: "#61DBFB",
    Firebase: "#FFA000",
    "Ruby on Rails": "#cc0000",
    Python: "#FFD43B",
    Swift: "#1B5EA9",
    NodeJS: "#68a063",
    "Google Cloud": "#cc0000",
    MongoDB: "#4DB33D",
    Julia: "#A020F0",
    "Machine Learning": "gray",
    "Computer Vision": "#cc0000",
    "Data Scraping/Parsing": "blue",
    Expo: "blue",
    "A.I.": "purple",
    "Core Data": "green",
    GoLang: "#29BEB0",
    "C++": "#044F88",
    "Systems Programming": "Red",
    "Open Source": "#e64980",
    TypeScript: "#3178c6",
};

export default function Tag({ title }) {
    const mainColor = COLORS_DICT[title] ? COLORS_DICT[title] : "darkgray";

    return (
        <div className="Tag-container" style={{ backgroundColor: mainColor }}>
            <p className="Tag-title">{title}</p>
        </div>
    );
}
