// Global state management
const AppState = {
    products: [],
    cart: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    isLoggedIn: false,
    currentUser: null,
    currentFilter: 'all',
    currentSort: 'featured',
    currentView: 'grid',
    searchQuery: '',
    productsLoaded: 0,
    productsPerPage: 12
};

// Sample product data
const sampleProducts = [
    {
        id: 1,
        title: "Серебряное кольцо с гранатом",
        price: 2500,
        category: "jewelry",
        image: "imgs/silver_ring_granate.jpg",
        rating: 4.8,
        reviews: 24,
        seller: {
            name: "Мастер Анна",
            avatar: "imgs/seller_female_1_9.jpg",
            location: "Москва, Россия"
        },
        description: "Уникальное серебряное кольцо с натуральным гранатом. Ручная работа с использованием традиционных техник ювелирного искусства."
    },
    {
        id: 2,
        title: "Керамическая ваза",
        price: 1800,
        category: "decor",
        image: "imgs/ceramic_vase_forest.jpg",
        rating: 4.9,
        reviews: 18,
        seller: {
            name: "Гончарная мастерская",
            avatar: "imgs/seller_female_3_5.jpg",
            location: "Санкт-Петербург, Россия"
        },
        description: "Ручная керамическая ваза с уникальной глазурью. Идеальна для интерьера в стиле минимализм или бохо."
    },
    {
        id: 3,
        title: "Золотые серьги-пусеты",
        price: 4200,
        category: "jewelry",
        image: "imgs/golden_earrings.jpg",
        rating: 4.7,
        reviews: 32,
        seller: {
            name: "Ювелирная мастерская Злато",
            avatar: "imgs/seller_female_2_2.jpg",
            location: "Екатеринбург, Россия"
        },
        description: "Элегантные золотые серьги-пусеты с минималистичным дизайном. Подходят для ежедневной носки и особых случаев."
    },
    {
        id: 4,
        title: "Вязаный плед",
        price: 3500,
        category: "decor",
        image: "imgs/knitted_blanket.jpg",
        rating: 4.6,
        reviews: 15,
        seller: {
            name: "Теплые руки",
            avatar: "imgs/seller_female_1_3.jpg",
            location: "Новосибирск, Россия"
        },
        description: "Мягкий вязаный плед из натуральной шерсти. Создает уютную атмосферу в любом интерьере."
    },
    {
        id: 5,
        title: "Кожаный браслет",
        price: 1200,
        category: "accessories",
        image: "imgs/leather_bracelet.jpg",
        rating: 4.5,
        reviews: 41,
        seller: {
            name: "Кожевенная мастерская",
            avatar: "imgs/seller_male_3_2.jpg",
            location: "Казань, Россия"
        },
        description: "Ручной кожаный браслет с латунной фурнитурой. Стильный аксессуар для мужчин и женщин."
    },
    {
        id: 6,
        title: "Акварельная картина",
        price: 2800,
        category: "art",
        image: "imgs/watercolor_painting.jpg",
        rating: 4.9,
        reviews: 7,
        seller: {
            name: "Художник Елена",
            avatar: "imgs/seller_male_2_1.jpg",
            location: "Краснодар, Россия"
        },
        description: "Оригинальная акварельная картина на холсте. Размер 30x40 см. Работа написана в 2024 году."
    },
    {
        id: 7,
        title: "Глиняный горшок",
        price: 6500,
        category: "art",
        image: "imgs/clay_pot.jpg",
        rating: 4.8,
        reviews: 12,
        seller: {
            name: "Гончарная мастерская",
            avatar: "imgs/seller_male_1_9.jpg",
            location: "Владимир, Россия"
        },
        description: "Глиняный горшок для выпечки, выполненный вручную на гончарном круге. Идеально подходит для запекания и хранения продуктов."
    },
    {
        id: 8,
        title: "Деревянная шкатулка",
        price: 2200,
        category: "decor",
        image: "imgs/wooden_box.jpg",
        rating: 4.7,
        reviews: 19,
        seller: {
            name: "Столярная мастерская",
            avatar: "imgs/seller_male_3_9.jpg",
            location: "Тула, Россия"
        },
        description: "Резная деревянная шкатулка из дуба. Отделка натуральным маслом, внутренняя отделка бархатом."
    },
    {
        id: 9,
        title: "Жемчожное ожерелье",
        price: 8900,
        category: "jewelry",
        image: "imgs/pearl_necklace.jpg",
        rating: 5.0,
        reviews: 28,
        seller: {
            name: "Жемчужная мастерская",
            avatar: "imgs/seller_male_2_3.jpg",
            location: "Ростов-на-Дону, Россия"
        },
        description: "Классическое жемчожное ожерелье с натуральным жемчугом. Длина 45 см, застежка из золота."
    },
    {
        id: 10,
        title: "Текстильная сумка",
        price: 1600,
        category: "accessories",
        image: "imgs/textile_bag.jpg",
        rating: 4.4,
        reviews: 33,
        seller: {
            name: "Текстильная студия",
            avatar: "imgs/seller_female_3_8.jpg",
            location: "Красноярск, Россия"
        },
        description: "Экологичная сумка из натурального льна. Внутренний карман на молнии, регулируемые ручки."
    },
    {
        id: 11,
        title: "Глиняный горшок",
        price: 950,
        category: "decor",
        image: "imgs/glass_sculpture.jpg",
        rating: 4.3,
        reviews: 26,
        seller: {
            name: "Гончарня на Оке",
            avatar: "imgs/seller_female_3_0.jpg",
            location: "Рязань, Россия"
        },
        description: "Традиционный глиняный горшок для комнатных растений. Обжиг при высокой температуре."
    },
    {
        id: 12,
        title: "Медный браслет",
        price: 1800,
        category: "jewelry",
        image: "imgs/copper_bracelet.jpg",
        rating: 4.6,
        reviews: 21,
        seller: {
            name: "Медная мастерская",
            avatar: "imgs/seller_male_3_6.jpg",
            location: "Уфа, Россия"
        },
        description: "Медный браслет с уникальной патиной. По заверениям мастера, обладает целебными свойствами."
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load sample products
    AppState.products = [...sampleProducts];
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        AppState.cart = JSON.parse(savedCart);
        updateCartCount();
    }
    
    // Load favorites from localStorage
    updateFavorites();
    
    // Render initial products
    renderProducts();
    
    // Set up event listeners
    setupEventListeners();
    
    // Add scroll effect to header
    window.addEventListener('scroll', handleScroll);
    
    console.log('Handmade Gallery initialized successfully');
}

