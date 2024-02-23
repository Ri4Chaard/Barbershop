import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <header>Перукарня місто Харків</header>
            <main>
                <AppRouter />
            </main>
            <footer>Div:easyOn</footer>
        </BrowserRouter>
    );
}

export default App;
