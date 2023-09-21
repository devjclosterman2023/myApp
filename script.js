// Define a deck of cards
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

const deck = [];
for (const suit of suits) {
    for (const rank of ranks) {
        deck.push(`${rank} of ${suit}`);
    }
}

// Shuffle the deck
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

shuffleDeck(deck);

// Deal two cards to each player
const player1 = [deck.pop(), deck.pop()];
const player2 = [deck.pop(), deck.pop()];

console.log('Player 1:', player1.join(', '));
console.log('Player 2:', player2.join(', '));

// The game logic and additional features (e.g., betting, community cards) would be much more complex and require a larger codebase.
