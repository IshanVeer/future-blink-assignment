import { useState } from "react";
import "./App.css";
import Flow from "./components/flowchart/Flow";
import Modal from "./components/ui/Modal";
import LeadsContainer from "./components/flowchart/LeadsContainer";

function App() {
  const [isLeadsContainerOpen, setIsLeadsContainerOpen] = useState(false);

  const openLeadsContainerHandler = () => {
    setIsLeadsContainerOpen(true);
  };
  const closeLeadsContainerHandler = () => {
    setIsLeadsContainerOpen(false);
  };

  return (
    <div className="container">
      {isLeadsContainerOpen && (
        <LeadsContainer onClose={closeLeadsContainerHandler} />
      )}
      <Flow onOpen={openLeadsContainerHandler} />
    </div>
  );
}

export default App;
