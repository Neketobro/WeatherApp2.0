export function getEvery8thItem(array) {
    return array.filter((_, index) => (index + 1) % 8 === 0);
}