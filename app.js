// Static app for Michelle Doces Delícias
const WHATSAPP_NUMBER = window.WHATSAPP_NUMBER || "5531988117518";
// Atualização: 06/11/2025
const PRODUCTS = [{ "id": 1, "category": "Doces Tradicionais", "name": "Brigadeiro", "desc": "Brigadeiro tradicional", "price": 1.25, "img": "/images/brigadeiro.jpg" }, { "id": 2, "category": "Doces Tradicionais", "name": "Beijinho de coco", "desc": "Beijinho de coco macio", "price": 1.25, "img": "/images/beijinho.jpg" }, { "id": 3, "category": "Doces Tradicionais", "name": "Cajuzinho", "desc": "Cajuzinho de amendoim", "price": 1.25, "img": "/images/cajuzinho.jpg" }, { "id": 4, "category": "Doces Tradicionais", "name": "Brigadeiro branco", "desc": "Brigadeiro branco", "price": 1.25, "img": "/images/brigadeiro_branco.jpg" }, { "id": 5, "category": "Doces Tradicionais", "name": "Brigadeiro de ninho", "desc": "Brigadeiro de ninho", "price": 1.25, "img": "/images/brigadeiro_ninho.jpg" }, { "id": 6, "category": "Doces Tradicionais", "name": "Brigadeiro de paçoca", "desc": "Brigadeiro de paçoca", "price": 1.25, "img": "/images/brigadeiro_pacoca.jpg" }, { "id": 7, "category": "Doces Tradicionais", "name": "Moranguinho", "desc": "Moranguinho", "price": 1.25, "img": "/images/moranguinho.jpg" }, { "id": 8, "category": "Doces Tradicionais", "name": "Casadinho", "desc": "Casadinho", "price": 1.25, "img": "/images/casadinho.jpg" }, { "id": 9, "category": "Doces Diferenciados", "name": "Prestígio", "desc": "Prestígio", "price": 1.5, "img": "/images/prestigio.jpg" }, { "id": 10, "category": "Doces Diferenciados", "name": "Doce de leite com coco queimado", "desc": "Doce de leite com coco queimado", "price": 1.5, "img": "/images/doce_leite_coco.jpg" }, { "id": 11, "category": "Doces Diferenciados", "name": "Olho de sogra", "desc": "Olho de sogra", "price": 1.5, "img": "/images/olho_de_sogra.jpg" }, { "id": 12, "category": "Doces Diferenciados", "name": "Filete de damasco", "desc": "Filete de damasco", "price": 1.5, "img": "/images/filete_damasc.jpg" }, { "id": 13, "category": "Doces Diferenciados", "name": "Churros", "desc": "Churros doce", "price": 1.5, "img": "/images/churros.jpg" }, { "id": 14, "category": "Doces Diferenciados", "name": "Ninho com Nutella", "desc": "Ninho com Nutella", "price": 1.5, "img": "/images/ninho_nutella.jpg" }, { "id": 15, "category": "Doces Diferenciados", "name": "Romeu e Julieta", "desc": "Romeu e Julieta", "price": 1.5, "img": "/images/romeu_julieta.jpg" }, { "id": 16, "category": "Doces Diferenciados", "name": "Perolado", "desc": "Perolado", "price": 1.5, "img": "/images/perolado.jpg" }, { "id": 17, "category": "Doces Diferenciados", "name": "Brigadeiro crocante", "desc": "Brigadeiro crocante", "price": 1.5, "img": "/images/brigadeiro_crocante.jpg" }, { "id": 18, "category": "Doces Diferenciados", "name": "Boll", "desc": "Boll preto e branco", "price": 1.5, "img": "/images/bolo_pb.jpg" }, { "id": 19, "category": "Doces Diferenciados", "name": "Surpresa de uva", "desc": "Surpresa de uva", "price": 1.5, "img": "/images/surpresa_uva.jpg" }, { "id": 20, "category": "Doces Diferenciados", "name": "Brigadeiro de café", "desc": "Brigadeiro de café", "price": 1.5, "img": "/images/brigadeiro_cafe.jpg" }, { "id": 21, "category": "Doces Especiais", "name": "Brigadeiro confete", "desc": "Brigadeiro com confete", "price": 1.7, "img": "/images/brigadeiro_confete.jpg" }, { "id": 22, "category": "Doces Especiais", "name": "Brigadeiro de nozes", "desc": "Brigadeiro de nozes", "price": 1.9, "img": "/images/brigadeiro_nozes.jpg" }, { "id": 23, "category": "Doces Especiais", "name": "Amêndoas laminadas", "desc": "Amêndoas laminadas", "price": 1.9, "img": "/images/amendoas_laminadas.jpg" }, { "id": 24, "category": "Doces Especiais", "name": "Brigadeiro 70% cacau", "desc": "Brigadeiro 70% cacau", "price": 1.9, "img": "/images/brigadeiro_70.jpg" }, { "id": 25, "category": "Doces Especiais", "name": "Brigadeiro ao leite", "desc": "Brigadeiro ao leite gourmet", "price": 1.9, "img": "/images/brigadeiro_ao_leite.jpg" }, { "id": 26, "category": "Copinhos", "name": "Copinho Cereja", "desc": "Copinho cereja", "price": 2.9, "img": "/images/copinho_cereja.jpg" }, { "id": 27, "category": "Copinhos", "name": "Copinho Physalis", "desc": "Copinho physalis", "price": 2.9, "img": "/images/copinho_physalis.jpg" }, { "id": 28, "category": "Copinhos", "name": "Copinho Frutas Vermelhas", "desc": "Copinho frutas vermelhas", "price": 2.9, "img": "/images/copinho_frutas.jpg" }, { "id": 29, "category": "Copinhos", "name": "Copinho Figo com Nozes", "desc": "Copinho figo com nozes", "price": 2.9, "img": "/images/copinho_figo.jpg" }, { "id": 30, "category": "Copinhos", "name": "Copinho Maracujá", "desc": "Copinho maracujá", "price": 2.9, "img": "/images/copinho_maracuja.jpg" }, { "id": 31, "category": "Bombons Tradicionais", "name": "Bombom Brigadeiro", "desc": "Bombom brigadeiro", "price": 1.9, "img": "/images/bombom_brigadeiro.jpg" }, { "id": 32, "category": "Bombons Tradicionais", "name": "Bombom Coco", "desc": "Bombom coco", "price": 1.9, "img": "/images/bombom_coco.jpg" }, { "id": 33, "category": "Bombons Tradicionais", "name": "Bombom Uva", "desc": "Bombom uva", "price": 1.9, "img": "/images/bombom_uva.jpg" }, { "id": 34, "category": "Bombons Tradicionais", "name": "Bombom Abacaxi", "desc": "Bombom abacaxi", "price": 1.9, "img": "/images/bombom_abacaxi.jpg" }, { "id": 35, "category": "Bombons Tradicionais", "name": "Bombom Coco com Ameixa", "desc": "Bombom coco com ameixa", "price": 1.9, "img": "/images/bombom_coco_ameixa.jpg" }, { "id": 36, "category": "Bombons Especiais", "name": "Bombom Nozes", "desc": "Bombom nozes", "price": 2.2, "img": "/images/bombom_nozes.jpg" }, { "id": 37, "category": "Bombons Especiais", "name": "Bombom Morango", "desc": "Bombom morango", "price": 3.0, "img": "/images/bombom_morango.jpg" }, { "id": 38, "category": "Bombons Especiais", "name": "Bombom Pistache", "desc": "Bombom pistache", "price": 2.2, "img": "/images/bombom_pistache.jpg" }, { "id": 39, "category": "Bombons Especiais", "name": "Bombom Damasco", "desc": "Bombom damasco", "price": 2.5, "img": "/images/bombom_damasco.jpg" }, { "id": 40, "category": "Bombons Diferenciados", "name": "Bombom Bolinho", "desc": "Bombom bolinho", "price": 2.5, "img": "/images/bombom_bolinho.jpg" }, { "id": 41, "category": "Bombons Diferenciados", "name": "Quadradinho de Castanhas", "desc": "Quadradinho castanhas", "price": 2.8, "img": "/images/quadradinho_castanhas.jpg" }, { "id": 42, "category": "Bombons Diferenciados", "name": "Brownie Bombom", "desc": "Brownie bombom", "price": 2.5, "img": "/images/brownie_bombom.jpg" }, { "id": 43, "category": "Bombons Diferenciados", "name": "Trufa de Chocolate", "desc": "Trufa de chocolate", "price": 2.5, "img": "/images/trufa_chocolate.jpg" }];

