const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const sendButton = document.getElementById('send');

function add(text, type) {
  const message = document.createElement('div');

  message.className = 'msg';

  if (type === 'user') {
    message.classList.add('user');
  }

  message.innerText = text;

  chat.appendChild(message);

  chat.scrollTop = chat.scrollHeight;

  return message;
}

function sendMessage() {
  const text = input.value.trim();

  if (!text) {
    return;
  }

  add('YOU: ' + text, 'user');

  input.value = '';

  const processingMessage = add(
    'J.A.R.V.I.S: Processing...',
    'ai'
  );

  setTimeout(() => {
    processingMessage.innerText =
      'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';
  }, 1000);
}

sendButton.addEventListener('click', sendMessage);

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
