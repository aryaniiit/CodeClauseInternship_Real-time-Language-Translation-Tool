document.getElementById('translateBtn').addEventListener('click', function() {
    const sourceText = document.getElementById('sourceText').value;
    const targetLang = document.getElementById('langSelect').value;
    translateText(sourceText, targetLang);
});

function translateText(sourceText, targetLang) {
    const apiKey = 'YOUR_API_KEY_HERE';
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const data = {
        q: sourceText,
        target: targetLang
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('translationResult').innerText = data.data.translations[0].translatedText;
    })
    .catch(error => {
        console.error('Error translating text:', error);
    });
}
