let stompClient = null;

function connect() {
    const socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/public', function (message) {
            showMessage(JSON.parse(message.body));
        });
    });
}

function sendMessage() {
    const messageContent = document.getElementById("message").value;
    if (messageContent) {
        const message = {
            from: document.getElementById("username").value || "User",
            text: messageContent
        };
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
        document.getElementById("message").value = '';
    }
}

function showMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.textContent = message.from + ": " + message.text;
    chatBox.appendChild(messageElement);
}

connect();
