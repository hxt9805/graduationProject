const loading = {
    inserted: function (el, binding) {
        el.addEventListener('click', () => {
            binding.value()
        })
    },
}

export default loading