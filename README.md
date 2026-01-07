# GreenGrow - Fertilizer Shop

A modern, responsive web application for an online fertilizer store built with HTML, CSS, and JavaScript.

## Features

- **Product Catalog**: Browse through a variety of fertilizers and plant care products
- **Shopping Cart**: Add products to cart and manage items
- **Checkout System**: Simple and user-friendly checkout process
- **Local Storage**: Cart persists across browser sessions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scroll navigation between different sections
- **Contact Form**: Get in touch with the company

## Products Available

1. **Organic Compost** - Premium organic compost for all plants - $12.99
2. **NPK Fertilizer** - Balanced NPK fertilizer for vegetables - $15.99
3. **Neem Oil** - Natural pest control solution - $18.99
4. **Potassium Sulfate** - Improves plant strength and disease resistance - $14.99
5. **Calcium Nitrate** - Prevents blossom end rot in fruits - $16.99
6. **Growth Booster** - Accelerates plant growth and flowering - $19.99

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with gradients, flexbox, and grid layout
- **JavaScript (Vanilla)**: DOM manipulation, event handling, and local storage

## File Structure

```
.
├── index.html       # Main HTML file with page structure
├── style.css        # CSS stylesheet with responsive design
├── script.js        # JavaScript for interactivity and cart management
└── README.md        # Project documentation
```

## How to Use

1. **View Products**: The products are displayed in a grid layout on the homepage
2. **Add to Cart**: Click the "Add to Cart" button on any product
3. **View Cart**: Scroll to the "Shopping Cart" section to see your items
4. **Remove Items**: Click the "Remove" button to delete items from cart
5. **Checkout**: Click "Proceed to Checkout" to complete your purchase
6. **Contact**: Fill out the contact form to reach out to us

## Features Explained

### Cart Persistence
- Your cart is automatically saved to browser's local storage
- Cart items will be retained even after you close and reopen the browser

### Responsive Design
- Mobile-first approach ensures great user experience on all devices
- Flexbox and CSS Grid for flexible layouts
- Media queries for responsive adjustments

### Interactive Elements
- Hover effects on buttons and product cards
- Smooth page transitions and scrolling
- Real-time cart count updates

## Styling

The website uses a modern purple and gradient color scheme:
- Primary Gradient: #667eea to #764ba2
- Clean typography with Segoe UI font family
- Comfortable spacing and padding throughout

## JavaScript Functions

### Core Functions
- `loadProducts()` - Load and display products
- `addToCart(productId)` - Add product to cart
- `updateCartDisplay()` - Update cart display
- `removeFromCart(index)` - Remove item from cart
- `checkout()` - Process checkout
- `handleContact(event)` - Handle contact form submission

### Storage Functions
- `saveCartToStorage()` - Save cart to localStorage
- `loadCartFromStorage()` - Load cart from localStorage

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Payment gateway integration
- [ ] Product filters and search functionality
- [ ] User reviews and ratings
- [ ] Wishlist feature
- [ ] Order history
- [ ] Admin dashboard for product management
- [ ] Email notifications

## License

This project is open source and available for educational purposes.

## Author

Created by Akash Kambale

## Contact

For inquiries about the fertilizer shop or the code, please fill out the contact form on the website or create an issue in the repository.

---

Enjoy shopping at GreenGrow! 🌱
