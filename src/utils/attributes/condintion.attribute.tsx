// document.onreadystatechange = function () {
//     if (document.readyState === 'complete') {
//         Array.prototype.forEach.call(
//             document.body.querySelectorAll('*[data-if]'),
//             applyDataCondition,
//         )
//     }
// }
// function applyDataCondition(element: any) {
//     console.log(element)
//     const condition: string = element.dataset.if
// if (condition === 'false') {
//     element.remove()
// }
//     element.forEach((el: any) => {
//         const condition: any = el.dataset.if
//         if (condition === 'false') {
//             el.remove()
//         }
//     })
// }

export {}

new MutationObserver(() => {
    if (document.readyState === 'complete') {
        Array.prototype.forEach.call(
            document.querySelectorAll('*[data-if]'),
            applyDataMask,
        )
    }
}).observe(document, { subtree: true, childList: true })

function applyDataMask(element: any) {
    const condition: string = element.dataset.if
    if (condition === 'false') {
        element.style.opacity = 0
    } else {
        element.style.opacity = 1
    }
    // element.forEach((el: any) => {
    //     const condition: any = el.dataset.if
    //     if (condition === 'false') {
    //         el.style.opacity = 0
    //     } else {
    //         el.style.opacity = 1
    //     }
    // })
}

export {}
