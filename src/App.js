import React, { useState } from "react";
import { MainContainer } from "./styles/AppStyles";
import { combineReducers, legacy_createStore as createStore } from "redux";
import Navbar from "./components/Navbar";

import PersonalDetails from "./components/PersonalDetails";
import PersonalDetail from "./store/reducer/personalDetail";
import { Provider } from "react-redux";
import PreviewButton from "./components/PreviewButton";
import Modal from "./components/Modal";
const rootReducer = combineReducers({
  PersonalDetails: PersonalDetail,
});
const App = () => {
  const store = createStore(rootReducer);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Provider store={store}>
      <MainContainer>
        <Navbar title="Online Resume Builder" />
        <PersonalDetails />
        <PreviewButton onClick={openModal} />
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2>This is a Modal</h2>
          <p>Hello, I am a pop-up modal using Styled Components!</p>
        </Modal>
      </MainContainer>
    </Provider>
  );
};

export default App;
