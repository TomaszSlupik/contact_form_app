const send = document.querySelector('.send')
const btn1 = document.querySelector('.btn1')
const inputName = document.querySelector('.inputName')
const inputEmail = document.querySelector('.inputEmail')
const inputMessage = document.querySelector('.inputMessage')

const sendAll = () => {
    if (inputName.value == "" || inputEmail.value == "" || inputMessage.value == "") {
        send.style.display = 'block'
        send.style.color = 'red'
        send.textContent = 'Wypełnij wszystkie pola'
    }
    else {
        sendMsg()
    }
}


const sendMsg = () => {
    send.style.display = 'block'
    send.style.color = 'green'
        send.textContent = 'Twoja wiadomość została wysłana'
}

btn1.addEventListener('click', sendAll)