const byId = id => document.getElementById(id);
const formatBRL = v => 'R$ ' + Number(v).toFixed(2).replace('.', ',');

let state = { cart: JSON.parse(localStorage.getItem('md_cart') || '{}'), category: 'Todos' };

function saveCart() { localStorage.setItem('md_cart', JSON.stringify(state.cart)); }

function init() { renderCategories(); renderProducts(); renderCart(); initCartIcon(); initGalleryLightbox(); document.getElementById('checkout').addEventListener('click', checkout); document.getElementById('year').textContent = new Date().getFullYear(); }

function getCategories() { const cats = [...new Set(PRODUCTS.map(p => p.category))]; return ['Todos', ...cats]; }

function renderCategories() { const container = byId('categoryButtons'); if (!container) return; container.innerHTML = ''; getCategories().forEach(cat => { const btn = document.createElement('button'); btn.textContent = cat; btn.className = 'cat-btn'; if (cat === state.category) btn.classList.add('active'); btn.addEventListener('click', () => { state.category = cat; renderProducts(); renderCategories(); }); container.appendChild(btn); }); updateCategoriesHeight(); }



/* Measure categories bar height and update CSS variable so body padding matches
     This allows the fixed categories bar to wrap to multiple lines without hiding content. */
function updateCategoriesHeight() {
    const el = document.querySelector('.categories-row');
    if (!el) return;
    // Measure after layout: use requestAnimationFrame
    requestAnimationFrame(() => {
        const h = Math.ceil(el.getBoundingClientRect().height);
        document.documentElement.style.setProperty('--categories-height', h + 'px');
    });
}

