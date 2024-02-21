import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <header></header>
            <main>
                <AppRouter />
            </main>
            <footer></footer>
        </BrowserRouter>
    );
}

export default App;
