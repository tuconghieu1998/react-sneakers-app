import "./App.css";
import { Header } from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import { NavRoutes } from "./routes/NavRoutes";
import { useUserData } from "./contexts/UserDataProvider";

function App() {

  useUserData
  return (
    <div className="App">
      <Header />

      <NavRoutes />
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "6rem",
        }}
      />
    </div>
  );
}

export default App;
