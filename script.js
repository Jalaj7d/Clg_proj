document.addEventListener("DOMContentLoaded", function () {
    const messageInput = document.getElementById("userMessageInput");
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

function sendMessage() {
    var userInput = document.querySelector(".message-input").value;
    var chatBox = document.querySelector(".chat-box");

    // Add the user message to the chat box
    chatBox.innerHTML += "<p class='user-message'>You: " + userInput + '</p>';

    // Get the bot response
    var botResponse = getBotResponse(userInput);

    // Add the bot response to the chat box
    chatBox.innerHTML += '<p class="bot-message">' + botResponse + '</p>';

    // Clear the message input
    document.querySelector(".message-input").value = '';

    // Scroll the chat box to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userInput) {
    // Use a chatbot library to generate a response
    var response = chatbot.getResponse(userInput);

    return response;
}

// Example usage
var userInput = "How are you?";
var botResponse = getBotResponse(userInput);
console.log(userInput);
console.log(botResponse);

function toggleMode() {
    var body = document.querySelector("body");
    var toggleThumb = document.querySelector(".toggle-thumb");

    // Toggle the "dark-mode" class on the body element
    body.classList.toggle("dark-mode");

    // Update toggleThumb styles based on the applied class
    if (body.classList.contains("dark-mode")) {
        toggleThumb.style.transform = "translate(20px, -50%)";
    } else {
        toggleThumb.style.transform = "translate(0, -50%)";
    }
}