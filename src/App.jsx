import { Icon } from ".";
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
        <div className="z-10 absolute bottom-0 left-0 opacity-80">
          <Icon style={{ opacity: 0.2, transform: "translate(-30%, 40%)" }} />
        </div>
      </div>
    </>
  );
}

export default App;
