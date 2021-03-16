import { Container } from './styles'

import incomePng from '../../assets/income.svg'
import outcomePng from '../../assets/outcome.svg'
import totalPng from '../../assets/total.svg'

export function Summary() {
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomePng} alt="Entrada"/>
        </header>
        <strong>R$ 1800,00</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomePng} alt="Saída"/>
        </header>
        <strong>- R$ 500,00</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalPng} alt="Total"/>
        </header>
        <strong>R$ 1300,00</strong>
      </div>
    </Container>
  )
}