import ItemsListConteiner from "./components/ItemsListConteiner";
import NavBar from "./components/navBar";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemsListConteiner
        greeting={"Bienvenidos a la mejor tienda de Camisetas"}
      />
    </>
  );
};

export default App;
