
const services = [
    { id: 1, name: 'Public Speaking Course', price: 500, image: '/images/curseBasic.webp' },
    { id: 2, name: 'Voice Training Session', price: 300, image: '/images/effComm.jpg' },
    { id: 3, name: 'Advanced Speech Course', price: 700, image: '/images/engage.jpg' }
];


function renderServices() {
    const serviceCardsContainer = document.getElementById('service-cards');
    
  
    serviceCardsContainer.innerHTML = '';

    services.forEach(service => {
        const card = document.createElement('div');
        card.classList.add('service-card');

        card.innerHTML = `
            <img src="${service.image}" alt="${service.name}" class="service-image">
            <h3>${service.name}</h3>
            <p>Price: ₹${service.price}</p>
            <button class="add-to-cart-btn" data-service-id="${service.id}">Add to Cart</button>
        `;

        serviceCardsContainer.appendChild(card);
    });

  
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const serviceId = parseInt(this.dataset.serviceId);
            addToCart(serviceId);
        });
    });
}


function addToCart(serviceId) {
    const service = services.find(s => s.id === serviceId);
    if (service) {
     
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        
        const existingItemIndex = cart.findIndex(item => item.id === service.id);
        if (existingItemIndex !== -1) {
         
            cart[existingItemIndex].quantity += 1;
        } else {
        
            cart.push({ ...service, quantity: 1 });
        }

      
        localStorage.setItem('cart', JSON.stringify(cart));

        
        alert(`${service.name} has been added to the cart.`);
    }
}


window.onload = renderServices;
