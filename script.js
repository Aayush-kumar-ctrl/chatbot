// Get DOM elements
const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Event listener for send button
sendBtn.addEventListener("click", sendMessage);

// Optional: Send message on pressing Enter
userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userText = userInput.value.trim();
    if (userText === "") return;

    // Display user message
    let userMsg = document.createElement("div");
    userMsg.classList.add("message", "user-msg");
    userMsg.textContent = userText;
    chatBox.appendChild(userMsg);

    // Get bot response
    let botText = getBotResponse(userText.toLowerCase());
    let botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot-msg");
    botMsg.textContent = botText;
    chatBox.appendChild(botMsg);

    // Scroll to bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear input
    userInput.value = "";
}

// Bot responses based on keywords
function getBotResponse(query) {
    if (query.includes("price")) return "Our incense sticks start from ₹30 per pack. Bulk prices available.";
    if (query.includes("working hours") || query.includes("open")) return "We are open Monday to Saturday from 9:00 AM to 6:00 PM.";
    if (query.includes("location") || query.includes("shop")) return "Our manufacturing unit is in Gurugram, Haryana.";
    if (query.includes("contact") || query.includes("call")) return "You can contact us at 1800-11-AGARBATTI or email care@sugandh.com";
    if (query.includes("wholesale") || query.includes("bulk")) return "Sure, we supply in bulk. Please call or email us for bulk orders.";
    if (query.includes("payment")) return "We accept UPI, Paytm, PhonePe, and COD (within city limits).";
    if (query.includes("delivery")) return "We deliver within 2–4 days across India. Free shipping on orders ₹499+.";
    if (query.includes("return") || query.includes("refund")) return "Yes, we offer 7-day return policy if the product is unused.";
    if (query.includes("fragrance") || query.includes("scents")) return "We offer Rose, Sandalwood, Lavender, Mogra, and Custom Blends.";
    if (query.includes("customize") || query.includes("custom")) return "Yes, we offer custom fragrance options for bulk orders.";
    if (query.includes("natural")) return "Our incense sticks are made from 100% natural ingredients.";
    if (query.includes("handmade")) return "Yes, our sticks are handmade by local artisans.";
    if (query.includes("certified")) return "Yes, our products are ISO-certified and eco-friendly.";
    if (query.includes("sample")) return "We provide sample packs at ₹20. Free sample on orders above ₹300.";
    if (query.includes("discount") || query.includes("offer")) return "Currently, get 10% off on your first order. Use code: FIRST10";
    if (query.includes("gift") || query.includes("festival")) return "We offer festival gift packs with personalized messages.";
    if (query.includes("safety") || query.includes("harmful")) return "Our sticks are free from toxic chemicals and safe for daily use.";
    if (query.includes("uses") || query.includes("benefits")) return "They’re used for meditation, puja, relaxation, and ambiance.";
    if (query.includes("subscribe") || query.includes("monthly")) return "Yes, we offer monthly incense packs with doorstep delivery.";
    if (query.includes("international") || query.includes("abroad")) return "Yes, we export worldwide. Contact us for details.";
    return "Sorry, I didn’t understand that. Please ask another question.";
}
