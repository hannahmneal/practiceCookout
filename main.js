
	const hamburger = {
		name: 'Hamburger',
		type: 'beef',
		cooked: false,
	}
	const zucchini = {
		name: 'Zucchini',
		type: 'vegetable',
		cooked: false,
	}
	const chickenBreast = {
		name: 'Chicken Breast',
		type: 'chicken',
		cooked: false,
	}
	const corn = {
		name: 'Corn',
		type: 'vegetable',
		cooked: false,
	}
	const steak = {
		name: 'Steak',
		type: 'beef',
		cooked: false, 
	}
// The first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    currentObject.cooked = true;     // Modify the food so that it is cooked
    cookedFood.push(currentObject); // Put the cooked food into the appropriate array}
};

for (let i=0; i < uncookedFood.length; i+= 1) {
	currentObject = uncookedFood[i];
	grill(currentObject);
}

console.log(cookedFood);



//      GOAL:
// Iterate over the array of uncookedFood and invoke the function for each item so that the
// cookedFood array contains all of the items after they are cooked.

// console.log = grill(hamburger);

