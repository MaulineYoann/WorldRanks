import Header from "./Components/Header";
import SectionComponent from "./Components/Section";
import MainComponent from "./Components/Main";

function App() {
  return (
    <>
      <Header />
      <SectionComponent>
        <MainComponent />
      </SectionComponent>
    </>
  );
}

export default App;
