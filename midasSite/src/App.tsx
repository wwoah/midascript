import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";
import Console from "./components/Console";
import Footer from "./components/Footer";

function App() {
  const appVersion = "0.0.4";
  return (
    <>
      <div className="flex flex-col h-screen w-screen justify-between items-center">
        <div className="bg-black flex flex-row w-full h-[10%] justify-between items-center p-10">
          <Header appVersion={appVersion} />
        </div>
        <div className="bg-eggshell flex flex-col w-full h-[80%] justify-center items-center">
          <div className="flex flex-row w-full h-[20%] justify-center items-center border border-grey">
            <Search />
          </div>
          <div className="flex flex-row w-full h-[80%] justify-center items-center border border-grey">
            <Console />
          </div>
        </div>
        <div className="bg-black flex flex-row w-full h-[10%] justify-center items-center">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
