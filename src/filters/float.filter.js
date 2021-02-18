export default function germanFloatFilter (value) {
  // Проверка пустые данные
  if (!value) return ''

  // Проверка число ли это было
  if (typeof value !== 'number') {
    return value
  }

  // Заменяем точку на запятую
  value = value.toString().replace('.', ',')

  // После запятой должно быть два нуля
  const pos = value.indexOf(',')

  if (pos === -1) {
    // Запятой не было, добавляем оба нуля
    value = value + ',00'
  } else if (value.length - 2 === pos) {
    // Если запятая на предпоследнем месте, добавляем недостающий нуль
    value = value + '0'
  }

  return value
}
