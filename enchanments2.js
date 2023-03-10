// @ts-check

/**
 * Get the first card in the given deck
 */
export function getFirstCard(deck) {
    return deck[0];
}

/**
 * Get the second card in the given deck
 */
export function getSecondCard(deck) {
    return deck[1];
}

/**
 * Switch the position of the first two cards in the given deck
 */
export function swapTopTwoCards(deck) {
    const rest = deck.slice(2);
    return [deck[1], deck[0], ...rest];
}

/**
 * Put the top card of the given deck into a separate discard pile
 * deck and a new deck containing all the other cards
 */
export function discardTopCard(deck) {
    let topCard = deck.shift();
    return [topCard, deck];
}

const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 * new deck where the second,
 * third, and fourth cards are the face cards
 */
export function insertFaceCards(deck) {
    if (deck.length === 0) {
        deck.push(undefined);
    }
    for (let index = 0; index < FACE_CARDS.length; index++) {
        deck.splice(index + 1, 0, FACE_CARDS[index]);
    }
    return deck;
}
