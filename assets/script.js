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

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.innerHTML = "<p>✅ Teşekkürler! Mesajınız alındı.</p>";

            // 4 saniye sonra modal otomatik kapanır
            setTimeout(() => {
                modal.style.display = "none";
                // Formu tekrar eski haline getir
                form.innerHTML = `
                    <input type="text" name="name" placeholder="Adınız Soyadınız" required>
                    <input type="email" name="email" placeholder="E-posta Adresiniz" required>
                    <textarea name="message" placeholder="Mesajınız" rows="5" required></textarea>
                    <button type="submit">Gönder</button>
                `;
            }, 4000);
        } else {
            form.innerHTML = "<p>⚠️ Bir hata oluştu, lütfen tekrar deneyin.</p>";
        }
    } catch (error) {
        form.innerHTML = "<p>⚠️ Bir hata oluştu, lütfen internet bağlantınızı kontrol edin.</p>";
    }
});
