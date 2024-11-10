document.getElementById('predictButton').addEventListener('click', function() {
    const predictions = [
        'У тебя все будет хорошо!',
        'Сегодня тебя ждет удача!',
        'Будь осторожен, возможны трудности.',
        'Ты найдешь что-то потерянное.',
        'Скоро тебя ждет приятный сюрприз.',
        'День пройдет без особых событий.',
        'Ожидай хорошие новости.'
    ];

    const randomIndex = Math.floor(Math.random() * predictions.length);
    const randomPrediction = predictions[randomIndex];

    document.getElementById('prediction').innerText = randomPrediction;
});