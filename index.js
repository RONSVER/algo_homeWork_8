function maxRevenueSchedule(requests) {
  // Инициализируем массив для хранения максимальной выгоды
  const dp = Array(9).fill(0); // Зал работает с 9:00

  // Обходим заявки
  for (const request of requests) {
    const [start, end, cost] = request;

    // Преобразуем время в часы
    const startHour = Math.floor(start);
    const endHour = Math.ceil(end);

    // Обновляем массив максимальной выгоды
    for (let i = endHour; i >= startHour; i--) {
      dp[i] = Math.max(dp[i], dp[i - 1] + cost);
    }
  }

  // Максимальная выгода будет в последнем часе работы (17:00)
  return dp[8]; // Зал работает до 17:00
}

// Пример использования
const requests = [
  [9, 13, 1],
  [11, 14, 1],
  [12, 16, 2],
  [14, 17, 2],
];

console.log(maxRevenueSchedule(requests)); // Ожидаемый результат: 5
