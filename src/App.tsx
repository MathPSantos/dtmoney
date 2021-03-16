import { useState } from 'react'

import Modal from 'react-modal'

import { Dashboard } from "./components/Dashboard"
import { Header } from "./components/Header"
import { NewTransactionsModal } from './components/NewTransactionsModal'
import { GlobalStyle } from "./styles/global"

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModal(false)
  }
  
  return (
    <>
      <Header 
        onOpenNewTransaction={handleOpenNewTransactionModal} 
      />

      <Dashboard />

      <NewTransactionsModal isOpen={isNewTransactionModal} onRequestClose={handleCloseNewTransactionModal}  />

      <GlobalStyle />
    </>
  );
}
