const loginScreen = document.getElementById('login-screen');
const chatScreen = document.getElementById('chat-screen');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const sendBtn = document.getElementById('send-btn');
const userPrompt = document.getElementById('user-prompt');
const chatBox = document.getElementById('chat-box');

// Switch from Sign-In to Chat Screen
loginBtn.addEventListener('click', () => {
    const email = document.getElementById('email-input').value;
    if (email.trim() !== "") {
        loginScreen.classList.add('hidden');
        chatScreen.classList.remove('hidden');
    } else {
        alert("Please enter an email to sign in.");
    }
});

// Sign Out
logoutBtn.addEventListener('click', () => {
    chatScreen.classList.add('hidden');
    loginScreen.classList.remove('hidden');
});

// Handle Sending Messages
sendBtn.addEventListener('click', async () => {
    const text = userPrompt.value.trim();
    if (!text) return;

    // Show user message
    appendMessage(text, 'user');
    userPrompt.value = '';

    // Show temporary thinking message
    const loadingMsg = appendMessage("Thinking...", 'ai');

    // NOTE: In Step 3, you will replace this timeout with a real API call
    setTimeout(() => {
        loadingMsg.textContent = "This is a placeholder AI response! Connect a backend API to get real answers.";
    }, 1000);
});

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);
    msgDiv.textContent = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    return msgDiv;
}
