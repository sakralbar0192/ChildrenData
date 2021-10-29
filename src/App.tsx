import AppRouter from "./Router/AppRouter";
import  cl from './app.module.scss';
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className={cl.app}>
        <Header />
        <main>
          <AppRouter />
        </main>
        <Footer />       
      </div>
    </BrowserRouter>
  );
}

export default App;
