<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alvares Ar Condicionado</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root {
    --primary-color: #003366;
    --secondary-color: #ff6600;
    --whatsapp-color: #25D366;
    --text-color: #333;
    --white: #fff;
    --card-bg: #fff;
    --hero-gradient: linear-gradient(135deg, #003366, #ff6600);
}

/* Reset e padrão */
* { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
body { font-family: 'Roboto', sans-serif; background: #f5f5f5; color: var(--text-color); line-height: 1.6; }
a { text-decoration: none; color: inherit; }

/* Header */
header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    transition: background 0.4s, box-shadow 0.4s;
    background-color: transparent;
}
header.scrolled { background-color: var(--primary-color); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }
header img { max-height: 60px; transition: transform 0.3s; }
nav { display: flex; gap: 20px; }
nav a { color: var(--white); font-weight: bold; transition: color 0.3s; }
nav a:hover { color: var(--secondary-color); text-decoration: underline; }
#menu-toggle { display: none; font-size: 28px; background: none; border: none; color: var(--white); cursor: pointer; }

/* Hero */
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 120px 20px 80px;
    background: var(--hero-gradient);
    color: var(--white);
    text-align: center;
    position: relative;
}
.hero h1 { font-size: 3rem; margin-bottom: 10px; text-shadow: 1px 1px 6px rgba(0,0,0,0.4); }
.hero p { font-size: 1.3rem; margin-bottom: 5px; text-shadow: 1px 1px 4px rgba(0,0,0,0.3); }

/* Serviços */
.services {
    padding: 60px 20px;
    text-align: center;
}
.services h2 { font-size: 2.5rem; margin-bottom: 40px; color: var(--primary-color); }
.services .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    justify-items: center;
}
.services .card {
    background-color: var(--card-bg);
    padding: 30px 20px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    font-size: 1.1rem;
    transition: transform 0.4s, box-shadow 0.4s, background 0.3s;
    width: 100%;
    max-width: 300px;
    text-align: center;
    position: relative;
}
.services .card i {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--secondary-color);
    transition: transform 0.4s;
}
.services .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}
.services .card:hover i {
    transform: rotate(20deg) scale(1.2);
}
.services .card a { color: var(--primary-color); font-weight: bold; }

/* Contato */
.contact {
    background-color: var(--primary-color);
    color: var(--white);
    padding: 60px 20px;
    text-align: center;
}
.contact h2 { font-size: 2.2rem; margin-bottom: 20px; }
.contact p { font-size: 1.2rem; margin-bottom: 10px; }
.contact-buttons {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}
.contact-buttons a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    border-radius: 10px;
    font-weight: bold;
    text-decoration: none;
    color: var(--white);
    transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;
}
.contact-buttons a:hover { transform: scale(1.08); opacity: 0.9; box-shadow: 0 6px 15px rgba(0,0,0,0.2);}
.whatsapp-btn { background-color: var(--whatsapp-color); }
.instagram-btn {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-size: 400% 400%;
    animation: gradientAnimation 8s ease infinite;
    color: var(--white);
}

/* Map */
.map-container {
    margin-top: 40px;
    max-width: 700px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Footer */
footer {
    background-color: #002244;
    color: var(--white);
    text-align: center;
    padding: 25px 20px;
    font-size: 0.95rem;
}
footer a { color: var(--secondary-color); font-weight: bold; }
footer a:hover { text-decoration: underline; }

/* Botões flutuantes */
.floating-buttons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    z-index: 1000;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease;
}
.floating-buttons.show { opacity: 1; transform: translateY(0); }

.floating-btn {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 26px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.3s, box-shadow 0.3s;
    animation: pulse 2s infinite;
}
.floating-btn:hover { transform: scale(1.15); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
@keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }

