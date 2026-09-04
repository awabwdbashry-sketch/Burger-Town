/* ========================================
   BURGER TOWN - MAIN JAVASCRIPT
   RTL Arabic Restaurant Website
======================================== */

'use strict';

// ===== MENU DATA =====
const menuData = {
  beef: [
    {
      name: 'الكلاسيك برغر',
      desc: 'لحم بقري طازج 200 جم مع جبنة شيدر وخضروات طازجة وصوص خاص',
      price: 89,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80&auto=format&fit=crop',
      badge: 'الأكثر طلباً'
    },
    {
      name: 'دبل شيز برغر',
      desc: 'طبقتان من اللحم البقري مع طبقتين من جبنة الشيدر وبصل مكرمل',
      price: 119,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80&auto=format&fit=crop',
      badge: 'جديد'
    },
    {
      name: 'سبيسيال برغر',
      desc: 'برغر فاخر بلحم واغيو مع فطر مشوي وجبنة بري وصوص تروفل',
      price: 155,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1596956470007-2bf6095e7e16?w=500&q=80&auto=format&fit=crop',
      badge: 'فاخر'
    },
    {
      name: 'سموكي برغر',
      desc: 'لحم مدخن مع صوص BBQ وبيكون مقرمش وبصل مكرمل وجبنة سويسرية',
      price: 109,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80&auto=format&fit=crop',
      badge: ''
    }
  ],
  chicken: [
    {
      name: 'كريسبي تشيكن',
      desc: 'دجاج مقرمش طازج مع خس وطماطم وصوص هاني موستارد',
      price: 79,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&q=80&auto=format&fit=crop',
      badge: 'الأكثر طلباً'
    },
    {
      name: 'سبايسي تشيكن',
      desc: 'دجاج حار بتتبيلة خاصة مع صوص سريراشا وجالابينيو',
      price: 85,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=500&q=80&auto=format&fit=crop',
      badge: '🌶️ حار'
    },
    {
      name: 'تاون تشيكن',
      desc: 'برغر دجاج فاخر مع أفوكادو وجبنة موزاريلا وصوص ليمون',
      price: 95,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500&q=80&auto=format&fit=crop',
      badge: 'جديد'
    }
  ],
  family: [
    {
      name: 'وجبة العائلة الكبيرة',
      desc: '4 برغر مشكل + 4 بطاطس كبيرة + 4 مشروبات + 2 ميلك شيك',
      price: 199,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80&auto=format&fit=crop',
      badge: 'الأوفر'
    },
    {
      name: 'وجبة الثنائي',
      desc: '2 برغر دبل + 2 بطاطس وسط + 2 مشروب + صوص مجاني',
      price: 149,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&q=80&auto=format&fit=crop',
      badge: 'وفّر أكثر'
    },
    {
      name: 'وجبة الحفلات',
      desc: '8 برغر مشكل + 4 بطاطس كبيرة + 8 مشروبات + 4 حلويات',
      price: 349,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500&q=80&auto=format&fit=crop',
      badge: 'للمناسبات'
    }
  ],
  starters: [
    {
      name: 'ناجتس الدجاج (12 قطعة)',
      desc: 'ناجتس دجاج طازجة ومقرمشة مع صوص البرباكيو والهاني موستارد',
      price: 59,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500&q=80&auto=format&fit=crop',
      badge: 'الأكثر طلباً'
    },
    {
      name: 'أجنحة البافلو',
      desc: 'أجنحة دجاج حارة بصوص البافلو الأصلي مع كريمة الزبادي',
      price: 75,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1608039755401-742074f0548d?w=500&q=80&auto=format&fit=crop',
      badge: '🌶️ حار'
    },
    {
      name: 'موزاريلا ستيكس',
      desc: 'عصي جبنة موزاريلا مقرمشة مع صوص الطماطم الإيطالي',
      price: 49,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1548340748-6247e4f60b3a?w=500&q=80&auto=format&fit=crop',
      badge: ''
    }
  ],
  sides: [
    {
      name: 'بطاطس كريسبي كبيرة',
      desc: 'بطاطس مقلية ذهبية ومقرمشة مع ملح خاص وبهارات مميزة',
      price: 29,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1482049289013-72b58040f5e0?w=500&q=80&auto=format&fit=crop',
      badge: 'الأكثر طلباً'
    },
    {
      name: 'بطاطس حلوة',
      desc: 'بطاطس حلوة مقلية مع كريمة القرفة والسكر البني',
      price: 35,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80&auto=format&fit=crop',
      badge: 'جديد'
    },
    {
      name: 'حلقات البصل',
      desc: 'حلقات بصل كريسبي محمرة مع صوص الراننش الخاص',
      price: 32,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80&auto=format&fit=crop',
      badge: ''
    }
  ],
  drinks: [
    {
      name: 'كوكاكولا',
      desc: 'كوكاكولا باردة في كوب كبير مع ثلج',
      price: 18,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500&q=80&auto=format&fit=crop',
      badge: ''
    },
    {
      name: 'عصير برتقال طازج',
      desc: 'عصير برتقال طبيعي طازج 100٪ بدون سكر مضاف',
      price: 25,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500&q=80&auto=format&fit=crop',
      badge: 'طبيعي'
    },
    {
      name: 'ماء معدني',
      desc: 'ماء معدني طبيعي نقي',
      price: 8,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=500&q=80&auto=format&fit=crop',
      badge: ''
    }
  ],
  milkshake: [
    {
      name: 'ميلك شيك شوكولاتة',
      desc: 'ميلك شيك شوكولاتة بلجيكية غنية مع كريمة شانتيه وبودرة الكاكاو',
      price: 45,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=500&q=80&auto=format&fit=crop',
      badge: 'الأكثر طلباً'
    },
    {
      name: 'ميلك شيك فراولة',
      desc: 'فراولة طازجة مع آيس كريم فانيليا وكريمة ناعمة',
      price: 45,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=500&q=80&auto=format&fit=crop',
      badge: ''
    },
    {
      name: 'ميلك شيك فانيليا',
      desc: 'آيس كريم فانيليا فاخر مع حليب كامل الدسم وكريمة مخفوقة',
      price: 40,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?w=500&q=80&auto=format&fit=crop',
      badge: ''
    }
  ],
  desserts: [
    {
      name: 'كيك الشوكولاتة',
      desc: 'قطعة كيك شوكولاتة حارة مع كولا دي كريم فانيليا وتوبينج الكراميل',
      price: 39,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80&auto=format&fit=crop',
      badge: 'الأكثر طلباً'
    },
    {
      name: 'آيس كريم سانداي',
      desc: 'كرتين آيس كريم مع صوص الشوكولاتة والفواكه المجففة',
      price: 29,
      rating: 4,
      img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=80&auto=format&fit=crop',
      badge: ''
    },
    {
      name: 'براونيز بالشوكولاتة',
      desc: 'براونيز دافئة غنية بالشوكولاتة مع آيس كريم فانيليا وصوص الكراميل',
      price: 35,
      rating: 5,
      img: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=500&q=80&auto=format&fit=crop',
      badge: 'جديد'
    }
  ]
};

