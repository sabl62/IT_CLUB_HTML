const formData = new FormData();
formData.append("access_key", "33d72b47-1fdb-4d74-b2b7-5f424a610816");
formData.append("name", "John Doe");
formData.append("email", "john@example.com");
formData.append("message", "Hello World!");

const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
});