// Recalculate on resize (debounced)
let _catResizeTimer = null;
window.addEventListener('resize', () => {
    if (_catResizeTimer) clearTimeout(_catResizeTimer);
    _catResizeTimer = setTimeout(() => { updateCategoriesHeight(); _catResizeTimer = null; }, 120);
});

// Calcula o preço baseado na quantidade
function calculatePrice(basePrice, quantity) {
    const centoPrice = basePrice * 100; // Preço do cento
    return (centoPrice * quantity / 100).toFixed(2);
}

function renderProducts() { 
    const grid = byId('productGrid'); 
    grid.innerHTML = ''; 
    const filtered = state.category === 'Todos' ? PRODUCTS : PRODUCTS.filter(p => p.category === state.category); 
    filtered.forEach(p => { 
        const card = document.createElement('article'); 
        card.className = 'card'; 
        const thumb = document.createElement('div'); 
        thumb.className = 'thumb'; 
        const img = document.createElement('img'); 
        // Sanitiza URLs e textos
        img.src = Security.validate(p.img); 
        img.alt = Security.sanitize(p.name); thumb.appendChild(img); const meta = document.createElement('div'); meta.className = 'meta'; const centoPrice = p.price * 100;
        meta.innerHTML = `
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
            <div class="price-info">
                <div class="current-price">✨ ${formatBRL(centoPrice)} ✨</div>
            </div>
        `;
        
        const actions = document.createElement('div');
        actions.className = 'actions';
        const select = document.createElement('select');
        
        [[100, 'Cento (100)'], [50, 'Meio cento (50)'], [25, '25 unidades']].forEach(s => {
            const o = document.createElement('option');
            o.value = s[0];
            o.textContent = s[1];
            select.appendChild(o);
        });

        // Atualiza o preço quando a quantidade é alterada
        select.addEventListener('change', (e) => {
            const quantity = parseInt(e.target.value);
            const price = calculatePrice(p.price, quantity);
            const priceDisplay = card.querySelector('.current-price');
            priceDisplay.textContent = formatBRL(price);
        });

        const btn = document.createElement('button'); btn.className = 'btn'; btn.textContent = 'Adicionar'; btn.addEventListener('click', () => addToCart(p.id, parseInt(select.value))); actions.appendChild(select); actions.appendChild(btn); card.appendChild(thumb); card.appendChild(meta); card.appendChild(actions); grid.appendChild(card); }); }