function setupEventListeners() {
    // Search functionality
    const heroSearchInput = document.getElementById('heroSearchInput');
    if (heroSearchInput) {
        heroSearchInput.addEventListener('input', debounce(handleSearch, 300));
        heroSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // Category pills
    const categoryPills = document.querySelectorAll('.category-pill');
    categoryPills.forEach(pill => {
        pill.addEventListener('click', function() {
            const category = this.dataset.category;
            setActiveCategory(this);
            filterProducts(category);
        });
    });
    
    // Filter tabs
    const filterTabs = document.querySelectorAll('.filter-tab');
    filterTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            setActiveFilterTab(this);
            filterProducts(filter);
        });
    });
    
    // Filter selects
    const priceFilter = document.getElementById('priceFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', function() {
            AppState.currentSort = this.value;
            sortProducts();
            renderProducts();
        });
    }
    
    // View toggle
    const viewToggle = document.getElementById('viewToggle');
    if (viewToggle) {
        viewToggle.addEventListener('click', toggleView);
    }
    
    // Form submissions
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }
    
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuth);
    }
    
    const addProductForm = document.getElementById('addProductForm');
    if (addProductForm) {
        addProductForm.addEventListener('submit', handleAddProduct);
    }
    
    // Close modals on overlay click
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal(overlay.id);
            }
        });
    });
    
    // Seller panel tabs
    const sellerTabs = document.querySelectorAll('.seller-tab');
    sellerTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            switchSellerTab(this, targetTab);
        });
    });
    
    // Add escape key support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
            closeMobileMenu();
            closeUserMenu();
        }
    });
}

function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
}

// Search functionality
function handleSearch() {
    const searchInput = document.getElementById('heroSearchInput');
    if (searchInput) {
        AppState.searchQuery = searchInput.value.toLowerCase();
        filterProducts();
    }
}

