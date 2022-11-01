import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import BancoDados from './BancoDados'
import Emprestimos from './Emprestimos'
import Kanban from './Kanban'
import SideBar from './sideBar'
import TodoList from './TodoList'
import './tools.scss'
const Tools: React.FC = () => {
    return (
        <div>
            <SideBar />
            <div style={{ marginLeft: '300px' }}>
                <Switch>
                    <Route exact path="/ferramentas/emprestimos">
                        <Emprestimos />
                    </Route>
                    <Route exact path="/ferramentas/banco-dados">
                        <BancoDados />
                    </Route>
                    <Route exact path="/ferramentas/kanban">
                        <Kanban />
                    </Route>
                    <Route exact path="/ferramentas/todo-list">
                        <TodoList />
                    </Route>
                    <Redirect
                        from="/ferramentas"
                        to="ferramentas/emprestimos"
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Tools
