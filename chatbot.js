document.getElementById('user-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value;
    if (message.trim() === '') return;

    displayMessage(message, 'user');
    inputField.value = '';

    // Пример ответов бота техподдержки
    const supportResponses = {
        'где вы находитесь': 'Наш офис находится по адресу: ул. Примерная, д. 12, г. Гродно, Беларусь',
        'здравствуйте': 'Здравствуйте! Чтобы вы хотели узнать?',
        'где можно узнать характеристики камеры': 'Вы сможете узнать характеристики камеры на странице выбранного товара',
        'как связаться с поддержкой': 'Вы можете связаться с нашей поддержкой через email support@example.com или по телефону +123456789.',
        'пока': 'До свидания! Хорошего дня!'
    };

    let botMessage = 'Извините, я не понял вашего вопроса. Попробуйте еще раз.';
    Object.keys(supportResponses).forEach(key => {
        if (message.toLowerCase().includes(key)) {
            botMessage = supportResponses[key];
        }
    });

    setTimeout(() => {
        displayMessage(botMessage, 'bot');
    }, 500);
}

function displayMessage(message, sender) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function toggleChat() {
    const chatPanel = document.getElementById('chat-panel');
    const openChatBtn = document.getElementById('open-chat-btn');
    const closeChatBtn = document.getElementById('close-chat-btn');
    if (chatPanel.style.display === 'none') {
        chatPanel.style.display = 'block';
        openChatBtn.style.display = 'none';
    } else {
        chatPanel.style.display = 'none';
        openChatBtn.style.display = 'block';
    }
}
