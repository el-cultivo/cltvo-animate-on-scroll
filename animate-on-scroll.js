const debounce = require('lodash.debounce')

module.exports = ($, offset, animation_trigger_selector, animatable_selector, row_selector) => {
    const row = $(row_selector)
    const animatable = $(row_selector +" "+animatable_selector)
    if (row.length === 0 || animatable.length === 0) {return}
    const w = $(window)
    const d = $(document)
    let animatable_pos = row.offset().top
    let w_height = w.height()
    let animated = false

    const animate = () => {
        if (animated) {return}
        if (d.scrollTop() + w_height > animatable_pos + offset) {
            animatable.addClass(animation_trigger_selector.replace('.', ''))
            animated = true
            console.log("animated "+ row_selector, animated);
        }
    }

    animate()
    w.on('scroll', animate)
    w.on('resize', debounce(() => {
        w_height = w.height()
        animatable_pos = row.offset().top
    }, 400))
}