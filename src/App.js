import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
    const freePrice = {
        type: "Free",
        price: 0,
        paragraph:
            "Have a try at the world's most powerful & user friendly pos software available now",
        benefits: [
            "Unlimited listings",
            "Simple Analytics",
            "1 Account",
            "Branded with Roman",
        ],
    };
    return (
        <div className="App">
            <header>
                <Navbar></Navbar>
            </header>
            <div className="pricing-blocks">
                <Pricing {...freePrice} />
                <Pricing {...freePrice} />
                <Pricing {...freePrice} />


            </div>
        </div>
    );
}

export default App;
