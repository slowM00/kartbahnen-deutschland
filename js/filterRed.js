// JS: Filter image so only rgb(177,17,17) stays visible, rest transparent
function filterRedOnly(imgSrc, canvasId) {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imgSrc;
    img.onload = function() {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Automatische Skalierung und Zentrierung
        const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
        const drawWidth = img.width * scale;
        const drawHeight = img.height * scale;
        const x = (canvas.width - drawWidth) / 2;
        const y = (canvas.height - drawHeight) / 2;
        ctx.drawImage(img, x, y, drawWidth, drawHeight);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let i = 0; i < data.length; i += 4) {
            const r = data[i];
            const g = data[i+1];
            const b = data[i+2];
            // Tolerance for similar reds
            if (Math.abs(r-177) > 30 || Math.abs(g-17) > 30 || Math.abs(b-17) > 30) {
                data[i+3] = 0; // Make pixel transparent
            }
        }
        ctx.putImageData(imageData, 0, 0);
    };
}
// Usage example (in HTML):
// <canvas id="mskartCanvas"></canvas>
// <script>filterRedOnly('../img/strecke ausschnitt2.png', 'mskartCanvas');</script>
