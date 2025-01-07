document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const generateButton = document.getElementById('generate-button');
    const qrCodeContainer = document.getElementById('qr-code');

    generateButton.addEventListener('click', function () {
        const text = textInput.value;

        if (text) {
            qrCodeContainer.innerHTML = ''; // Clear previous QR code
            const qrcode = new QRCode(qrCodeContainer, {
                text: text,
                width: 128,
                height: 128
            });
        }
    });
});
