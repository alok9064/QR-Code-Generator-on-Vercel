document.getElementById('qrForm').addEventListener('submit', 
    async function(e) {
        e.preventDefault();
        const url = document.getElementById('urlInput').value;

        const res = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })
        });

        const data = await res.json();
        if (data.qrBase64) {
            const qrImage = document.getElementById('qrImage');
            const downloadBtn = document.getElementById('downloadBtn');

            // Set src of QR image to Base64
            qrImage.src = data.qrBase64;

            // Set download link to Base64 so user can download directly
            downloadBtn.href = data.qrBase64;
            downloadBtn.download = 'qr_code.png';

            // Show QR image and download button
            qrImage.style.display = 'inline-block';
            downloadBtn.style.display = 'inline-block';
        } else {
            alert('❌ Failed to generate QR code. Please try again.');
        }
    }
);

// ------------------ Rest of your script stays exactly the same ------------------

// Dark/light theme toggle
const toggleSwitch = document.getElementById('darkToggle');
const modeIcon = document.getElementById('modeIcon');

function setTheme(mode) {
  if (mode === 'light') {
    document.body.classList.add('light');
    toggleSwitch.checked = true;
    localStorage.setItem('theme', 'light');
    modeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light');
    toggleSwitch.checked = false;
    localStorage.setItem('theme', 'dark');
    modeIcon.textContent = '🌙';
  }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

toggleSwitch.addEventListener('change', () => {
  const newTheme = toggleSwitch.checked ? 'light' : 'dark';
  setTheme(newTheme);
});

// Active link highlight
const navLinks = document.querySelectorAll('.active-page');
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Contact form submission
const form = document.getElementById("cont-msg-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: jsonData
  })
  .then(async (response) => {
    const result = await response.json();
    if (response.status === 200) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed to send message: " + result.message);
    }
  })
  .catch(error => {
    console.error("Error:", error);
    alert("❌ Something went wrong. Please try again later.");
  });
});
