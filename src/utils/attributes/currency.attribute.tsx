new MutationObserver(() => {
    Array.prototype.forEach.call(
        document.body.querySelectorAll('*[data-currency]'),
        applyDataMask,
    )
}).observe(document, { subtree: true, childList: true })

function applyDataMask(field: any) {
    field.addEventListener('keyup', onInput)
    function onInput(e: KeyboardEvent) {
        let { value } = e.target as HTMLInputElement
        if (value.length === 1) {
            value = '0' + value
        }
        if (['Backspace', 'Delete'].includes(e.key)) {
            return
        }
        value = parseFloat(
            value.replace(/[^\d]/g, '').replace(/(\d\d?)$/, '.$1'),
        ).toFixed(2)

        if (value === '0.00' || value === 'NaN') {
            return
        }

        field.value = value
    }
}

export {}
