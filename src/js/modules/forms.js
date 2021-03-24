import checkNumInputs from './checkNumInputs'


const forms = (state) => {
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const message = {
        success: 'Спасибо! Мы с вами свяжемся.',
        loading: 'Загрузка...',
        failure: 'Что-то пошло не так.'
    }
    
    checkNumInputs('input[name="user_phone"]')
    
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text()
    }   

    const clearInputs = () => {
        inputs.forEach(i => {
            i.value = ''
        })
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault()
            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            item.appendChild(statusMessage)

            const formData = new FormData(item)
            if (item.getAttribute('data-calc') === 'end'){
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res)
                    statusMessage.textContent = message.success
                    return
                })
                .catch(() => {statusMessage.textContent = message.failure})
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                })

        })
    })

   

}

export default forms