
import { Routes, Route } from "react-router-dom";
import MainComponent from "../Components/Main";
import CountryDetails from "../Components/Features/CountryDetails";
import NotFound from "../Pages/NotFound";
import routes from "./Routes";

const Router = () => {
  return (
    <Routes>
      <Route path={routes.index} element={ <MainComponent /> } />
      <Route path={routes.country} element={ <MainComponent /> } />
      <Route path={routes.CountryDetails} element={ <CountryDetails /> } />
      <Route path={routes.error} element={ <NotFound /> } />
    </Routes>
  );
};

export default Router;
