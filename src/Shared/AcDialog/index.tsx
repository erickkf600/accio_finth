import React, { ReactElement, useState } from 'react'
import { Dialog, DialogContent } from '@material-ui/core'
const AcDialog: React.FC<any> = input => {
    const [openDialog, setOpen] = useState(false)

    const open = () => {
        setOpen(true)
    }
    const close = () => {
        setOpen(false)
    }
    return (
        <Dialog open={openDialog} onClose={close}>
            <DialogContent>{input.children}</DialogContent>
        </Dialog>
    )
}

export default AcDialog
