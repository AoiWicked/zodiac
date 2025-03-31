function simpleHash(str: string) {
    // Простейший хэш, не криптостойкий, но для примера подойдёт
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
        hash |= 0; // Преобразование в 32-битное число
    }
    return Math.abs(hash);
}

export function generateRatings(zodiac: string, date: string) {
    const seed = simpleHash(zodiac + date);

    // Генерируем 3 числа от 1 до 10
    const health = (seed % 10) + 1;
    const relationship = ((seed >> 2) % 10) + 1;
    const career = ((seed >> 4) % 10) + 1;

    return { health, relationship, career };
}
