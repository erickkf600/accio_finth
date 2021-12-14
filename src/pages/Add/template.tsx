import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import { Cards } from '../../interfaces/Cards.interface'
import { Month } from '../../interfaces/MonthResponse.interface'
import { Users } from '../../interfaces/Users.interface'
import Resume from './resume'
const Template: React.FC<any> = input => {
    const arrayPurchases: any = () => {
        return [...Array(input.purchases || 0).keys()]
    }
    return (
        <section className="add">
            <h1>Adicionar compra</h1>
            <div className="add__content">
                <div className="card">
                    <form className="add__content-form">
                        <div className="add__content-form-user">
                            <p>Selecione o Usuário</p>
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Usuário"
                                variant="filled"
                                defaultValue=""
                                error={!!input.errors.user}
                                {...input.register('user')}
                            >
                                {input.users.map((el: Users) => (
                                    <MenuItem key={el.id} value={el.id}>
                                        {el.name}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        {arrayPurchases().map((_: any, index: number) => (
                            <div
                                className="add__content-form-purchase"
                                key={index}
                            >
                                <TextField
                                    id="filled-basic"
                                    label="Nome da compra"
                                    defaultValue=""
                                    error={
                                        !!input.errors?.purchases?.[index]
                                            ?.purch_name
                                    }
                                    {...input.register(
                                        `purchases.[${index}].purch_name`,
                                    )}
                                    variant="filled"
                                />
                                <TextField
                                    label="Valor"
                                    inputProps={{
                                        'data-currency': '',
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*',
                                    }}
                                    defaultValue=""
                                    error={
                                        !!input.errors?.purchases?.[index]
                                            ?.value
                                    }
                                    {...input.register(
                                        `purchases.[${index}].value`,
                                    )}
                                    variant="filled"
                                />
                                <TextField
                                    select
                                    label="Cartão"
                                    defaultValue=""
                                    variant="filled"
                                    error={
                                        !!input.errors?.purchases?.[index]
                                            ?.ccard
                                    }
                                    {...input.register(
                                        `purchases.[${index}].ccard`,
                                    )}
                                >
                                    {input.cards.map((el: Cards, i: number) => (
                                        <MenuItem key={i} value={el.id}>
                                            {el.name.captalizeCase()}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    name="mounth"
                                    variant="filled"
                                    label="Mês"
                                    defaultValue=""
                                    error={
                                        !!input.errors?.purchases?.[index]
                                            ?.mounth
                                    }
                                    {...input.register(
                                        `purchases.[${index}].mounth`,
                                    )}
                                >
                                    {input.months.map(
                                        (el: Month, i: number) => (
                                            <MenuItem key={i} value={el.num}>
                                                {el.title}
                                            </MenuItem>
                                        ),
                                    )}
                                </TextField>
                                <TextField
                                    id="filled-select-currency"
                                    select
                                    name="installment"
                                    variant="filled"
                                    label="Parc"
                                    defaultValue={1}
                                    {...input.register(
                                        `purchases.[${index}].installment`,
                                    )}
                                >
                                    {input.installments.map(
                                        (el: number, i: number) => (
                                            <MenuItem key={i} value={el}>
                                                {el}
                                            </MenuItem>
                                        ),
                                    )}
                                </TextField>
                                <TextField
                                    className="full"
                                    name="obs"
                                    variant="filled"
                                    label="Observações"
                                    defaultValue="Adiconar: Desabilitar o seleção de usuario se tiver mais de 1 array e limpar os selects"
                                    multiline
                                    rows={4}
                                    error={
                                        !!input.errors?.purchases?.[index]?.obs
                                    }
                                    {...input.register(
                                        `purchases.[${index}].obs`,
                                    )}
                                />
                                {index > 0 && (
                                    <button
                                        onClick={() =>
                                            input.setPurchases(
                                                input.purchases - 1,
                                            )
                                        }
                                        type="button"
                                        className="icon-remove-circle add__content-form-purchase-remove"
                                    ></button>
                                )}
                            </div>
                        ))}

                        <button
                            onClick={() =>
                                input.setPurchases(input.purchases + 1)
                            }
                            className="add__content-form-add"
                            type="button"
                        >
                            Adicionar <span className="icon-add"></span>
                        </button>

                        <button
                            type="button"
                            className="btn btn--light add__content-form-add-purch"
                            onClick={() => input.handleSubmit()}
                        >
                            Adicionar Compra
                        </button>
                    </form>
                    {!!input.resume.length && <Resume />}
                </div>
            </div>
        </section>
    )
}

export default Template
