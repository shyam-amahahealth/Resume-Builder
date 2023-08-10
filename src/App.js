import React, { useState } from "react";
import { MainContainer } from "./styles/AppStyles";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import Navbar from "./components/Navbar";
import PersonalDetails from "./components/PersonalDetails";
import PersonalDetailReducer from "./store/reducer/personalDetailReducer";
import Modal from "./components/Modal";
import Button from "./styles/Button";
import EducationDetails from "./components/EducationDetails";
import EducationalDetailReducer from "./store/reducer/educationalDetailReducer";
import SkillsDetails from "./components/SkillsDetails";
import skillReducer from "./store/reducer/skillReducer";

const rootReducer = combineReducers({
  PersonalDetails: PersonalDetailReducer,
  EducationDetails: EducationalDetailReducer,
  Skill: skillReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const App = () => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer>
          <Navbar title="Online Resume Builder" />
          <PersonalDetails />
          <EducationDetails />
          <SkillsDetails />
          <Button onClick={openModal}>Preview</Button>
          <Modal isOpen={modalOpen} onClose={closeModal} />
        </MainContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