function addToCart(id, qty) { if (!state.cart[id]) state.cart[id] = 0; state.cart[id] += qty; saveCart(); renderCart(); }

function renderCart() { const el = byId('cartItems'); el.innerHTML = ''; const ids = Object.keys(state.cart || {}); const cartCount = ids.reduce((s, k) => s + (state.cart[k] || 0), 0); byId('cartCount').textContent = cartCount; if (ids.length === 0) { el.innerHTML = '<p class="empty">Nenhum item adicionado.</p>'; byId('cartTotal').textContent = formatBRL(0); return; } let total = 0; ids.forEach(id => { const p = PRODUCTS.find(x => x.id == id); const qty = state.cart[id]; const sub = Number((p.price * qty).toFixed(2)); total += sub; const row = document.createElement('div'); row.className = 'cart-row'; const info = document.createElement('div'); info.innerHTML = `<strong>${p.name}</strong>`; const qtyDiv = document.createElement('div'); qtyDiv.className = 'qty-control'; const minus = document.createElement('button'); minus.className = 'qty-btn'; minus.textContent = '-'; minus.addEventListener('click', () => { state.cart[id] -= 1; if (state.cart[id] <= 0) delete state.cart[id]; saveCart(); renderCart(); }); const input = document.createElement('input'); input.className = 'qty-input'; input.type = 'number'; input.value = qty; input.addEventListener('change', () => { const v = parseInt(input.value); if (v <= 0) delete state.cart[id]; else state.cart[id] = v; saveCart(); renderCart(); }); const plus = document.createElement('button'); plus.className = 'qty-btn'; plus.textContent = '+'; plus.addEventListener('click', () => { state.cart[id] += 1; saveCart(); renderCart(); }); qtyDiv.append(minus, input, plus); const priceDiv = document.createElement('div'); priceDiv.textContent = formatBRL(sub); const removeBtn = document.createElement('button'); removeBtn.textContent = 'Remover'; removeBtn.style.marginLeft = '8px'; removeBtn.addEventListener('click', () => { delete state.cart[id]; saveCart(); renderCart(); }); info.appendChild(removeBtn); row.append(info, qtyDiv, priceDiv); el.appendChild(row); }); byId('cartTotal').textContent = formatBRL(total); }

function checkout() { const items = Object.keys(state.cart).map(id => ({ productId: parseInt(id, 10), qty: state.cart[id] })); if (items.length === 0) { alert('Adicione itens ao carrinho.'); return; } let text = 'Olá! Gostaria de fazer o pedido:\n'; let total = 0; items.forEach(it => { const p = PRODUCTS.find(x => x.id == it.productId); text += `${it.qty} x ${p.name} - R$ ${(p.price * it.qty).toFixed(2)}\n`; total += p.price * it.qty; }); text += `Total: R$ ${total.toFixed(2)}`; const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`; window.open(url, '_blank'); }

function initCartIcon() { const icon = byId('cartIcon'); icon.addEventListener('click', () => { const panel = byId('cartPanel'); panel.classList.toggle('active'); panel.style.display = panel.classList.contains('active') ? 'block' : 'none'; }); }

function initGalleryLightbox() { const images = document.querySelectorAll('.grid-instagram img'); const lightbox = document.getElementById('lightbox'); const lightboxImg = document.getElementById('lightbox-img'); const closeBtn = document.querySelector('#lightbox .close'); images.forEach(img => img.addEventListener('click', () => { lightbox.style.display = 'flex'; lightbox.setAttribute('aria-hidden', 'false'); lightboxImg.src = img.src; })); closeBtn.addEventListener('click', () => { lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden', 'true'); }); lightbox.addEventListener('click', (e) => { if (e.target === e.currentTarget) { lightbox.style.display = 'none'; lightbox.setAttribute('aria-hidden', 'true'); } }); }

window.addEventListener('DOMContentLoaded', init);