const popularItems = [
  {
    name: 'الكلاسيك برغر',
    desc: 'لحم بقري طازج 200 جم مع جبنة شيدر وخضروات طازجة وصوص خاص',
    price: 89,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85&auto=format&fit=crop',
    badge: '🏆 الأكثر طلباً'
  },
  {
    name: 'دبل شيز برغر',
    desc: 'طبقتان من اللحم البقري مع طبقتين من جبنة الشيدر وبصل مكرمل',
    price: 119,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&q=85&auto=format&fit=crop',
    badge: '⭐ مميز'
  },
  {
    name: 'كريسبي تشيكن',
    desc: 'دجاج مقرمش طازج مع خس وطماطم وصوص هاني موستارد فريد',
    price: 79,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&q=85&auto=format&fit=crop',
    badge: '🔥 ساخن'
  },
  {
    name: 'ناجتس الدجاج',
    desc: 'ناجتس دجاج طازجة ومقرمشة مع صوص البرباكيو والهاني موستارد',
    price: 59,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=600&q=85&auto=format&fit=crop',
    badge: '💫 مفضل'
  },
  {
    name: 'ميلك شيك شوكولاتة',
    desc: 'شوكولاتة بلجيكية غنية مع كريمة شانتيه وبودرة الكاكاو الفاخرة',
    price: 45,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=600&q=85&auto=format&fit=crop',
    badge: '🥛 مميز'
  },
  {
    name: 'بطاطس كريسبي',
    desc: 'بطاطس مقلية ذهبية مقرمشة مع ملح خاص وتوابل مميزة',
    price: 29,
    rating: 5,
    img: 'https://images.unsplash.com/photo-1482049289013-72b58040f5e0?w=600&q=85&auto=format&fit=crop',
    badge: '🍟 كلاسيك'
  }
];

// ===== CART STATE =====
let cart = [];

