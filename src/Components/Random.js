export function randomProp(arr, num) {
    const x = [...arr].sort(() => 0.5 - Math.random())
    return x.slice(0, num)
}