function performSearch() {
    handleSearch();
    const catalogSection = document.getElementById('catalog');
    if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleSearch() {
    const searchOverlay = document.getElementById('searchOverlay');
    const searchInput = document.getElementById('searchInput');
    
    if (searchOverlay.style.display === 'flex') {
        searchOverlay.style.display = 'none';
    } else {
        searchOverlay.style.display = 'flex';
        setTimeout(() => searchInput?.focus(), 100);
    }
}

// Category and filter functions
function setActiveCategory(activePill) {
    document.querySelectorAll('.category-pill').forEach(pill => {
        pill.classList.remove('active');
    });
    activePill.classList.add('active');
}

function setActiveFilterTab(activeTab) {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    activeTab.classList.add('active');
}

function filterProducts(category = null) {
    if (category && category !== 'all') {
        AppState.currentFilter = category;
    }
    
    // Apply search filter
    let filteredProducts = AppState.products;
    
    if (AppState.searchQuery) {
        filteredProducts = filteredProducts.filter(product => 
            product.title.toLowerCase().includes(AppState.searchQuery) ||
            product.description.toLowerCase().includes(AppState.searchQuery) ||
            product.seller.name.toLowerCase().includes(AppState.searchQuery)
        );
    }
    
    // Apply category filter
    if (AppState.currentFilter !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === AppState.currentFilter
        );
    }
    
    // Apply price filter
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter && priceFilter.value !== 'all') {
        const priceRange = priceFilter.value;
        if (priceRange === '0-1000') {
            filteredProducts = filteredProducts.filter(p => p.price <= 1000);
        } else if (priceRange === '1000-5000') {
            filteredProducts = filteredProducts.filter(p => p.price > 1000 && p.price <= 5000);
        } else if (priceRange === '5000-15000') {
            filteredProducts = filteredProducts.filter(p => p.price > 5000 && p.price <= 15000);
        } else if (priceRange === '15000+') {
            filteredProducts = filteredProducts.filter(p => p.price > 15000);
        }
    }
    
    // Sort products
    sortProducts(filteredProducts);
    
    // Update state and render
    AppState.filteredProducts = filteredProducts;
    AppState.productsLoaded = 0;
    renderProducts();
}

function sortProducts(products = null) {
    const productsToSort = products || AppState.filteredProducts || AppState.products;
    
    switch (AppState.currentSort) {
        case 'price-asc':
            productsToSort.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            productsToSort.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            productsToSort.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            productsToSort.sort((a, b) => b.id - a.id);
            break;
        case 'featured':
        default:
            // Keep original order for featured
            break;
    }
}

function applyFilters() {
    filterProducts();
}