// ===== STARS HELPER =====
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += i <= rating ? '⭐' : '☆';
  }
  return stars + ` (${rating}.0)`;
}

// ===== RENDER POPULAR ITEMS =====
function renderPopular() {
  const grid = document.getElementById('popularGrid');
  if (!grid) return;
  grid.innerHTML = popularItems.map((item, i) => `
    <div class="product-card" data-reveal style="animation-delay:${i * 0.08}s">
      <div class="card-img">
        <img src="${item.img}" alt="${item.name}" loading="lazy" />
        ${item.badge ? `<div class="card-badge">${item.badge}</div>` : ''}
      </div>
      <div class="card-body">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${item.desc}</p>
        <div class="card-stars">${renderStars(item.rating)}</div>
        <div class="card-footer">
          <div class="card-price">${item.price} <span>جنيه</span></div>
          <button class="add-cart-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.img}')">
            + أضف للسلة
          </button>
        </div>
      </div>
    </div>
  `).join('');
  observeReveal();
}

// ===== RENDER MENU =====
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;
  const items = menuData[category] || [];
  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = items.map((item, i) => `
      <div class="product-card" data-reveal style="animation-delay:${i * 0.07}s">
        <div class="card-img">
          <img src="${item.img}" alt="${item.name}" loading="lazy" />
          ${item.badge ? `<div class="card-badge">${item.badge}</div>` : ''}
        </div>
        <div class="card-body">
          <h3 class="card-name">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
          <div class="card-stars">${renderStars(item.rating)}</div>
          <div class="card-footer">
            <div class="card-price">${item.price} <span>جنيه</span></div>
            <button class="add-cart-btn" onclick="addToCart('${item.name}', ${item.price}, '${item.img}')">
              + أضف للسلة
            </button>
          </div>
        </div>
      </div>
    `).join('');
    grid.style.opacity = '1';
    observeReveal();
  }, 180);
}

// ===== MENU TABS =====
function initMenuTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderMenu(tab.dataset.cat);
    });
  });
  renderMenu('beef');
}

// ===== CART FUNCTIONS =====
function addToCart(name, price, img) {
  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  updateCart();
  showToast(`✅ تمت إضافة "${name}" للسلة!`);
}

function addToCartCustom(name, price) {
  addToCart(name, price, 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&q=60');
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  updateCart();
}

function changeQty(name, delta) {
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.name !== name);
  }
  updateCart();
}

function updateCart() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const countEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('cartTotal');
  const footerEl = document.getElementById('cartFooter');
  const itemsEl = document.getElementById('cartItems');

  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  if (totalEl) totalEl.textContent = `${total} جنيه`;

  if (itemsEl) {
    if (cart.length === 0) {
      itemsEl.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <p>سلتك فارغة</p>
          <a href="#menu" class="browse-menu-btn" id="browseMenuBtn">تصفح القائمة</a>
        </div>`;
      document.getElementById('browseMenuBtn')?.addEventListener('click', closeCart);
      if (footerEl) footerEl.style.display = 'none';
    } else {
      itemsEl.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img class="cart-item-img" src="${item.img}" alt="${item.name}" />
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-price">${item.price * item.qty} جنيه</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
            </div>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${item.name}')" aria-label="حذف">×</button>
        </div>
      `).join('');
      if (footerEl) footerEl.style.display = 'block';
    }
  }
}

// ===== CART SIDEBAR =====
function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initCart() {
  document.getElementById('cartBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===== NAVBAR =====
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  navLinks?.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const bottom = top + section.offsetHeight;
      const id = section.getAttribute('id');
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        link.classList.toggle('active', scrollY >= top && scrollY < bottom);
      }
    });
  }, { passive: true });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ===== HERO SLIDER =====
function initHeroSlider() {
  const slides = document.querySelectorAll('#heroSlider .slide');
  const dots = document.querySelectorAll('#heroDots .dot');
  let current = 0;
  let timer;

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 4000);
  }

  document.getElementById('heroNext')?.addEventListener('click', () => { prev(); startTimer(); });
  document.getElementById('heroPrev')?.addEventListener('click', () => { next(); startTimer(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => { goTo(+dot.dataset.index); startTimer(); });
  });

  startTimer();
}

