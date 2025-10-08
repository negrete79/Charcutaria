document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
    
    // Scroll to products
    document.querySelector('.scroll-to-products').addEventListener('click', function() {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Cart functionality
    const cartIcon = document.querySelector('.cart-icon');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total span:last-child');
    const cartCount = document.querySelector('.cart-count');
    const clearCartBtn = document.querySelector('.clear-cart-btn');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const checkoutForm = document.querySelector('.checkout-form');
    const backToCartBtn = document.querySelector('.back-to-cart');
    const submitOrderBtn = document.querySelector('.submit-order');
    const notification = document.querySelector('.notification');
    
    let cart = [];
    
    // Open cart
    cartIcon.addEventListener('click', function() {
        cartOverlay.classList.add('active');
        renderCart();
    });
    
    // Close cart
    closeCart.addEventListener('click', function() {
        cartOverlay.classList.remove('active');
    });
    
    // Close cart when clicking outside
    cartOverlay.addEventListener('click', function(e) {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
        }
    });
    
    // Add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = parseFloat(productCard.querySelector('.product-price').textContent.replace(',', '.'));
            const quantity = parseInt(productCard.querySelector('.quantity-input').value);
            
            // Check if product already in cart
            const existingProduct = cart.find(item => item.name === productName);
            
            if (existingProduct) {
                existingProduct.quantity += quantity;
            } else {
                cart.push({
                    name: productName,
                    price: productPrice,
                    quantity: quantity
                });
            }
            
            // Reset quantity
            productCard.querySelector('.quantity-input').value = 1;
            
            // Update cart
            updateCart();
            
            // Adicionar animação ao ícone do carrinho
            cartIcon.classList.add('shake');
            cartCount.classList.add('bounce');
            
            // Remover classes de animação após a conclusão
            setTimeout(() => {
                cartIcon.classList.remove('shake');
                cartCount.classList.remove('bounce');
            }, 500);
            
            // Show notification
            showNotification('Produto adicionado ao carrinho!');
        });
    });
    
    // Finish order button - Open cart
    document.querySelectorAll('.finish-order').forEach(button => {
        button.addEventListener('click', function() {
            cartOverlay.classList.add('active');
            renderCart();
        });
    });
    
    // Quantity controls
    document.querySelectorAll('.quantity-btn').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (this.classList.contains('minus') && value > 1) {
                value--;
            } else if (this.classList.contains('plus')) {
                value++;
            }
            
            input.value = value;
        });
    });
    
    // Update cart
    function updateCart() {
        // Update cart count
        let totalItems = 0;
        cart.forEach(item => {
            totalItems += item.quantity;
        });
        cartCount.textContent = totalItems;
        
        // Update cart total
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        cartTotal.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
    
    // Render cart
    function renderCart() {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; padding: 20px; color: #888;">Seu carrinho está vazio</p>';
            return;
        }
        
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn plus" data-index="${index}">+</button>
                </div>
            `;
            
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to quantity buttons
        document.querySelectorAll('.cart-item .quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                
                if (this.classList.contains('minus') && cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else if (this.classList.contains('plus')) {
                    cart[index].quantity++;
                }
                
                renderCart();
                updateCart();
            });
        });
    }
    
    // Clear cart
    clearCartBtn.addEventListener('click', function() {
        cart = [];
        renderCart();
        updateCart();
    });
    
    // Checkout
    checkoutBtn.addEventListener('click', function() {
        if (cart.length === 0) {
            showNotification('Seu carrinho está vazio!', 'warning');
            return;
        }
        
        cartItems.style.display = 'none';
        checkoutForm.classList.add('active');
    });
    
    // Back to cart
    backToCartBtn.addEventListener('click', function() {
        cartItems.style.display = 'block';
        checkoutForm.classList.remove('active');
    });
    
    // Payment options
    const paymentOptions = document.querySelectorAll('.payment-option input[type="radio"]');
    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            // Remove active class from all labels
            document.querySelectorAll('.payment-option label').forEach(label => {
                label.style.borderColor = '#eee';
                label.style.backgroundColor = 'transparent';
            });
            
            // Add active class to selected option
            if (this.checked) {
                const label = this.nextElementSibling;
                label.style.borderColor = 'var(--primary)';
                label.style.backgroundColor = 'rgba(139, 0, 0, 0.05)';
            }
        });
    });
    
    // Submit order via WhatsApp
    submitOrderBtn.addEventListener('click', function() {
        // Get form data
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('address').value;
        const reference = document.getElementById('reference').value;
        const paymentMethod = document.querySelector('.payment-option input[type="radio"]:checked');
        
        // Validate form
        if (!name || !phone || !address || !paymentMethod) {
            showNotification('Por favor, preencha todos os campos obrigatórios do formulário.', 'warning');
            return;
        }
        
        // Build order message
        let orderMessage = `Olá! Gostaria de fazer um pedido:%0A%0A`;
        orderMessage += `*Nome:* ${name}%0A`;
        orderMessage += `*Telefone:* ${phone}%0A`;
        orderMessage += `*Endereço:* ${address}%0A`;
        
        if (reference) {
            orderMessage += `*Ponto de Referência:* ${reference}%0A`;
        }
        
        orderMessage += `*Forma de pagamento:* ${paymentMethod.value}%0A%0A`;
        orderMessage += `*Itens do pedido:*%0A`;
        
        let total = 0;
        cart.forEach(item => {
            orderMessage += `- ${item.name} (Quantidade: ${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}%0A`;
            total += item.price * item.quantity;
        });
        
        orderMessage += `%0A*Total: R$ ${total.toFixed(2).replace('.', ',')}*`;
        
        // Open WhatsApp with message
        const whatsappUrl = `https://wa.me/?text=${orderMessage}`;
        window.open(whatsappUrl, '_blank');
        
        // Reset cart and form
        cart = [];
        updateCart();
        renderCart();
        
        // Close cart
        cartOverlay.classList.remove('active');
        
        // Reset form
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
        document.getElementById('reference').value = '';
        paymentMethod.checked = false;
        document.querySelectorAll('.payment-option label').forEach(label => {
            label.style.borderColor = '#eee';
            label.style.backgroundColor = 'transparent';
        });
        
        // Show success notification
        showNotification('Pedido enviado com sucesso!', 'success');
    });
    
    // Show notification
    function showNotification(message, type = 'success') {
        notification.querySelector('span').textContent = message;
        
        // Set notification color based on type
        if (type === 'success') {
            notification.style.backgroundColor = 'var(--success)';
            notification.querySelector('i').className = 'fas fa-check-circle';
        } else if (type === 'warning') {
            notification.style.backgroundColor = 'var(--accent)';
            notification.querySelector('i').className = 'fas fa-exclamation-circle';
        }
        
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Categories filter and anchor
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all categories
            categoryItems.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            this.classList.add('active');
            
            // Get category
            const category = this.getAttribute('data-category');
            
            // Scroll to category section
            if (category !== 'todos') {
                const categorySection = document.getElementById(category);
                if (categorySection) {
                    // Rola para a seção da categoria
                    categorySection.scrollIntoView({ behavior: 'smooth' });
                    
                    // Adiciona um pequeno atraso para garantir que a rolagem seja concluída
                    setTimeout(() => {
                        // Encontra o primeiro produto da categoria
                        const firstProduct = categorySection.querySelector('.product-card');
                        if (firstProduct) {
                            // Calcula a posição do primeiro produto em relação ao topo da página
                            const productPosition = firstProduct.getBoundingClientRect().top + window.pageYOffset;
                            
                            // Ajusta a posição para garantir que o produto fique visível abaixo do menu fixo
                            const headerHeight = document.querySelector('header').offsetHeight;
                            const categoriesHeight = document.querySelector('.categories-bar').offsetHeight;
                            const offset = headerHeight + categoriesHeight + 20; // 20px de margem extra
                            
                            // Rola suavemente para a posição ajustada
                            window.scrollTo({
                                top: productPosition - offset,
                                behavior: 'smooth'
                            });
                        }
                    }, 300); // 300ms de atraso para garantir que a primeira rolagem seja concluída
                }
            } else {
                // Scroll to top of products section
                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
            }
            
            // Filter products
            const productCards = document.querySelectorAll('.product-card');
            productCards.forEach(card => {
                if (category === 'todos' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Show notification
            const categoryName = this.textContent;
            showNotification(`Exibindo: ${categoryName}`, 'success');
        });
    });
});
