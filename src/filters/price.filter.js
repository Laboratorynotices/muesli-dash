export default function priceFilter (value) {
  // Проверка пустые данные
  if (!value) return ''

  // Проверка строчка ли это было
  if (typeof value !== 'string') {
    return value
  }

  // После запятой должно быть два нуля
  const pos = value.indexOf(',')

  if (pos === -1) {
    // Запятой не было, добавляем оба нуля
    value = value + ',00'
  } else if (value.length - 2 === pos) {
    // Если запятая на предпоследнем месте, добавляем недостающий нуль
    value = value + '0'
  }

  // Напоследок добавляем символ "евро"
  return value + '€'
}
