import { createContext, ReactNode, useContext, useEffect, useState } from 'react' 

import { api } from '../services/api'

interface Transaction {
    id: number,
    title: string
    type: string
    category: string
    amount: number,
    createdAt: string
}

type TransctionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionContextData {
    transactions: Transaction[]
    createTransaction: (transactionInput: TransctionInput) => Promise<void>
}

const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)

export function TransactionProvider({children}: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('http://localhost:3000/api/transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    async function createTransaction(transactionInput: TransctionInput) {      
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data

        setTransactions([
            ...transactions,
            transaction
        ])
    }
    
    return(
        <TransactionContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionContext)

    return context
} 