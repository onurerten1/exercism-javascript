// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTime) {
    switch (remainingTime) {
        case 0:
            return 'Lasagna is done.';
        case null:
        case undefined:
            return 'You forgot to set the timer.';
        default:
            return 'Not done, please wait.';
    }
}

export function preparationTime(layers, minutes) {
    if (minutes === null || minutes === undefined) {
        return 2 * layers.length;
    } else {
        return minutes * layers.length;
    }
}

export function quantities(layers) {
    var noodles = 0;
    var sauce = 0;
    for (let i = 0; i < layers.length; i++) {
        switch (layers[i]) {
            case 'sauce':
                sauce += 0.2;
                break;
            case 'noodles':
                noodles += 50;
                break;
            default:
                break;
        }
    }
    return { noodles: noodles, sauce: sauce };
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions) {
    var scaledRecipe = {};
    for (let key in recipe) {
        scaledRecipe[key] = recipe[key] * (portions / 2);
    }
    return scaledRecipe;
}