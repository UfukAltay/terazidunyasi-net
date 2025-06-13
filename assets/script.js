// Modal açma kapama
const modal = document.getElementById("contactModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submit işlemi
const form = document.getElementById('contactForm');

form.addEventListener('submit', async function(e) {
    e.preventDefault(); // Sayfa yenilenmesini engeller

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        form.innerHTML = "<p>✅ Teşekkürler! Mesajınız alındı.</p>";
    } else {
        form.innerHTML = "<p>⚠️ Bir hata oluştu, lütfen tekrar deneyin.</p>";
    }
});
