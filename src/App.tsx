import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";
import { GlobalStyle } from "./styles/global";
Modal.setAppElement('#root');

export function App() {
  const [isNewTranscationModalOpen,setIsNewTranscationModalOpen] = useState(false);

  function handleOpenNewTranscationModal(){
    setIsNewTranscationModalOpen(true);
  }

  function handleCloseNewTranscationModal(){
    setIsNewTranscationModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTranscationModal} />
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTranscationModalOpen} 
        onRequestClose={handleCloseNewTranscationModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
