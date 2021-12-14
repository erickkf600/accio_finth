new MutationObserver(() => {
    Array.prototype.forEach.call(
        document.body.querySelectorAll('*[data-mask]'),
        applyDataMask,
    )
}).observe(document, { subtree: true, childList: true })

// document.onreadystatechange = function () {
//     if (document.readyState === 'complete') {
// Array.prototype.forEach.call(
//     document.body.querySelectorAll('*[data-mask]'),
//     applyDataMask,
// )
//     }
// }

function applyDataMask(field: any) {
    const mask: string = field.dataset.mask

    field.addEventListener('keyup', onKeyup)
    function onKeyup(e: KeyboardEvent) {
        const element = e.target as HTMLElement
        if (element.tagName.toUpperCase() === 'INPUT') {
            let { value } = e.target as HTMLInputElement
            let val: string = value.replace(/\D/g, '')
            const pad = mask.replace(/\D/g, '').replace(/0/g, '_')
            const formated = val + pad.substring(0, pad.length - val.length)

            if (['Backspace', 'Delete'].includes(e.key)) {
                return
            }

            let valueMaskPos = 0
            val = ''

            for (let i = 0; i < mask.length; i++) {
                if (isNaN(parseInt(mask.charAt(i)))) {
                    val += mask.charAt(i)
                } else {
                    val += formated[valueMaskPos++]
                }
            }
            if (val.indexOf('_') > -1) {
                val = val.substr(0, val.indexOf('_'))
            }
            field.value = val
            field.setAttribute('maxLength', mask.length)
        }
    }
}

export {}
