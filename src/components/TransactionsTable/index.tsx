import { useEffect } from "react";

import { Container } from "./styles";

import { api } from '../../services/api'

export function TransactionsTable() {
  useEffect(() => {
    api.get('http://localhost:3000/api/transactions')
      .then(response => console.log(response.data))
  }, [])

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento do website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Freela</td>
            <td>20/02/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.000,00</td>
            <td>Casa</td>
            <td>12/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}