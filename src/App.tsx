import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import SectionComponent from "./Components/Section";
import MainComponent from "./Components/Main";
import CountryDetails from "./Components/Features/CountryDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SectionComponent>
          <Routes>
            <Route path="/country" element={ <MainComponent /> } />
            <Route path="/country/:countryId" element={ <CountryDetails /> }/>
          </Routes>
        </SectionComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
