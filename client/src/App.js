import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <header>Div:easyOn</header>
            <main>
                <AppRouter />
            </main>
            <footer>Sample Text</footer>
        </BrowserRouter>
    );
}

export default App;
