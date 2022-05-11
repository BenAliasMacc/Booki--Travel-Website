import { SearchInput } from "../../components/SearchInput/SearchInput";

const styleButton = {
    small: {
        width: "4rem"
    },
    large: {
        width: "10rem",
        fontSize: "1rem"
    }
}

export const Home = () => {

    return (
        <main className="home">
            <h1 className="home__title">Trouver l'hôtel de vos rêves sur Booki</h1>
            <SearchInput 
                styleInput={{width: "30rem", height: "4rem", fontSize: "1rem", marginInline: "0.5rem"}} 
                styleLabel={{width: "4rem", height: "4rem"}}
                styleButton={styleButton}
            />    
        </main>
    )
}