/* Cores oficiais */
.whatsapp-btn-floating { background-color: #25D366; }
.instagram-btn-floating {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background-size: 400% 400%;
    animation: gradientAnimation 8s ease infinite;
}
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Loja em breve (desativada) */
.loja-btn-disabled {
    background-color: #aaa;
    cursor: not-allowed;
    opacity: 0.7;
    position: relative;
}
.loja-btn-disabled i { color: #fff; }

/* Tooltip customizado em laranja */
.loja-btn-disabled::after {
    content: attr(data-title);
    position: absolute;
    bottom: 70px;
    left: 50%;
    transform: translateX(-50%);
    background: #ff6600;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.8rem;
    font-weight: bold;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
.loja-btn-disabled:hover::after { opacity: 1; }

/* Fade-in seções */
section { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
section.visible { opacity: 1; transform: translateY(0); }

/* Responsividade */
@media (max-width: 768px) {
    .hero h1 { font-size: 2rem; }
    .hero p { font-size: 1rem; }
    nav { display: none; flex-direction: column; text-align: center; gap: 10px; }
    nav.active { display: flex; }
    #menu-toggle { display: block; }
    .services .card { max-width: 95%; font-size: 1rem; }
    .contact-buttons { flex-direction: column; gap: 15px; }
    .map-container { width: 95%; height: 300px; }
}
@media (max-width: 480px) {
    .hero { padding: 80px 10px; }
    .hero h1 { font-size: 1.6rem; }
    .hero p { font-size: 0.9rem; }
    .contact h2 { font-size: 1.4rem; }
    .map-container { height: 250px; }
    .floating-btn { width: 45px; height: 45px; font-size: 22px; }
}
</style>
</head>
<body>

<header id="header">
    <img src="logo_alvarez.png" alt="Alvares Ar Condicionado">
    <button id="menu-toggle" aria-label="Abrir menu">&#9776;</button>
    <nav>
        <a href="#home">Home</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
    </nav>
</header>

<main>
<section class="hero" id="home">
    <h1>Alvares Ar Condicionado</h1>
    <p>Venda, Instalação, Manutenção e Assistência</p>
    <p>Sempre com você</p>
</section>

<section class="services" id="services">
    <h2>Nossos Serviços</h2>
    <div class="cards">
        <div class="card"><i class="fas fa-snowflake"></i> Venda de aparelhos de ar condicionado</div>
        <div class="card"><i class="fas fa-tools"></i> Instalação profissional</div>
        <div class="card"><i class="fas fa-cogs"></i> <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">Manutenção preventiva e corretiva</a></div>
        <div class="card"><i class="fas fa-headset"></i> Assistência técnica especializada</div>
    </div>
</section>

<section class="contact" id="contact">
    <h2>Contato</h2>
    <p>Horário: Segunda a Sexta, 08:00 às 17:30</p>
    <div class="contact-buttons">
        <a href="https://wa.me/551630136700" target="_blank" class="whatsapp-btn"><i class="fab fa-whatsapp"></i> WhatsApp</a>
        <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="instagram-btn"><i class="fab fa-instagram"></i> Instagram</a>
    </div>
    <div class="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.434603734647!2d-47.82334468445166!3d-21.21792318590764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949320d6e6d36d9f%3A0x7e16e92e682d0d42!2sR.%20Genoveva%20On%C3%B3fre%20Barban%2C%20657%20-%20Planalto%20Verde%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014056-340!5e0!3m2!1spt-BR!2sbr!4v1694440000000!5m2!1spt-BR!2sbr" width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</section>
</main>

<footer>
    &copy; 2025 Alvares Ar Condicionado. Todos os direitos reservados.
    <br>
    <i class="fab fa-whatsapp" style="color:#25D366; margin-right:5px;"></i>
    <a href="https://wa.me/551630136700" target="_blank">+55 16 3013-6700</a> | 
    <i class="fab fa-instagram" style="color:#ff6600; margin-left:10px; margin-right:5px;"></i>
    <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">@alvaresarcondicionado</a>
    <br><br>
    <span style="color:#ff6600; font-size:0.95rem; font-weight:bold;">
        🛒 Loja Online disponível em breve
    </span>
</footer>

<!-- Botões flutuantes -->
<div class="floating-buttons" id="floating-buttons">
    <a href="https://wa.me/551630136700" target="_blank" class="floating-btn whatsapp-btn-floating" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
    <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="floating-btn instagram-btn-floating" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <div class="floating-btn loja-btn-disabled" aria-label="Loja Online - Em breve" data-title="🛒 Loja Online disponível em breve"><i class="fas fa-store"></i></div>
</div>

<script>
// Header scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){ header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
});

// Fade-in seções
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('visible'); } });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Menu mobile toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('header nav');
toggleBtn.addEventListener('click', () => { mobileNav.classList.toggle('active'); });
document.querySelectorAll('header nav a').forEach(link => link.addEventListener('click', () => mobileNav.classList.remove('active')));

// Mostrar botões flutuantes
window.addEventListener('load', () => { document.getElementById('floating-buttons').classList.add('show'); });
</script>

</body>
</html>
