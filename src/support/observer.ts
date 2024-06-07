export function observer() {
    const o = new MutationObserver((records) => {})
    const selector = document.querySelector('body > head')

    o.observe(selector, {})
}
