import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Movimentacoes from './Movimentacoes'
import Resumo from './Resumo'
import Carteira from './Carteira'
import Tabs from './Tabs'
import Dividendos from './Dividendos'
import './investiments.scss'
import Estimativas from './Estimativas'
import { useSessionStorage } from '../../components/SelectMounth/toggle.provider'
const Investiments: React.FC = () => {
    const { selected } = useSessionStorage()
    return (
        <div>
            <Tabs />
            <div style={{ marginTop: '40px' }}>
                <Switch>
                    <Route exact path="/investimentos/resumo">
                        <Resumo month={selected} />
                    </Route>
                    <Route exact path="/investimentos/movimentacoes">
                        <Movimentacoes />
                    </Route>
                    <Route exact path="/investimentos/carteira">
                        <Carteira />
                    </Route>
                    <Route exact path="/investimentos/dividendos">
                        <Dividendos />
                    </Route>
                    <Route exact path="/investimentos/estimativas">
                        <Estimativas />
                    </Route>
                    <Redirect from="/investimentos" to="investimentos/resumo" />
                </Switch>
            </div>
        </div>
    )
}

export default Investiments
