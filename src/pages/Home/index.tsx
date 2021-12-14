import React, { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import Deatails from '../../components/Details'
import ErrorMensages from '../../components/ErrorMensages'
import { useSessionStorage } from '../../components/SelectMounth/toggle.provider'
import { Debiters } from '../../interfaces/DebitersResponse.interface'
import * as response from './../../service/http/app.get'
import * as request from './../../service/http/app.delete'
import './home.scss'
import HomeView from './home.view'

const Home: FC = () => {
    const { selected } = useSessionStorage()
    const [debiters, setDebiter] = useState<Debiters[]>([])
    const history = useHistory()

    useEffect(() => {
        if (Object.keys(selected).length) {
            getDebiters(selected)
        }
    }, [selected])
    const getDebiters = async (selected: { num: number; year: number }) => {
        await response
            .getDebiters(selected)
            .then((res: any) => {
                setDebiter(res)
            })
            .catch(err => {
                console.error(err)
            })
    }
    const getDeleteDebitters = async (id: number) => {
        await request
            .deleteDebiters(id)
            // eslint-disable-next-line
            .then(_ => {
                getDebiters(selected)
            })
            .catch(err => {
                console.error(err)
            })
    }
    return (
        <>
            {true ? (
                <>
                    <Switch>
                        <Route exact path="/home">
                            <HomeView
                                storage={selected}
                                debiters={debiters}
                                history={history}
                                getDeleteDebitters={(id: number) =>
                                    getDeleteDebitters(id)
                                }
                            />
                        </Route>
                        <Route path="/home/:userid/:monthref">
                            <Deatails />
                        </Route>
                    </Switch>
                </>
            ) : (
                <ErrorMensages type="mounth" />
            )}
        </>
    )
}

export default Home
