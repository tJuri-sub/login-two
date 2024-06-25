import { Header } from "./components/Header";
import { RegForm } from "./components/Regform";

function App() {
  return (
    <>
      <div className="relative min-h-screen">
        <Header />
        <div className="h-[90vh] flex justify-center items-center">
          <RegForm />
        </div>
      </div>
    </>
  );
}

export default App;
