document.getElementById("send-btn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("response-msg").innerText = "Thank you for your message! I will get back to you soon.";
});