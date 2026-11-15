// Rao Abdur Rehman — Personal Portfolio (shared script)

// Live Sargodha clock (Asia/Karachi time)
const clockEl = document.getElementById('clock');
if (clockEl) {
  const tick = () => {
    clockEl.textContent = new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  tick(); setInterval(tick, 1000);
}

// Rotating roles in the hero
const flipEl = document.getElementById('roleFlip');
if (flipEl) {
  const roles = ['Shopify Expert', 'Shopify Developer', 'WordPress Developer', 'Web Developer', 'Meta Ads Specialist'];
  let ri = 0;
  setInterval(() => {
    ri = (ri + 1) % roles.length;
    flipEl.style.animation = 'none'; void flipEl.offsetWidth;
    flipEl.textContent = roles[ri];
    flipEl.style.animation = '';
  }, 2600);
}

// Marquee (content doubled for a seamless loop)
const mq = document.getElementById('mq');
if (mq) {
  const items = ['E-Commerce', 'Shopify Stores', 'Shopify Development', 'WordPress', 'Meta Ads', 'Web Development', 'Worldwide · Remote'];
  const half = items.map(t => `<span>${t}</span><span><b>✦</b></span>`).join('');
  mq.innerHTML = half + half;
}

// Animated counters
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; cio.unobserve(e.target);
  const to = +e.target.dataset.to, t0 = performance.now();
  (function step(t) {
    const p = Math.min((t - t0) / 1400, 1);
    e.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  })(t0);
}), { threshold: .5 });
document.querySelectorAll('.count').forEach(el => cio.observe(el));

// Scroll reveal (one-shot)
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ---------- Doors / rooms ----------
   Click a door: the leaf swings open, the view pushes in through the doorway
   (the doors grid zooms and fades), then the room panel appears below. */
const doorsGrid = document.getElementById('doorsGrid');
if (doorsGrid) {
  const DOORS = {
    shop: { num: '01', name: 'E-Commerce & Shopify' },
    dev:  { num: '02', name: 'Shopify Development' },
    wp:   { num: '03', name: 'WordPress Development' },
    ads:  { num: '04', name: 'Meta Ads' },
    web:  { num: '02', name: 'Website Themes' }
  };
  let currentDoor = null, entering = false;

  function showRoom(key) {
    document.querySelectorAll('.room').forEach(r => { r.hidden = true; r.classList.remove('enter'); });
    const room = document.getElementById('room-' + key);
    if (!room) return;
    room.hidden = false;
    void room.offsetWidth;
    room.classList.add('enter');
    room.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function enterDoor(key) {
    if (entering || currentDoor === key || !DOORS[key]) return;
    entering = true; currentDoor = key;
    document.querySelectorAll('.door').forEach(door => {
      const active = door.getAttribute('data-door') === key;
      door.classList.toggle('open', active);
      door.setAttribute('aria-expanded', active ? 'true' : 'false');
    });
    doorsGrid.style.pointerEvents = 'none';
    setTimeout(() => {
      doorsGrid.classList.add('zoom');
      setTimeout(() => {
        doorsGrid.style.visibility = 'hidden';
        showRoom(key);
        entering = false;
      }, 620);
    }, 480);
  }

  function leaveRoom() {
    if (!currentDoor) return;
    document.querySelectorAll('.room').forEach(r => { r.hidden = true; r.classList.remove('enter'); });
    document.querySelectorAll('.door').forEach(door => {
      door.classList.remove('open');
      door.setAttribute('aria-expanded', 'false');
    });
    currentDoor = null;
    doorsGrid.style.visibility = '';
    doorsGrid.classList.remove('zoom');
    doorsGrid.classList.add('back-in');
    doorsGrid.style.pointerEvents = '';
    document.getElementById('doorsClip').scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => doorsGrid.classList.remove('back-in'), 600);
  }

  document.querySelectorAll('.door').forEach(door => {
    door.addEventListener('click', () => enterDoor(door.getAttribute('data-door')));
  });
  document.querySelectorAll('.room-back').forEach(btn => btn.addEventListener('click', leaveRoom));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') leaveRoom(); });
}

// Floating sparkles
(function () {
  const sparks = ['✦', '✧', '★'];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.textContent = sparks[i % sparks.length];
    s.style.left = (Math.random() * 96) + 'vw';
    s.style.top = (Math.random() * 92) + 'vh';
    s.style.animationDelay = (Math.random() * 3) + 's';
    s.style.fontSize = (10 + Math.random() * 10) + 'px';
    document.body.appendChild(s);
  }
})();
