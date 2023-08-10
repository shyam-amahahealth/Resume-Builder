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
import ProjectDetailReducer from "./store/reducer/projectDetailReducer";
import ProjectDetails from "./components/ProjectDetails";
import CertificateDetail from "./components/CertificateDetails";
import CertificateDetailReducer from "./store/reducer/certificateDetailReducer";
import ExperienceDetailReducer from "./store/reducer/experienceDetailReducer";
import ExperienceDetails from "./components/ExperienceDetails";

const rootReducer = combineReducers({
  PersonalDetails: PersonalDetailReducer,
  EducationDetails: EducationalDetailReducer,
  Skill: skillReducer,
  ProjectDetail: ProjectDetailReducer,
  CertificateDetail: CertificateDetailReducer,
  experienceDetail: ExperienceDetailReducer,
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
          <ProjectDetails />
          <CertificateDetail />
          <ExperienceDetails />
          <Button onClick={openModal}>Preview</Button>
          <Modal isOpen={modalOpen} onClose={closeModal} />
        </MainContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
