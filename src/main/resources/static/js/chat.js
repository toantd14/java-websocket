let stompClient = null;
let userId = null; // Unique ID for the user

function connect() {
    userId = generateUUID(); // Assign a unique ID to the user
    const socket = new SockJS('/chat');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, onConnected, onError);
}

// Callback for successful connection
function onConnected(frame) {
    console.log('Connected: ' + frame);
    stompClient.subscribe('/topic/public', onMessageReceived);
}

// Callback for connection error
function onError(error) {
    console.error('WebSocket connection error:', error);
}

// Send a message to the server
function sendMessage() {
    const messageContent = getInputValue("message");
    const username = getInputValue("username") || "Unknown";

    if (messageContent) {
        const message = createMessage(username, messageContent, userId);
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(message));
        clearInput("message");
    }
}

// Handle received messages
function onMessageReceived(message) {
    try {
        const parsedMessage = JSON.parse(message.body);
        displayMessage(parsedMessage);
    } catch (error) {
        console.error('Invalid JSON format:', error, 'Message body:', message.body);
    }
}



// Utility: Create a message object
function createMessage(from, text, id) {
    return { from, text, id, timestamp: new Date().toLocaleTimeString() };
}

// Utility: Display a message in the chat box
function displayMessage(message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");

    // Add CSS class based on the sender
    if (message.id === userId) {
        messageElement.classList.add("message", "sent");
    } else {
        messageElement.classList.add("message", "received");
    }

    // Create the message text
    const textElement = document.createElement("div");
    textElement.textContent = `${message.from}: ${message.text}`;

    // Create the timestamp
    const timestampElement = document.createElement("div");
    timestampElement.classList.add("timestamp");
    timestampElement.textContent = message.timestamp;

    // Append text and timestamp to the message element
    messageElement.appendChild(textElement);
    messageElement.appendChild(timestampElement);

    chatBox.appendChild(messageElement);
}

// Utility: Get input value by ID
function getInputValue(inputId) {
    return document.getElementById(inputId).value.trim();
}

// Utility: Clear input field by ID
function clearInput(inputId) {
    document.getElementById(inputId).value = '';
}

// Generate a UUID
function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("message");
    if (messageInput) {
        messageInput.addEventListener("keypress", function (event) {
            if (event.keyCode === 13 || event.key === "Enter") { // Check for Enter key using key code
                event.preventDefault(); // Prevent default form submission behavior
                sendMessage(); // Call the sendMessage function
            }
        });
    } else {
        console.error('Input element with id "message" not found.');
    }
});

// Initialize connection on page load
connect();