// ===== COUNTERS =====
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const start = Date.now();

  function update() {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('ar-EG');
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

// ===== SCROLL REVEAL =====
function observeReveal() {
  const els = document.querySelectorAll('[data-reveal]:not(.revealed), [data-reveal-right]:not(.revealed)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}

// ===== GALLERY LIGHTBOX =====
function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev = document.getElementById('lbPrev');
  const lbNext = document.getElementById('lbNext');
  const lbCounter = document.getElementById('lightboxCounter');

  const images = Array.from(items).map(item => ({
    src: item.querySelector('img').src,
    alt: item.querySelector('img').alt
  }));
  let current = 0;

  function openLightbox(index) {
    current = index;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = `${current + 1} / ${images.length}`;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function showNext() {
    current = (current + 1) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = `${current + 1} / ${images.length}`;
  }

  function showPrev() {
    current = (current - 1 + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lbCounter.textContent = `${current + 1} / ${images.length}`;
  }

  items.forEach((item, i) => {
    item.addEventListener('click', () => openLightbox(i));
  });

  lbClose?.addEventListener('click', closeLightbox);
  lbPrev?.addEventListener('click', showNext);
  lbNext?.addEventListener('click', showPrev);

  lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showNext();
    if (e.key === 'ArrowRight') showPrev();
  });
}

// ===== TESTIMONIALS SLIDER =====
function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const cards = document.querySelectorAll('.testi-card');
  const dotsContainer = document.getElementById('testiDots');
  const prevBtn = document.getElementById('testiPrev');
  const nextBtn = document.getElementById('testiNext');

  if (!track || !cards.length) return;

  let current = 0;
  let timer;

  const getVisible = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;

  function buildDots() {
    const vis = getVisible();
    const total = Math.ceil(cards.length / vis);
    dotsContainer.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const dot = document.createElement('button');
      dot.className = 'testi-dot' + (i === current ? ' active' : '');
      dot.setAttribute('aria-label', `الصفحة ${i + 1}`);
      dot.addEventListener('click', () => { current = i; updateSlider(); startTimer(); });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const vis = getVisible();
    const total = Math.ceil(cards.length / vis);
    current = Math.max(0, Math.min(current, total - 1));
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    const offset = current * vis * (cardWidth + gap);
    track.style.transform = `translateX(${offset}px)`;
    document.querySelectorAll('.testi-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      const vis = getVisible();
      const total = Math.ceil(cards.length / vis);
      current = (current + 1) % total;
      updateSlider();
    }, 5000);
  }

  nextBtn?.addEventListener('click', () => {
    const vis = getVisible();
    const total = Math.ceil(cards.length / vis);
    current = (current - 1 + total) % total;
    updateSlider();
    startTimer();
  });

  prevBtn?.addEventListener('click', () => {
    const vis = getVisible();
    const total = Math.ceil(cards.length / vis);
    current = (current + 1) % total;
    updateSlider();
    startTimer();
  });

  buildDots();
  startTimer();
  window.addEventListener('resize', () => { buildDots(); updateSlider(); }, { passive: true });
}

// ===== FORM VALIDATION =====
function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  function showError(id, msg) {
    const el = document.getElementById(id);
    const input = document.getElementById(id.replace('Error', ''));
    if (el) el.textContent = msg;
    if (input) input.classList.toggle('error', !!msg);
  }

  function clearErrors() {
    ['nameError', 'phoneError', 'emailError', 'messageError'].forEach(id => showError(id, ''));
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    clearErrors();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    if (!name || name.length < 2) { showError('nameError', 'يرجى إدخال الاسم (على الأقل حرفان)'); valid = false; }
    if (!phone || !/^(01)[0-9]{9}$/.test(phone)) { showError('phoneError', 'يرجى إدخال رقم هاتف مصري صحيح (01xxxxxxxxx)'); valid = false; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('emailError', 'يرجى إدخال بريد إلكتروني صحيح'); valid = false; }
    if (!message || message.length < 10) { showError('messageError', 'يرجى كتابة رسالتك (على الأقل 10 أحرف)'); valid = false; }

    if (valid) {
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'block';
        form.reset();
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
      showToast('✅ تم إرسال رسالتك بنجاح!');
    }
  });
}

// ===== SCROLL TO TOP =====
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn?.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== PARALLAX =====
function initParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.backgroundPositionY = `${scrollY * 0.3}px`;
    }
  }, { passive: true });
}

// ===== INIT ALL =====
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSmoothScroll();
  initHeroSlider();
  initCounters();
  renderPopular();
  initMenuTabs();
  initCart();
  initGallery();
  initTestimonials();
  initForm();
  initScrollTop();
  initParallax();
  observeReveal();

  // Make addToCartCustom globally available
  window.addToCart = addToCart;
  window.addToCartCustom = addToCartCustom;
  window.removeFromCart = removeFromCart;
  window.changeQty = changeQty;
});
