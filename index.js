var recipes = {
  eggs: 5,
  flour: 2 cups,
  milk: 1 cup,
}
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key] = value})
}
