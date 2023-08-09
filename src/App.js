import { MainContainer } from "./styles/AppStyles";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";

const App = () => {
  return (
    <MainContainer>
      <Navbar title="Online Resume Builder" />
      <PersonalDetails />
    </MainContainer>
  );
};

export default App;
