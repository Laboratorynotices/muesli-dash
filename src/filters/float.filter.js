export default function germanFloatFilter (value) {
  // Проверка пустые данные
  if (!value) return ''

  // Проверка число ли это было
  if (typeof value !== 'number') {
    /*
    if (typeof value === 'string' &&
        value.split('.').length - 1 === 1) {
      // Это уже строчка и содержит только одну точку.

      // Заменяем точку на запятую
      value = value.toString().replace('.', ',')
    }
    */

    return value
  }

  // Заменяем точку на запятую
  return value.toString().replace('.', ',')
}
