import React, { useState } from "react";
import { MainContainer } from "./styles/AppStyles";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import Navbar from "./components/Navbar";
import PersonalDetailReducer from "./store/reducer/personalDetailReducer";
import Modal from "./components/Modal";
import Button from "./styles/Button";
import EducationalDetailReducer from "./store/reducer/educationalDetailReducer";
import skillReducer from "./store/reducer/skillReducer";
import ProjectDetailReducer from "./store/reducer/projectDetailReducer";
import CertificateDetailReducer from "./store/reducer/certificateDetailReducer";
import ExperienceDetailReducer from "./store/reducer/experienceDetailReducer";
import SkillsDetailsForm from "./components/SkillsDetailsForm";
import CertificateDetailsForm from "./components/CertificateDetailsForm";
import EducationDetailsForm from "./components/EducationDetailsForm";
import ExperienceDetailsForm from "./components/ExperienceDetailsForm";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import ProjectDetailsForm from "./components/ProjectDetailsForm";
import { validateForm } from "./functions/validate";

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
  const [error, setError] = useState({});
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    const errors = validateForm(store);
    setError(errors);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (Object.keys(errors).length === 0) {
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainContainer>
          <Navbar title="Online Resume Builder" />
          <PersonalDetailsForm error={error} setError={setError} />
          <EducationDetailsForm />
          <SkillsDetailsForm />
          <ProjectDetailsForm />
          <CertificateDetailsForm />
          <ExperienceDetailsForm />
          <Button onClick={openModal}>Preview</Button>
          <Modal isOpen={modalOpen} onClose={closeModal} />
        </MainContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
