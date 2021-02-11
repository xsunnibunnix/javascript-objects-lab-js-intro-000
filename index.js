var recipe = {
  eggs: 5,
  flour: "2 cups",
  milk: "1 cup"
}
function updateObjectWithKeyAndValue(recipe, key, value) {
  return Object.assign({}, recipe, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipe, key, value) {
  recipe.key = value;
  return recipe;
}
