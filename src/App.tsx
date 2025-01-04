import { BrowserRouter } from "react-router-dom"
import Header from "./Components/Header"
import SectionComponent from "./Components/Section"

import Router from "./router/RoutesComponent"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SectionComponent>
          <Router />
        </SectionComponent>
      </BrowserRouter>
    </>
  );
}

export default App;
