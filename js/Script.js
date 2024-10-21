document.getElementById('transitionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Отримання введених даних
    const x = document.getElementById('inputWidth').value;
    const y = document.getElementById('inputHeight').value;
    const a = document.getElementById('outputWidth').value;
    const b = document.getElementById('outputHeight').value;
    const length = document.getElementById('length').value;

    // Обчислення Висоти
    let Ah = Math.sqrt(Math.pow((a - b), 2) + Math.pow((length - 60), 2));
    Ah = Math.round(Ah)
    let f = 60.0;
    let Aha = Ah + f;
    let Bh = Math.sqrt(Math.pow((y - x), 2) + Math.pow((Ah), 2));
    let Bha = Bh + f;
    Bh = Math.round(Bh);
    Bha = Math.round(Bha);
    Aha = Math.round(Aha)

    // Виведення результту
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Висота сторін А: ${Ah} + 60 = ${Aha} мм </p>
        <p>Висота сторін B: ${Bh} + 60 = ${Bha} мм </p>
    `;
});
