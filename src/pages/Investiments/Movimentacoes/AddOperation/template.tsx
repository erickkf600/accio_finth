import { MenuItem, TextField } from '@material-ui/core'
import React from 'react'
import Resume from './resume'
const Template: React.FC<any> = input => {
    const arrayOperations: any = () => {
        return [...Array(input.operation || 0).keys()]
    }
    return (
        <section className="add-movements">
            <div className="add-movements__content">
                <div className="card">
                    <form className="add-movements__content-form">
                        <div className="add-movements__content-form-user">
                            <p>Insira o total de taxas</p>
                            <TextField
                                id="filled-basic"
                                inputProps={{
                                    'data-currency': '',
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                }}
                                label="Taxas"
                                defaultValue=""
                                error={!!input.errors.fees}
                                {...input.register('fees')}
                                variant="filled"
                            />
                            <TextField
                                id="filled-basic"
                                label="Data da compra"
                                defaultValue=""
                                inputProps={{
                                    'data-mask': '00/00/0000',
                                }}
                                error={!!input.errors?.date_operation}
                                {...input.register(`date_operation`)}
                                variant="filled"
                            />
                        </div>
                        {arrayOperations().map((_: any, index: number) => (
                            <div
                                className="add-movements__content-form-purchase"
                                key={index}
                            >
                                <div className="add-movements__content-form-purchase-grid">
                                    <TextField
                                        id="filled-select-currency"
                                        select
                                        label="Operação"
                                        variant="filled"
                                        defaultValue=""
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.type_operation
                                        }
                                        {...input.register(
                                            `operation.[${index}].type_operation`,
                                        )}
                                    >
                                        {input.operations.map(
                                            (el: any, i: number) => (
                                                <MenuItem key={i} value={el.id}>
                                                    {el.title}
                                                </MenuItem>
                                            ),
                                        )}
                                    </TextField>
                                    <TextField
                                        select
                                        variant="filled"
                                        label="Tipo"
                                        defaultValue=""
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.type
                                        }
                                        {...input.register(
                                            `operation.[${index}].type`,
                                        )}
                                    >
                                        {input.tipos.map(
                                            (el: any, i: number) => (
                                                <MenuItem key={i} value={el.id}>
                                                    {el.title}
                                                </MenuItem>
                                            ),
                                        )}
                                    </TextField>

                                    <TextField
                                        id="filled-basic"
                                        label="Cód. Ativo"
                                        defaultValue=""
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.cod
                                        }
                                        {...input.register(
                                            `operation.[${index}].cod`,
                                        )}
                                        variant="filled"
                                    />
                                    <TextField
                                        label="Valor Unitário"
                                        inputProps={{
                                            'data-currency': '',
                                            inputMode: 'numeric',
                                            pattern: '[0-9]*',
                                        }}
                                        defaultValue=""
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.unity_value
                                        }
                                        {...input.register(
                                            `operation.[${index}].unity_value`,
                                        )}
                                        variant="filled"
                                    />
                                    <TextField
                                        id="filled-basic"
                                        label="Qtd"
                                        defaultValue=""
                                        type="number"
                                        error={
                                            !!input.errors?.operation?.[index]
                                                ?.qtd
                                        }
                                        {...input.register(
                                            `operation.[${index}].qtd`,
                                        )}
                                        variant="filled"
                                    />
                                    {index > 0 && (
                                        <button
                                            onClick={() =>
                                                input.setOpt(
                                                    input.operation - 1,
                                                )
                                            }
                                            type="button"
                                            className="icon-remove-circle add-movements__content-form-purchase-remove"
                                        ></button>
                                    )}
                                </div>
                                <TextField
                                    className="full-mov"
                                    name="obs"
                                    variant="filled"
                                    label="Observações"
                                    defaultValue=""
                                    multiline
                                    rows={4}
                                    error={
                                        !!input.errors?.operation?.[index]?.obs
                                    }
                                    {...input.register(
                                        `operation.[${index}].obs`,
                                    )}
                                />
                            </div>
                        ))}

                        <button
                            onClick={() => input.setOpt(input.operation + 1)}
                            className="add-movements__content-form-add"
                            type="button"
                        >
                            Adicionar <span className="icon-add"></span>
                        </button>

                        <button
                            type="button"
                            className="btn btn--light add-movements__content-form-add-purch"
                            onClick={() => input.handleSubmit()}
                        >
                            Adicionar Operação
                        </button>
                    </form>
                    {!!input.resume.length && (
                        <Resume closeForm={input.closeForm} />
                    )}
                </div>
            </div>
        </section>
    )
}

export default Template
