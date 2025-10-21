document.addEventListener('DOMContentLoaded', () => {
    const channaData = [
        {
            id: 1,
            name: 'Channa Marulioides',
            scientificName: 'Channa marulioides',
            origin: 'Sumatera & Kalimantan',
            maxSize: '80-90 cm',
            diet: 'Ikan kecil, udang, serangga',
            temperament: 'Agresif & teritorial',
            description: 'Dikenal sebagai Emperor Snakehead, Channa Maru memiliki corak batik yang khas dan memukau. Bunganya bisa berkembang seiring bertambahnya usia dan perawatan yang baik.',
            image: 'gambar/Channa_marulioides.jpg',
            price: 2500000
        },
        {
            id: 2,
            name: 'Channa Aurantimaculata',
            scientificName: 'Channa aurantimaculata',
            origin: 'Sungai Brahmaputra, India',
            maxSize: '40-50 cm',
            diet: 'Karnivora, pakan hidup',
            temperament: 'Sangat agresif',
            description: 'Dengan julukan Golden Cobra Snakehead, ikan ini memiliki warna dasar oranye keemasan dengan bintik-bintik gelap yang eksotis. Membutuhkan akuarium yang luas.',
            image: 'gambar/Channa_aurantimaculata.jpg',
            price: 1800000
        },
        {
            id: 3,
            name: 'Channa Barca',
            scientificName: 'Channa barca',
            origin: 'India & Bangladesh',
            maxSize: '90-105 cm',
            diet: 'Karnivora sejati',
            temperament: 'Agresif namun pemalu',
            description: 'Dianggap sebagai "holy grail" di dunia Channa, Barca memiliki harga yang fantastis. Warnanya sangat indah dengan corak biru, hijau, dan bintik oranye.',
            image: 'gambar/Channa_barca.webp',
            price: 15000000
        },
        {
            id: 4,
            name: 'Channa Bleheri',
            scientificName: 'Channa bleheri',
            origin: 'Sungai Brahmaputra, India',
            maxSize: '20-25 cm',
            diet: 'Pelet, cacing, udang kecil',
            temperament: 'Cukup damai (untuk Channa)',
            description: 'Dikenal sebagai Rainbow Snakehead, Channa Bleheri adalah salah satu dwarf channa paling populer karena warnanya yang cerah dan ukurannya yang relatif kecil.',
            image: 'gambar/Channa_bleheri.jpg',
            price: 450000
        },
        {
            id: 5,
            name: 'Channa Stewartii',
            scientificName: 'Channa stewartii',
            origin: 'India & Nepal',
            maxSize: '25-30 cm',
            diet: 'Karnivora',
            temperament: 'Agresif & teritorial',
            description: 'Memiliki sirip punggung dan anal berwarna biru cerah yang menawan. Channa Stewartii adalah pilihan populer bagi penghobi yang menyukai Channa berukuran sedang.',
            image: 'gambar/Channa_stewartii.jpg',
            price: 650000
        },
        {
            id: 6,
            name: 'Channa Pulchra',
            scientificName: 'Channa pulchra',
            origin: 'Myanmar',
            maxSize: '25-30 cm',
            diet: 'Pakan hidup, pelet',
            temperament: 'Semi-agresif',
            description: 'Namanya berarti "cantik" dalam bahasa Latin. Channa Pulchra memiliki bintik-bintik oranye cerah di seluruh tubuhnya dan sirip biru yang indah.',
            image: 'gambar/Channa_pulchra.jpg',
            price: 750000
        },
        {
            id: 7,
            name: 'Channa Andrao',
            scientificName: 'Channa andrao',
            origin: 'India',
            maxSize: '10-15 cm',
            diet: 'Serangga, cacing, pelet kecil',
            temperament: 'Relatif damai',
            description: 'Salah satu spesies dwarf Channa terkecil. Channa Andrao tidak memiliki sirip perut dan menampilkan warna biru dan merah yang sangat menawan, cocok untuk aquascape.',
            image: 'gambar/Channa_Andrao.jpeg',
            price: 350000
        },
        {
            id: 8,
            name: 'Channa Asiatica',
            scientificName: 'Channa asiatica',
            origin: 'China & Taiwan',
            maxSize: '30-35 cm',
            diet: 'Karnivora',
            temperament: 'Sangat agresif',
            description: 'Dikenal dengan bintik-bintik mutiara (white spot) di tubuhnya. Ada juga varian Red Spot. Ikan ini sangat teritorial dan galak terhadap ikan lain maupun sejenisnya.',
            image: 'gambar/Channa_asiatica.jpg',
            price: 850000
        },
        {
            id: 9,
            name: 'Channa Diplogramma',
            scientificName: 'Channa diplogramma',
            origin: 'India',
            maxSize: '60-70 cm',
            diet: 'Ikan, amfibi',
            temperament: 'Sangat agresif',
            description: 'Sering disebut Malabar Snakehead. Saat muda, penampilannya sangat mirip dengan Channa Micropeltes (Toman). Memiliki dua garis lateral di tubuhnya.',
            image: 'gambar/Channa_Diplogramma.jpg',
            price: 1200000
        },
        {
            id: 10,
            name: 'Channa Gachua',
            scientificName: 'Channa gachua',
            origin: 'Asia Selatan & Tenggara',
            maxSize: '15-20 cm',
            diet: 'Serangga, udang, ikan kecil',
            temperament: 'Teritorial',
            description: 'Salah satu dwarf channa yang paling luas persebarannya. Memiliki banyak variasi lokal dengan warna dan corak yang berbeda-beda.',
            image: 'gambar/Channa_gachua_portrait_2.jpg',
            price: 280000
        },
        {
            id: 11,
            name: 'Channa Argus',
            scientificName: 'Channa argus',
            origin: 'China, Rusia, Korea',
            maxSize: '85-100 cm',
            diet: 'Sangat rakus, karnivora',
            temperament: 'Invasif & sangat agresif',
            description: 'Dikenal sebagai Northern Snakehead. Sangat adaptif dan dianggap sebagai spesies invasif di banyak negara karena kemampuannya bertahan hidup.',
            image: 'gambar/Channa_argus_2.jpeg',
            price: 950000
        },
        {
            id: 12,
            name: 'Channa Bankanensis',
            scientificName: 'Channa bankanensis',
            origin: 'Pulau Bangka, Sumatera',
            maxSize: '20-25 cm',
            diet: 'Karnivora',
            temperament: 'Agresif',
            description: 'Spesies yang mendiami perairan blackwater dengan tingkat keasaman (pH) yang rendah. Memiliki warna gelap untuk berkamuflase.',
            image: 'gambar/Channa_Bankanensis.jpeg',
            price: 420000
        }
    ];

    const catalog = document.getElementById('channa-catalog');
    const searchBar = document.getElementById('search-bar');
    const noResults = document.getElementById('no-results');
    const modal = document.getElementById('channa-modal');
    const modalContent = document.getElementById('modal-content');

    // Cart functionality
    let cart = [];
    
    // Helper function to format price
    const formatPrice = (price) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(price);
    };
    
    // Add to cart function
    const addToCart = (fishId) => {
        const fish = channaData.find(f => f.id === fishId);
        if (!fish) return;
        
        const existingItem = cart.find(item => item.id === fish.id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...fish, quantity: 1 });
        }
        updateCartUI();
        showCartNotification();
    };
    
    // Make addToCart global
    window.addToCart = addToCart;
    
    // Remove from cart function
    const removeFromCart = (fishId) => {
        cart = cart.filter(item => item.id !== fishId);
        updateCartUI();
    };
    
    // Update quantity function
    const updateQuantity = (fishId, newQuantity) => {
        const item = cart.find(item => item.id === fishId);
        if (item) {
            if (newQuantity <= 0) {
                removeFromCart(fishId);
            } else {
                item.quantity = newQuantity;
                updateCartUI();
            }
        }
    };
    
    // Update cart UI
    const updateCartUI = () => {
        const cartCount = document.getElementById('cart-count');
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cartCount) {
            cartCount.textContent = itemCount;
            cartCount.style.display = itemCount > 0 ? 'block' : 'none';
        }
        
        // Update cart modal if it exists
        const cartModal = document.getElementById('cart-modal');
        if (cartModal && cartModal.classList.contains('show')) {
            renderCartModal();
        }
    };
    
    // Show cart notification
    const showCartNotification = () => {
        const notification = document.createElement('div');
        notification.className = 'fixed top-20 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = 'Ikan ditambahkan ke keranjang!';
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 2000);
    };

    // Cart modal functions
    const openCartModal = () => {
        const cartModal = document.getElementById('cart-modal');
        const cartContent = document.getElementById('cart-content');
        
        renderCartModal();
        
        cartModal.classList.remove('opacity-0', 'invisible');
        cartContent.classList.remove('scale-95');
        cartContent.classList.add('scale-in');
        document.body.style.overflow = 'hidden';
    };

    const closeCartModal = () => {
        const cartModal = document.getElementById('cart-modal');
        const cartContent = document.getElementById('cart-content');
        
        cartModal.classList.add('opacity-0', 'invisible');
        cartContent.classList.add('scale-95');
        cartContent.classList.remove('show');
        document.body.style.overflow = 'auto';
    };

    const renderCartModal = () => {
        const cartContent = document.getElementById('cart-content');
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
        
        if (cart.length === 0) {
            cartContent.innerHTML = `
                <div class="p-6 sm:p-8 text-center">
                    <div class="mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 sm:h-16 sm:w-16 text-slate-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                        </svg>
                        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">Keranjang Kosong</h2>
                        <p class="text-slate-400 text-base sm:text-lg">Tambahkan ikan channa favorit Anda ke keranjang</p>
                    </div>
                    <button onclick="closeCartModal()" class="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                        Tutup
                    </button>
                </div>
            `;
        } else {
            cartContent.innerHTML = `
                <div class="p-4 sm:p-6">
                    <div class="flex items-center justify-between mb-4 sm:mb-6">
                        <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white">Keranjang Belanja</h2>
                        <button onclick="closeCartModal()" class="text-slate-400 hover:text-white transition-colors duration-200 bg-slate-800/50 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div class="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                        ${cart.map(item => `
                            <div class="bg-slate-700/50 rounded-lg p-4 sm:p-5 border border-slate-600/30">
                                <div class="flex items-center space-x-4 sm:space-x-5">
                                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0">
                                    <div class="flex-1 min-w-0">
                                        <h3 class="font-semibold text-white text-base sm:text-lg truncate">${item.name}</h3>
                                        <p class="text-slate-400 text-sm sm:text-base truncate">${item.scientificName}</p>
                                        <p class="text-green-400 font-bold text-base sm:text-lg">${formatPrice(item.price)}</p>
                                    </div>
                                    <div class="flex items-center space-x-1 sm:space-x-2 flex-shrink-0">
                                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="bg-slate-600 hover:bg-slate-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                                            </svg>
                                        </button>
                                        <span class="text-white font-medium w-6 sm:w-8 text-center text-xs sm:text-sm">${item.quantity}</span>
                                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="bg-slate-600 hover:bg-slate-500 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        </button>
                                        <button onclick="removeFromCart(${item.id})" class="bg-red-500 hover:bg-red-600 text-white w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-colors duration-200 ml-1 sm:ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="bg-slate-700/50 rounded-lg p-3 sm:p-4 border border-slate-600/30 mb-4 sm:mb-6">
                        <div class="flex items-center justify-between text-lg sm:text-xl font-bold">
                            <span class="text-white">Total (${itemCount} item):</span>
                            <span class="text-green-400">${formatPrice(cartTotal)}</span>
                        </div>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button onclick="closeCartModal()" class="flex-1 bg-slate-600 hover:bg-slate-500 text-white py-3 sm:py-4 rounded-lg font-medium transition-colors duration-200 text-base sm:text-lg">
                            Lanjut Belanja
                        </button>
                        <button onclick="proceedToCheckout()" class="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 sm:py-4 rounded-lg font-medium transition-colors duration-200 text-base sm:text-lg">
                            Checkout
                        </button>
                    </div>
                </div>
            `;
        }
        
        // Make functions global
        window.closeCartModal = closeCartModal;
        window.updateQuantity = updateQuantity;
        window.removeFromCart = removeFromCart;
        window.proceedToCheckout = proceedToCheckout;
    };

    const proceedToCheckout = () => {
        if (cart.length === 0) return;
        
        const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        
        // Show checkout form
        const cartContent = document.getElementById('cart-content');
        cartContent.innerHTML = `
            <div class="p-4 sm:p-6">
                <div class="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-white">Checkout</h2>
                    <button onclick="renderCartModal()" class="text-slate-400 hover:text-white transition-colors duration-200 bg-slate-800/50 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
                
                <form id="checkout-form" class="space-y-4 sm:space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label class="block text-white font-medium mb-3 text-base sm:text-lg">Nama Lengkap</label>
                            <input type="text" required class="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-base sm:text-lg" placeholder="Masukkan nama lengkap">
                        </div>
                        <div>
                            <label class="block text-white font-medium mb-3 text-base sm:text-lg">No. Telepon</label>
                            <input type="tel" required class="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-base sm:text-lg" placeholder="08xxxxxxxxxx">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-white font-medium mb-3 text-base sm:text-lg">Alamat Lengkap</label>
                        <textarea required rows="3" class="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-base sm:text-lg" placeholder="Masukkan alamat lengkap untuk pengiriman"></textarea>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label class="block text-white font-medium mb-3 text-base sm:text-lg">Kota</label>
                            <input type="text" required class="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-base sm:text-lg" placeholder="Kota">
                        </div>
                        <div>
                            <label class="block text-white font-medium mb-3 text-base sm:text-lg">Kode Pos</label>
                            <input type="text" required class="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 sm:px-5 py-3 sm:py-4 focus:outline-none focus:ring-2 focus:ring-sky-500 text-base sm:text-lg" placeholder="12345">
                        </div>
                    </div>
                    
                    <div class="bg-slate-700/50 rounded-lg p-3 sm:p-4 border border-slate-600/30">
                        <h3 class="text-white font-semibold mb-4 text-base sm:text-lg">Ringkasan Pesanan</h3>
                        <div class="space-y-3">
                            ${cart.map(item => `
                                <div class="flex justify-between text-sm sm:text-base">
                                    <span class="text-slate-300 truncate">${item.name} x${item.quantity}</span>
                                    <span class="text-green-400 flex-shrink-0">${formatPrice(item.price * item.quantity)}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="border-t border-slate-600 mt-4 pt-4">
                            <div class="flex justify-between font-bold text-lg sm:text-xl">
                                <span class="text-white">Total:</span>
                                <span class="text-green-400">${formatPrice(cartTotal)}</span>
                            </div>
                        </div>
                    </div>
                    
                    <button type="submit" class="w-full bg-green-500 hover:bg-green-600 text-white py-4 sm:py-5 rounded-lg font-bold text-lg sm:text-xl transition-colors duration-200">
                        Proses Pembayaran
                    </button>
                </form>
            </div>
        `;
        
        // Handle form submission
        document.getElementById('checkout-form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Show success message
            cartContent.innerHTML = `
                <div class="p-6 sm:p-8 text-center">
                    <div class="mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 sm:h-16 sm:w-16 text-green-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h2 class="text-2xl sm:text-3xl font-bold text-white mb-3">Pesanan Berhasil!</h2>
                        <p class="text-slate-400 text-base sm:text-lg">Terima kasih atas pembelian Anda. Pesanan akan diproses dan dikirim sesuai alamat yang diberikan.</p>
                    </div>
                    <button onclick="resetCart()" class="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg">
                        Belanja Lagi
                    </button>
                </div>
            `;
        });
        
        window.resetCart = () => {
            cart = [];
            updateCartUI();
            closeCartModal();
        };
    };

    const displayChannas = (fishList) => {
        catalog.innerHTML = '';
        if (fishList.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            fishList.forEach((fish, index) => {
                const card = document.createElement('div');
                card.className = 'channa-card rounded-xl overflow-hidden cursor-pointer group fade-in';
                card.style.animationDelay = `${index * 0.1}s`;
                card.dataset.id = fish.id;

                card.innerHTML = `
                    <div class="relative overflow-hidden aspect-card">
                        <div class="image-placeholder w-full h-full flex items-center justify-center">
                            <div class="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-sky-400"></div>
                        </div>
                        <img src="${fish.image}" 
                             alt="${fish.name}" 
                             loading="lazy" 
                             decoding="async" 
                             class="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-500"
                             onload="handleImageLoad(this)"
                             onerror="handleImageError(this)">
                        <div class="absolute inset-0 card-overlay"></div>
                        <div class="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5">
                            <h3 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg leading-tight">${fish.name}</h3>
                            <p class="text-sky-200 text-sm sm:text-base opacity-90">${fish.scientificName}</p>
                        </div>
                        <div class="absolute top-2 sm:top-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div class="bg-black/50 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 sm:p-5 md:p-6">
                        <div class="flex items-center text-slate-400 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 text-sky-400 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-sm sm:text-base truncate">${fish.origin}</span>
                        </div>
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-sm text-slate-500 truncate">Ukuran: ${fish.maxSize}</span>
                            <span class="px-2 sm:px-3 py-1 sm:py-1.5 text-sm rounded-full bg-red-500/20 text-red-300 flex-shrink-0">${fish.temperament}</span>
                        </div>
                        <div class="flex items-center justify-between gap-3">
                            <span class="text-lg sm:text-xl md:text-2xl font-bold text-green-400 truncate">${formatPrice(fish.price)}</span>
                            <button onclick="addToCart(${fish.id})" class="bg-sky-500 hover:bg-sky-600 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-colors duration-200 flex items-center space-x-2 flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                                </svg>
                                <span>Tambah</span>
                            </button>
                        </div>
                    </div>
                `;
                catalog.appendChild(card);
            });
        }
    };

    // Global functions for image handling
    window.handleImageLoad = function(img) {
        const placeholder = img.previousElementSibling;
        placeholder.style.opacity = '0';
        img.style.opacity = '1';
        setTimeout(() => {
            if (placeholder.parentNode) {
                placeholder.remove();
            }
        }, 300);
    };

    window.handleImageError = function(img) {
        const placeholder = img.previousElementSibling;
        placeholder.innerHTML = '<div class="image-error w-full h-full"><span>Gambar tidak tersedia</span></div>';
        placeholder.style.opacity = '1';
        img.style.display = 'none';
    };

    const openModal = (fish) => {
        modalContent.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-0 scale-in">
                <div class="relative w-full md:h-full aspect-video md:aspect-auto group">
                    <div class="image-placeholder w-full h-full flex items-center justify-center md:rounded-l-2xl rounded-t-xl md:rounded-tr-none">
                        <div class="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-sky-400"></div>
                    </div>
                    <img src="${fish.image}" 
                         alt="${fish.name}" 
                         loading="lazy" 
                         decoding="async" 
                         class="w-full h-full object-cover absolute inset-0 opacity-0 transition-all duration-500 md:rounded-l-2xl rounded-t-xl md:rounded-tr-none cursor-zoom-in"
                         onload="handleModalImageLoad(this)"
                         onerror="handleModalImageError(this)"
                         onclick="zoomModalImage(this)">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="bg-black/70 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="p-4 sm:p-6 md:p-8 relative bg-gradient-to-br from-slate-800 to-slate-900">
                    <button id="close-modal" class="absolute top-3 right-3 sm:top-6 sm:right-6 text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 bg-slate-800/50 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="                                       none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                    
                    <div class="pr-8 sm:pr-12">
                        <div class="mb-6 sm:mb-8">
                            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">${fish.name}</h2>
                            <p class="text-sky-400 font-medium text-base sm:text-lg">${fish.scientificName}</p>
                        </div>
                        
                        <p class="text-slate-300 mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg">${fish.description}</p>
                        
                        <div class="space-y-4 sm:space-y-5 md:space-y-6">
                            <div class="flex items-start space-x-4 sm:space-x-5 p-4 sm:p-5 bg-slate-700/30 rounded-lg sm:rounded-xl border border-slate-600/30">
                                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-sky-500/20 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-slate-200 mb-2 text-base sm:text-lg">Asal Habitat</h4>
                                    <p class="text-slate-400 text-sm sm:text-base">${fish.origin}</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4 sm:space-x-5 p-4 sm:p-5 bg-slate-700/30 rounded-lg sm:rounded-xl border border-slate-600/30">
                                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-slate-200 mb-2 text-base sm:text-lg">Ukuran Maksimal</h4>
                                    <p class="text-slate-400 text-sm sm:text-base">${fish.maxSize}</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4 sm:space-x-5 p-4 sm:p-5 bg-slate-700/30 rounded-lg sm:rounded-xl border border-slate-600/30">
                                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-slate-200 mb-2 text-base sm:text-lg">Jenis Pakan</h4>
                                    <p class="text-slate-400 text-sm sm:text-base">${fish.diet}</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4 sm:space-x-5 p-4 sm:p-5 bg-slate-700/30 rounded-lg sm:rounded-xl border border-slate-600/30">
                                <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-slate-200 mb-2 text-base sm:text-lg">Karakteristik</h4>
                                    <span class="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium bg-red-500/20 text-red-300 border border-red-500/30">
                                        ${fish.temperament}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        modal.classList.remove('opacity-0', 'invisible');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-in');
        document.body.style.overflow = 'hidden';

        document.getElementById('close-modal').addEventListener('click', closeModal);

        const onKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        };
        document.addEventListener('keydown', onKeyDown, { once: true });
    };

    // Modal image handling functions
    window.handleModalImageLoad = function(img) {
        const placeholder = img.previousElementSibling;
        placeholder.style.opacity = '0';
        img.style.opacity = '1';
        setTimeout(() => {
            if (placeholder.parentNode) {
                placeholder.remove();
            }
        }, 300);
    };

    window.handleModalImageError = function(img) {
        const placeholder = img.previousElementSibling;
        placeholder.innerHTML = '<div class="image-error w-full h-full md:rounded-l-2xl rounded-t-2xl md:rounded-tr-none"><span>Gambar tidak tersedia</span></div>';
        placeholder.style.opacity = '1';
        img.style.display = 'none';
    };

    window.zoomModalImage = function(img) {
        // Create zoom overlay
        const zoomOverlay = document.createElement('div');
        zoomOverlay.className = 'fixed inset-0 bg-black bg-opacity-95 z-60 flex items-center justify-center p-4 cursor-zoom-out zoom-overlay';
        
        // Create image container that will handle the full-size image
        const imageContainer = document.createElement('div');
        imageContainer.className = 'relative w-full h-full image-container';
        
        // Create the actual image element
        const zoomImage = document.createElement('img');
        zoomImage.src = img.src;
        zoomImage.alt = img.alt;
        zoomImage.className = 'drop-shadow-2xl transition-transform duration-300 ease-out';
        
        // Close button
        const closeButton = document.createElement('button');
        closeButton.className = 'absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 backdrop-blur-sm rounded-full p-2 z-10';
        closeButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        `;
        
        // Zoom controls
        const zoomControls = document.createElement('div');
        zoomControls.className = 'absolute top-4 left-4 flex flex-col space-y-2 z-10';
        zoomControls.innerHTML = `
            <button id="zoom-in" class="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
            <button id="zoom-out" class="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                </svg>
            </button>
            <button id="reset-zoom" class="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:text-gray-300 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
            </button>
        `;
        
        // Info panel showing image dimensions and instructions
        const infoPanel = document.createElement('div');
        infoPanel.className = 'absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-sm opacity-0 transition-opacity duration-300';
        
        // Instructions panel
        const instructionsPanel = document.createElement('div');
        instructionsPanel.className = 'absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-4 py-2 text-white text-xs opacity-0 transition-opacity duration-300 max-w-xs';
        instructionsPanel.innerHTML = `
            <div class="space-y-1">
                <div class="font-semibold text-sky-300 mb-2">Cara Menggunakan:</div>
                <div>🖱️ Scroll mouse untuk zoom in/out</div>
                <div>🖱️ Drag untuk memindahkan gambar</div>
                <div>👆 Pinch untuk zoom (mobile)</div>
                <div>⌨️ ESC untuk menutup</div>
            </div>
        `;
        
        // Variables for zoom and pan functionality
        let scale = 1;
        let isDragging = false;
        let startX, startY, translateX = 0, translateY = 0;
        
        // Load image to get dimensions
        const tempImg = new Image();
        tempImg.onload = function() {
            // Get available screen space (minus padding and UI elements)
            const screenWidth = window.innerWidth - 64; // minus padding for controls
            const screenHeight = window.innerHeight - 64; // minus padding for controls
            
            // Calculate the maximum dimensions that fit completely in screen
            const widthRatio = screenWidth / this.width;
            const heightRatio = screenHeight / this.height;
            
            // Use the smaller ratio to ensure image fits completely
            const scaleRatio = Math.min(widthRatio, heightRatio, 1); // Never scale up beyond original size initially
            
            const displayWidth = this.width * scaleRatio;
            const displayHeight = this.height * scaleRatio;
            
            // Set initial image dimensions
            zoomImage.style.width = `${displayWidth}px`;
            zoomImage.style.height = `${displayHeight}px`;
            zoomImage.style.maxWidth = `${screenWidth}px`;
            zoomImage.style.maxHeight = `${screenHeight}px`;
            
            // Update info panel function
            const updateInfoPanel = () => {
                const currentWidth = Math.round(displayWidth * scale);
                const currentHeight = Math.round(displayHeight * scale);
                const aspectRatio = (this.width / this.height).toFixed(2);
                
                infoPanel.innerHTML = `
                    <div class="flex flex-wrap items-center gap-2 text-xs">
                        <span class="bg-slate-700 px-2 py-1 rounded">Asli: ${this.width}×${this.height}px</span>
                        <span class="bg-sky-600 px-2 py-1 rounded">Tampil: ${currentWidth}×${currentHeight}px</span>
                        <span class="bg-green-600 px-2 py-1 rounded">Zoom: ${Math.round(scale * 100)}%</span>
                        <span class="bg-purple-600 px-2 py-1 rounded">Ratio: ${aspectRatio}</span>
                    </div>
                `;
            };
            
            updateInfoPanel();
            
            // Show info panel and instructions after a delay
            setTimeout(() => {
                infoPanel.style.opacity = '1';
                instructionsPanel.style.opacity = '1';
            }, 1000);
            
            // Zoom control event listeners
            zoomControls.addEventListener('click', (e) => {
                if (e.target.closest('#zoom-in')) {
                    const newScale = scale * 1.2;
                    if (newScale <= 10) {
                        scale = newScale;
                        zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                        updateInfoPanel();
                    }
                } else if (e.target.closest('#zoom-out')) {
                    const newScale = scale * 0.8;
                    if (newScale >= 0.1) {
                        scale = newScale;
                        zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                        updateInfoPanel();
                    }
                } else if (e.target.closest('#reset-zoom')) {
                    scale = 1;
                    translateX = 0;
                    translateY = 0;
                    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                    updateInfoPanel();
                }
            });
            
            // Mouse wheel zoom
            zoomOverlay.addEventListener('wheel', (e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? 0.9 : 1.1;
                const newScale = scale * delta;
                
                // Calculate if the scaled image would fit in the viewport
                const scaledWidth = displayWidth * newScale;
                const scaledHeight = displayHeight * newScale;
                
                // Only allow zoom if image doesn't exceed reasonable bounds
                if (newScale >= 0.1 && newScale <= 10) {
                    scale = newScale;
                    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                    updateInfoPanel();
                }
            });
            
            // Mouse drag to pan
            zoomImage.addEventListener('mousedown', (e) => {
                isDragging = true;
                startX = e.clientX - translateX;
                startY = e.clientY - translateY;
                zoomImage.style.cursor = 'grabbing';
            });
            
            document.addEventListener('mousemove', (e) => {
                if (!isDragging) return;
                e.preventDefault();
                
                // Calculate new translate values
                const newTranslateX = e.clientX - startX;
                const newTranslateY = e.clientY - startY;
                
                // Apply constraints to prevent image from going too far out of bounds
                const scaledWidth = displayWidth * scale;
                const scaledHeight = displayHeight * scale;
                const maxTranslateX = Math.max(0, (scaledWidth - window.innerWidth + 64) / 2);
                const maxTranslateY = Math.max(0, (scaledHeight - window.innerHeight + 64) / 2);
                
                translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX));
                translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY));
                
                zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
            });
            
            document.addEventListener('mouseup', () => {
                isDragging = false;
                zoomImage.style.cursor = 'grab';
            });
            
            // Touch support for mobile
            let lastTouchDistance = 0;
            
            zoomOverlay.addEventListener('touchstart', (e) => {
                if (e.touches.length === 2) {
                    const touch1 = e.touches[0];
                    const touch2 = e.touches[1];
                    lastTouchDistance = Math.sqrt(
                        Math.pow(touch2.clientX - touch1.clientX, 2) + 
                        Math.pow(touch2.clientY - touch1.clientY, 2)
                    );
                }
            });
            
            zoomOverlay.addEventListener('touchmove', (e) => {
                if (e.touches.length === 2) {
                    e.preventDefault();
                    const touch1 = e.touches[0];
                    const touch2 = e.touches[1];
                    const distance = Math.sqrt(
                        Math.pow(touch2.clientX - touch1.clientX, 2) + 
                        Math.pow(touch2.clientY - touch1.clientY, 2)
                    );
                    
                    if (lastTouchDistance > 0) {
                        const delta = distance / lastTouchDistance;
                        const newScale = scale * delta;
                        if (newScale >= 0.1 && newScale <= 10) {
                            scale = newScale;
                            zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                            updateInfoPanel();
                        }
                    }
                    lastTouchDistance = distance;
                }
            });
        };
        tempImg.src = img.src;
        
        // Add elements to container
        imageContainer.appendChild(zoomImage);
        imageContainer.appendChild(closeButton);
        imageContainer.appendChild(zoomControls);
        imageContainer.appendChild(infoPanel);
        imageContainer.appendChild(instructionsPanel);
        zoomOverlay.appendChild(imageContainer);
        
        const closeZoom = () => {
            zoomOverlay.style.opacity = '0';
            setTimeout(() => {
                if (document.body.contains(zoomOverlay)) {
                    document.body.removeChild(zoomOverlay);
                }
                document.body.style.overflow = 'hidden'; // Keep modal scroll disabled
            }, 300);
        };
        
        // Clean up resize listener when zoom is closed
        const closeZoomWithCleanup = () => {
            window.removeEventListener('resize', handleResize);
            closeZoom();
        };
        
        // Event listeners
        closeButton.addEventListener('click', closeZoomWithCleanup);
        
        zoomOverlay.addEventListener('click', (e) => {
            if (e.target === zoomOverlay) {
                closeZoomWithCleanup();
            }
        });
        
        // Close on escape key
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                closeZoomWithCleanup();
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
        
        // Prevent image dragging
        zoomImage.addEventListener('dragstart', (e) => e.preventDefault());
        
        // Handle window resize to maintain proper image sizing
        const handleResize = () => {
            if (tempImg.complete) {
                const screenWidth = window.innerWidth - 64;
                const screenHeight = window.innerHeight - 64;
                
                const widthRatio = screenWidth / tempImg.width;
                const heightRatio = screenHeight / tempImg.height;
                const scaleRatio = Math.min(widthRatio, heightRatio, 1);
                
                const newDisplayWidth = tempImg.width * scaleRatio;
                const newDisplayHeight = tempImg.height * scaleRatio;
                
                zoomImage.style.width = `${newDisplayWidth}px`;
                zoomImage.style.height = `${newDisplayHeight}px`;
                zoomImage.style.maxWidth = `${screenWidth}px`;
                zoomImage.style.maxHeight = `${screenHeight}px`;
                
                // Reset scale and position if needed
                if (scale > 1) {
                    scale = 1;
                    translateX = 0;
                    translateY = 0;
                    zoomImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                }
            }
        };
        
        window.addEventListener('resize', handleResize);
        
        document.body.appendChild(zoomOverlay);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.add('opacity-0', 'invisible');
        modalContent.classList.add('scale-95');
        document.body.style.overflow = 'auto';
    };

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredChannas = channaData.filter(fish => 
            fish.name.toLowerCase().includes(searchTerm)
        );
        displayChannas(filteredChannas);
    });

    catalog.addEventListener('click', (e) => {
        const card = e.target.closest('.channa-card');
        if (card) {
            const fishId = parseInt(card.dataset.id);
            const fish = channaData.find(f => f.id === fishId);
            if (fish) {
                openModal(fish);
            }
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Cart button event listener
    document.getElementById('cart-button').addEventListener('click', openCartModal);
    
    // Cart modal event listener
    document.getElementById('cart-modal').addEventListener('click', (e) => {
        if (e.target === document.getElementById('cart-modal')) {
            closeCartModal();
        }
    });
    
    displayChannas(channaData);
});


