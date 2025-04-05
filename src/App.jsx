import { useState } from "react";
import "./App.css";
import Flow from "./components/flowchart/Flow";
import Modal from "./components/ui/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };
  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      {isModalOpen && <Modal onClose={closeModalHandler} />}
      <Flow onOpen={openModalHandler} />
    </div>
  );
}

export default App;
