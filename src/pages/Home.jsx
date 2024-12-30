import Header from "../components/Home/Header";
import Search from "../components/Home/Search.jsx";
import Content from "../components/Home/Content.jsx";

function Home() {
    return (
        <>
            <div
                className="w-[100%] flex justify-around items-center h-[100vh] flex-col"
            >
                <Header/>
                <Search/>
                <Content/>
            </div>
        </>
    )
}

export default Home;