// Define a class for the Smoothie object
class Smoothie {
    // Constructor to initialize the smoothie properties
    constructor(size, base, fruits, addons) {
        this.size = size; // Smoothie size
        this.base = base; // Base liquid
        this.fruits = fruits; // Array of selected fruits
        this.addons = addons; // Array of selected add-ons
    }

    // Method to generate a description of the smoothie
    description() {
        return `You ordered a ${this.size} smoothie with ${this.base} base, fruits: ${this.fruits.join(", ")}, and add-ons: ${this.addons.join(", ")}.`;
    }
}

// Add an event listener to the 'Order' button
document.getElementById('order-btn').addEventListener('click', () => {
    // Get the selected size from the form
    const size = document.getElementById('size').value;
    // Get the selected base liquid from the form
    const base = document.getElementById('base').value;
    
    // Get the selected fruits from the form and store them in an array
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(e => e.value);
    // Get the selected add-ons from the form and store them in an array
    const addons = Array.from(document.querySelectorAll('input[name="addons"]:checked')).map(e => e.value);

    // Create a new Smoothie object with the selected values
    const smoothie = new Smoothie(size, base, fruits, addons);

    // Display the description of the smoothie in the order summary div
    document.getElementById('order-summary').innerText = smoothie.description();
});