function toggleView() {
    const productsGrid = document.getElementById('productsGrid');
    const viewToggle = document.getElementById('viewToggle');
    
    if (AppState.currentView === 'grid') {
        AppState.currentView = 'list';
        productsGrid.classList.add('list-view');
        viewToggle.innerHTML = '<i data-lucide="list"></i>';
    } else {
        AppState.currentView = 'grid';
        productsGrid.classList.remove('list-view');
        viewToggle.innerHTML = '<i data-lucide="grid-3x3"></i>';
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Product rendering
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    const productsToShow = AppState.filteredProducts || AppState.products;
    const productsToRender = productsToShow.slice(0, AppState.productsLoaded + AppState.productsPerPage);
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #7A7A7A;">
                <h3>Товары не найдены</h3>
                <p>Попробуйте изменить параметры поиска или фильтры</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = productsToRender.map(product => createProductCard(product)).join('');
    
    // Update loaded products count
    AppState.productsLoaded = productsToRender.length;
    
    // Hide load more button if all products are shown
    const loadMoreBtn = document.querySelector('.load-more-btn');
    if (loadMoreBtn) {
        if (AppState.productsLoaded >= productsToShow.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function createProductCard(product) {
    const isFavorite = AppState.favorites.includes(product.id);
    const favoriteClass = isFavorite ? 'active' : '';
    
    return `
        <div class="product-card" onclick="showProductModal(${product.id})">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
                <div class="product-overlay">
                    <button class="quick-view-btn" onclick="event.stopPropagation(); showProductModal(${product.id})">
                        Быстрый просмотр
                    </button>
                </div>
                <button class="product-favorite ${favoriteClass}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                    <i data-lucide="heart"></i>
                </button>
            </div>
            
            <div class="product-content">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-text">(${product.rating}) • ${product.reviews} отзывов</span>
                </div>
                <p class="product-price">${formatPrice(product.price)}</p>
                
                <div class="product-seller">
                    <img src="${product.seller.avatar}" alt="${product.seller.name}" class="seller-avatar">
                    <div class="seller-info">
                        <h5>${product.seller.name}</h5>
                        <p>${product.seller.location}</p>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                        В корзину
                    </button>
                    <button class="add-to-favorites-btn ${favoriteClass}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
                        <i data-lucide="heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    
    // Full stars
    for (let i = 0; i < fullStars; i++) {
        stars += '<i data-lucide="star" class="filled"></i>';
    }
    
    // Half star
    if (hasHalfStar) {
        stars += '<i data-lucide="star" class="half"></i>';
    }
    
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i data-lucide="star" class="empty"></i>';
    }
    
    return stars;
}

function getCategoryName(category) {
    const categoryNames = {
        'jewelry': 'Украшения',
        'decor': 'Декор',
        'accessories': 'Аксессуары',
        'art': 'Искусство'
    };
    return categoryNames[category] || category;
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 0
    }).format(price);
}

// Load more products
function loadMoreProducts() {
    renderProducts();
}

// Cart functionality
function addToCart(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = AppState.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        AppState.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    showToast(`${product.title} добавлен в корзину`, 'success');
}

function removeFromCart(productId) {
    AppState.cart = AppState.cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCart();
}

function updateCartQuantity(productId, quantity) {
    const item = AppState.cart.find(item => item.id === productId);
    if (item) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = quantity;
            saveCart();
            updateCartCount();
            renderCart();
        }
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(AppState.cart));
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'block' : 'none';
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    if (cartSidebar) {
        cartSidebar.classList.toggle('open');
        if (cartSidebar.classList.contains('open')) {
            renderCart();
        }
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems || !cartTotal) return;
    
    if (AppState.cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i data-lucide="shopping-bag"></i>
                <p>Корзина пуста</p>
            </div>
        `;
        cartTotal.textContent = '0 ₽';
    } else {
        const total = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        cartItems.innerHTML = AppState.cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})" title="Удалить">
                            <i data-lucide="trash-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        cartTotal.textContent = formatPrice(total);
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function proceedToCheckout() {
    toggleCart();
    showModal('checkoutModal');
}

// Favorites functionality
function toggleFavorite(productId) {
    const index = AppState.favorites.indexOf(productId);
    
    if (index === -1) {
        AppState.favorites.push(productId);
        showToast('Добавлено в избранное', 'success');
    } else {
        AppState.favorites.splice(index, 1);
        showToast('Удалено из избранного', 'info');
    }
    
    localStorage.setItem('favorites', JSON.stringify(AppState.favorites));
    updateFavorites();
    
    // Refresh product cards
    renderProducts();
}

function updateFavorites() {
    // Update favorite buttons in product cards
    document.querySelectorAll('.product-favorite').forEach(btn => {
        const productId = parseInt(btn.closest('.product-card').getAttribute('onclick').match(/\d+/)[0]);
        if (AppState.favorites.includes(productId)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Product modal
function showProductModal(productId) {
    const product = AppState.products.find(p => p.id === productId);
    if (!product) return;
    
    // Populate modal content
    document.getElementById('productTitle').textContent = product.title;
    document.getElementById('productImage').src = product.image;
    document.getElementById('productImage').alt = product.title;
    document.getElementById('productCategory').textContent = getCategoryName(product.category);
    document.getElementById('productPrice').textContent = formatPrice(product.price);
    document.getElementById('productDescription').textContent = product.description;
    document.getElementById('sellerName').textContent = product.seller.name;
    document.getElementById('sellerLocation').textContent = product.seller.location;
    document.getElementById('sellerAvatar').src = product.seller.avatar;
    
    // Update rating
    const ratingContainer = document.getElementById('productRating');
    if (ratingContainer) {
        ratingContainer.innerHTML = `
            <div class="stars">
                ${generateStars(product.rating)}
            </div>
            <span class="rating-text">(${product.rating}) • ${product.reviews} отзывов</span>
        `;
    }
    
    showModal('productModal');
}

function addToCartFromModal() {
    const productTitle = document.getElementById('productTitle').textContent;
    const product = AppState.products.find(p => p.title === productTitle);
    
    if (product) {
        addToCart(product.id);
        closeModal('productModal');
    }
}

// User menu
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        const isVisible = userMenu.style.display === 'block';
        userMenu.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            // Position the menu
            const headerActions = document.querySelector('.header-actions');
            const rect = headerActions.getBoundingClientRect();
            userMenu.style.top = rect.bottom + 'px';
            userMenu.style.right = (window.innerWidth - rect.right) + 'px';
        }
    }
}

function closeUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (userMenu) {
        userMenu.style.display = 'none';
    }
}

// Authentication
function showAuthModal(mode = 'login') {
    const authModal = document.getElementById('authModal');
    const authTitle = document.getElementById('authTitle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authSwitchText = document.getElementById('authSwitchText');
    const authSwitchBtn = document.getElementById('authSwitchBtn');
    
    if (mode === 'login') {
        authTitle.textContent = 'Вход';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        authSwitchText.textContent = 'Нет аккаунта?';
        authSwitchBtn.textContent = 'Регистрация';
        authSwitchBtn.onclick = () => showAuthModal('register');
    } else {
        authTitle.textContent = 'Регистрация';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        authSwitchText.textContent = 'Уже есть аккаунт?';
        authSwitchBtn.textContent = 'Вход';
        authSwitchBtn.onclick = () => showAuthModal('login');
    }
    
    showModal('authModal');
}

function toggleAuthMode() {
    const authTitle = document.getElementById('authTitle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const authSwitchText = document.getElementById('authSwitchText');
    const authSwitchBtn = document.getElementById('authSwitchBtn');
    
    if (authTitle.textContent === 'Вход') {
        authTitle.textContent = 'Регистрация';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        authSwitchText.textContent = 'Уже есть аккаунт?';
        authSwitchBtn.textContent = 'Вход';
    } else {
        authTitle.textContent = 'Вход';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        authSwitchText.textContent = 'Нет аккаунта?';
        authSwitchBtn.textContent = 'Регистрация';
    }
}

function handleAuth(e) {
    e.preventDefault();
    
    // Simulate authentication
    AppState.isLoggedIn = true;
    AppState.currentUser = {
        name: 'Пользователь',
        email: 'user@example.com'
    };
    
    closeModal('authModal');
    showToast('Добро пожаловать!', 'success');
    updateAuthUI();
}

function updateAuthUI() {
    const userBtn = document.querySelector('.user-btn');
    if (userBtn && AppState.isLoggedIn) {
        userBtn.style.background = '#C19A6B';
        userBtn.style.color = 'white';
    }
}

// Seller panel
function showSellerPanel() {
    if (!AppState.isLoggedIn) {
        showToast('Для доступа к кабинету продавца необходимо войти в систему', 'error');
        return;
    }
    
    showModal('sellerModal');
    renderSellerProducts();
}

function switchSellerTab(activeTab, targetTab) {
    // Update tab states
    document.querySelectorAll('.seller-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    activeTab.classList.add('active');
    
    // Update panel sections
    document.querySelectorAll('.seller-panel-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(targetTab).classList.add('active');
}

function renderSellerProducts() {
    const sellerProductsList = document.getElementById('sellerProductsList');
    if (!sellerProductsList) return;
    
    // Filter products by current user (in real app, this would be by seller ID)
    const myProducts = AppState.products.filter(p => p.seller.name === AppState.currentUser?.name);
    
    if (myProducts.length === 0) {
        sellerProductsList.innerHTML = `
            <div class="no-products" style="text-align: center; padding: 40px; color: #7A7A7A;">
                <p>У вас пока нет товаров. Добавьте первый товар!</p>
            </div>
        `;
    } else {
        sellerProductsList.innerHTML = myProducts.map(product => `
            <div class="seller-product-item">
                <img src="${product.image}" alt="${product.title}" class="seller-product-image">
                <div class="seller-product-info">
                    <h4 class="seller-product-title">${product.title}</h4>
                    <p class="seller-product-price">${formatPrice(product.price)}</p>
                </div>
                <div class="seller-product-actions">
                    <button class="edit-btn" onclick="editProduct(${product.id})">
                        <i data-lucide="edit"></i>
                    </button>
                    <button class="delete-btn" onclick="deleteProduct(${product.id})">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function handleAddProduct(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const newProduct = {
        id: AppState.products.length + 1,
        title: e.target.querySelector('input[placeholder="Название товара"]').value,
        price: parseInt(e.target.querySelector('input[placeholder="Цена (₽)"]').value),
        category: e.target.querySelector('select').value,
        image: e.target.querySelector('input[placeholder="URL изображения"]').value,
        description: e.target.querySelector('textarea').value,
        rating: 5.0,
        reviews: 0,
        seller: {
            name: AppState.currentUser?.name || 'Новый продавец',
            avatar: 'imgs/seller_young_female_7.jpg',
            location: 'Россия'
        }
    };
    
    AppState.products.unshift(newProduct);
    e.target.reset();
    
    showToast('Товар успешно добавлен!', 'success');
    renderProducts();
    renderSellerProducts();
}

function editProduct(productId) {
    showToast('Функция редактирования будет доступна в полной версии', 'info');
}

function deleteProduct(productId) {
    if (confirm('Вы уверены, что хотите удалить этот товар?')) {
        AppState.products = AppState.products.filter(p => p.id !== productId);
        showToast('Товар удален', 'success');
        renderProducts();
        renderSellerProducts();
    }
}

// Checkout
function handleCheckout(e) {
    e.preventDefault();
    
    if (AppState.cart.length === 0) {
        showToast('Корзина пуста', 'error');
        return;
    }
    
    // Simulate order processing
    const orderNumber = 'HG' + Date.now().toString().slice(-6);
    
    // Clear cart
    AppState.cart = [];
    saveCart();
    updateCartCount();
    
    closeModal('checkoutModal');
    showToast(`Заказ #${orderNumber} успешно оформлен!`, 'success');
}

// Mobile menu
function toggleMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (mobileMenuOverlay) {
        const isVisible = mobileMenuOverlay.style.display === 'block';
        mobileMenuOverlay.style.display = isVisible ? 'none' : 'block';
    }
}

function closeMobileMenu() {
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (mobileMenuOverlay) {
        mobileMenuOverlay.style.display = 'none';
    }
}

// Modal management
function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';
        document.body.style.overflow = 'hidden';
        console.log(`Modal ${modalId} opened`);
    } else {
        console.error(`Modal ${modalId} not found`);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Toast notifications
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const iconMap = {
        success: 'check-circle',
        error: 'alert-circle',
        info: 'info'
    };
    
    toast.innerHTML = `
        <i data-lucide="${iconMap[type]}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Refresh icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Click outside handler
document.addEventListener('click', function(e) {
    // Close user menu
    const userMenu = document.getElementById('userMenu');
    if (userMenu && !userMenu.contains(e.target) && !e.target.closest('.user-btn')) {
        userMenu.style.display = 'none';
    }
    
    // Close mobile menu when clicking outside
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    if (mobileMenuOverlay && e.target === mobileMenuOverlay) {
        closeMobileMenu();
    }
});

// Performance optimization
// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Export functions for global access
window.toggleSearch = toggleSearch;
window.toggleUserMenu = toggleUserMenu;
window.toggleCart = toggleCart;
window.toggleMobileMenu = toggleMobileMenu;
window.performSearch = performSearch;
window.toggleView = toggleView;
window.filterProducts = filterProducts;
window.loadMoreProducts = loadMoreProducts;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.proceedToCheckout = proceedToCheckout;
window.showProductModal = showProductModal;
window.addToCartFromModal = addToCartFromModal;
window.toggleFavorite = toggleFavorite;
window.showAuthModal = showAuthModal;
window.toggleAuthMode = toggleAuthMode;
window.showSellerPanel = showSellerPanel;
window.closeModal = closeModal;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;

// Authentication functions
let usersDatabase = null;

// Load users database
async function loadUsersDatabase() {
    try {
        // Simulate API call - in real app would fetch from backend
        const response = await fetch('./database/users.json');
        usersDatabase = await response.json();
        
        // Load current session
        const currentSession = localStorage.getItem('currentSession');
        if (currentSession) {
            const user = usersDatabase.users.find(u => u.id === parseInt(currentSession));
            if (user) {
                AppState.isLoggedIn = true;
                AppState.currentUser = user;
                updateUIForLoggedInUser();
            }
        }
    } catch (error) {
        console.error('Error loading users database:', error);
        usersDatabase = { users: [], sessions: [] };
    }
}

// Auth functions
function showAuthModal(mode = 'login') {
    const modal = document.getElementById('authModal');
    const title = document.getElementById('authTitle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchText = document.getElementById('authSwitchText');
    const switchBtn = document.getElementById('authSwitchBtn');
    
    if (mode === 'login') {
        title.textContent = 'Вход';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        switchText.textContent = 'Нет аккаунта?';
        switchBtn.textContent = 'Регистрация';
        switchBtn.onclick = () => showAuthModal('register');
    } else {
        title.textContent = 'Регистрация';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        switchText.textContent = 'Уже есть аккаунт?';
        switchBtn.textContent = 'Вход';
        switchBtn.onclick = () => showAuthModal('login');
    }
    
    modal.style.display = 'flex';
}

function toggleAuthMode() {
    const authTitle = document.getElementById('authTitle');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (loginForm.style.display === 'none') {
        // Switch to login
        authTitle.textContent = 'Вход';
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        // Switch to register
        authTitle.textContent = 'Регистрация';
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}

// Handle auth form submissions
document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    if (authForm) {
        authForm.addEventListener('submit', handleAuthSubmit);
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', handleNewsletterSubmit);
    }
    
    // Load database
    loadUsersDatabase();
});

function handleAuthSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const isLogin = document.getElementById('loginForm').style.display !== 'none';
    
    if (isLogin) {
        handleLogin(formData);
    } else {
        handleRegister(formData);
    }
}

function handleLogin(formData) {
    const email = formData.get('email') || formData.querySelector('input[type="email"]').value;
    const password = formData.get('password') || formData.querySelector('input[type="password"]').value;
    
    if (!usersDatabase) {
        showToast('Ошибка загрузки базы данных', 'error');
        return;
    }
    
    const user = usersDatabase.users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Create session
        const session = {
            userId: user.id,
            token: 'demo_token_' + Date.now(),
            expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        };
        
        // Update user last login
        user.lastLogin = new Date().toISOString();
        
        // Save session
        localStorage.setItem('currentSession', user.id.toString());
        
        // Update app state
        AppState.isLoggedIn = true;
        AppState.currentUser = user;
        
        updateUIForLoggedInUser();
        closeModal('authModal');
        showToast(`Добро пожаловать, ${user.firstName}!`, 'success');
        
        // Update user menu
        updateUserMenu();
    } else {
        showToast('Неверный email или пароль', 'error');
    }
}

function handleRegister(formData) {
    const inputs = formData.querySelectorAll('input');
    const firstName = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;
    
    if (password !== confirmPassword) {
        showToast('Пароли не совпадают', 'error');
        return;
    }
    
    if (!usersDatabase) {
        usersDatabase = { users: [], sessions: [] };
    }
    
    // Check if email already exists
    if (usersDatabase.users.find(u => u.email === email)) {
        showToast('Пользователь с таким email уже существует', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: usersDatabase.users.length + 1,
        email: email,
        password: password,
        firstName: firstName,
        lastName: '',
        phone: '',
        userType: 'customer',
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(firstName)}&background=C19A6B&color=fff&size=100`,
        address: {},
        createdAt: new Date().toISOString(),
        lastLogin: null
    };
    
    usersDatabase.users.push(newUser);
    
    // Auto login
    AppState.isLoggedIn = true;
    AppState.currentUser = newUser;
    localStorage.setItem('currentSession', newUser.id.toString());
    
    updateUIForLoggedInUser();
    closeModal('authModal');
    showToast('Регистрация успешна! Добро пожаловать!', 'success');
    
    updateUserMenu();
}

function updateUIForLoggedInUser() {
    const userBtn = document.querySelector('.user-btn');
    const userMenu = document.querySelector('.user-menu');
    
    if (userBtn && AppState.currentUser) {
        userBtn.innerHTML = `<img src="${AppState.currentUser.avatar}" alt="${AppState.currentUser.firstName}" style="width: 24px; height: 24px; border-radius: 50%;">`;
    }
}

function logout() {
    AppState.isLoggedIn = false;
    AppState.currentUser = null;
    localStorage.removeItem('currentSession');
    
    // Reset user button
    const userBtn = document.querySelector('.user-btn');
    if (userBtn) {
        userBtn.innerHTML = '<i data-lucide="user"></i>';
    }
    
    updateUserMenu();
    showToast('Вы успешно вышли из системы', 'success');
}

function updateUserMenu() {
    const userMenuContent = document.querySelector('.user-menu-content');
    if (!userMenuContent) return;
    
    if (AppState.isLoggedIn) {
        userMenuContent.innerHTML = `
            <div class="user-menu-item">
                <div class="user-info">
                    <img src="${AppState.currentUser.avatar}" alt="${AppState.currentUser.firstName}" style="width: 40px; height: 40px; border-radius: 50%;">
                    <div>
                        <div style="font-weight: 600;">${AppState.currentUser.firstName}</div>
                        <div style="font-size: 12px; color: #7A7A7A;">${AppState.currentUser.email}</div>
                    </div>
                </div>
            </div>
            <button class="user-menu-item" onclick="showSellerPanel()">Кабинет продавца</button>
            <button class="user-menu-item" onclick="logout()">Выйти</button>
        `;
    } else {
        userMenuContent.innerHTML = `
            <button class="user-menu-item" onclick="showAuthModal('login')">Войти</button>
            <button class="user-menu-item" onclick="showAuthModal('register')">Регистрация</button>
            <button class="user-menu-item" onclick="showSellerPanel()">Кабинет продавца</button>
        `;
    }
}

// Contact form handler
function handleContactFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name') || e.target.querySelector('input[type="text"]').value;
    const email = formData.get('email') || e.target.querySelector('input[type="email"]').value;
    const subject = formData.get('subject') || e.target.querySelectorAll('input[type="text"]')[1].value;
    const message = formData.get('message') || e.target.querySelector('textarea').value;
    
    // Simulate sending message
    showToast('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.', 'success');
    e.target.reset();
}

// Newsletter handler
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    showToast('Спасибо за подписку на новости!', 'success');
    e.target.reset();
}

// Update navigation
document.addEventListener('click', function(e) {
    // Handle smooth scrolling to sections
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const headerHeight = 100;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu if open
        const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
        if (mobileMenuOverlay && mobileMenuOverlay.style.display === 'flex') {
            toggleMobileMenu();
        }
    }
});

// Enhanced toast notifications
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
        <div class="toast-content">
            <i data-lucide="${type === 'success' ? 'check-circle' : type === 'error' ? 'alert-circle' : 'info'}"></i>
            <span>${message}</span>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i data-lucide="x"></i>
        </button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Initialize icons
    lucide.createIcons();
    
    // Auto remove after duration
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, duration);
}

// Enhanced user menu toggle
function toggleUserMenu() {
    const userMenu = document.getElementById('userMenu');
    if (!userMenu) return;
    
    const isVisible = userMenu.style.display === 'block';
    userMenu.style.display = isVisible ? 'none' : 'block';
    
    if (!isVisible) {
        updateUserMenu();
    }
}

// Add styles for new elements
const additionalStyles = `
    .user-menu-content {
        padding: 16px;
        min-width: 250px;
    }
    
    .user-menu-item {
        width: 100%;
        padding: 12px 16px;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
        border-radius: 8px;
        margin-bottom: 8px;
        transition: background 0.3s ease;
        font-size: 14px;
        color: #1C1C1C;
    }
    
    .user-menu-item:hover {
        background: #F5F5F5;
    }
    
    .user-info {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 0;
    }
    
    .toast {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 20px;
        background: white;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        border: 1px solid #EAE6E1;
        margin-bottom: 12px;
        animation: slideInRight 0.3s ease;
    }
    
    .toast-success {
        border-left: 4px solid #4CAF50;
    }
    
    .toast-error {
        border-left: 4px solid #F44336;
    }
    
    .toast-info {
        border-left: 4px solid #2196F3;
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .toast-content i {
        color: inherit;
    }
    
    .toast-success .toast-content i {
        color: #4CAF50;
    }
    
    .toast-error .toast-content i {
        color: #F44336;
    }
    
    .toast-info .toast-content i {
        color: #2196F3;
    }
    
    .toast-close {
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
        color: #7A7A7A;
    }
    
    .toast-close:hover {
        color: #1C1C1C;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Add additional styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

console.log('Handmade Gallery script loaded successfully with authentication system');