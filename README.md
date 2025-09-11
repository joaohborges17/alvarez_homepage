<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Alvares Ar Condicionado</title>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
/* Reset e padrão */
* { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
body { font-family: 'Roboto', sans-serif; background: #f5f5f5; color: #333; line-height: 1.6; }
a { text-decoration: none; color: inherit; }

/* Header */
header {
    background-color: #003366;
    color: white;
    padding: 15px 20px;
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
header img { max-height: 60px; }
nav { display: flex; gap: 15px; }
nav a { color: white; font-weight: bold; transition: color 0.3s; }
nav a:hover { color: #ffcc00; text-decoration: underline; }
#menu-toggle { display: none; font-size: 28px; background: none; border: none; color: white; cursor: pointer; }

/* Hero */
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    background: linear-gradient(90deg, #003366, #ff6600);
    color: white;
    text-align: center;
}
.hero h1 { font-size: 3rem; margin-bottom: 10px; }
.hero p { font-size: 1.2rem; }

/* Serviços */
.services {
    padding: 50px 20px;
    text-align: center;
}
.services h2 { font-size: 2.2rem; margin-bottom: 30px; color: #003366; }
.services ul { list-style: none; padding: 0; }
.services li {
    background-color: white;
    margin: 15px auto;
    padding: 25px;
    max-width: 600px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    font-size: 1.1rem;
    transition: transform 0.3s, box-shadow 0.3s;
}
.services li:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}
.services li a { color: #003366; font-weight: bold; }

/* Contato */
.contact {
    background-color: #003366;
    color: white;
    padding: 50px 20px;
    text-align: center;
}
.contact h2 { font-size: 2rem; margin-bottom: 20px; }
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
    padding: 12px 25px;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    color: white;
    transition: transform 0.2s, opacity 0.2s;
}
.contact-buttons a:hover { transform: scale(1.05); opacity: 0.9; }
.whatsapp-btn { background-color: #25D366; }
.instagram-btn {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    background-size: 400% 400%;
    animation: gradientAnimation 8s ease infinite;
    color: white;
}
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
.map-container {
    margin-top: 30px;
    max-width: 600px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* Footer */
footer {
    background-color: #002244;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 0.9rem;
}
footer a { color: #ff6600; font-weight: bold; }
footer a:hover { text-decoration: underline; }

/* Botões flutuantes */
.floating-buttons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    z-index: 1000;
}
.whatsapp-btn-floating, .instagram-btn-floating {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.2s;
}
.whatsapp-btn-floating { background-color: #25D366; }
.whatsapp-btn-floating:hover { transform: scale(1.1); background-color: #1ebe57; }
.instagram-btn-floating {
    background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
    background-size: 400% 400%;
    animation: gradientAnimation 8s ease infinite;
}
.instagram-btn-floating:hover { transform: scale(1.1); }

/* Animação de fade-in das seções */
section { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
section.visible { opacity: 1; transform: translateY(0); }

/* Responsividade */
@media (max-width: 1024px) {
    .services li { max-width: 90%; padding: 20px; }
    .map-container { width: 90%; }
}
@media (max-width: 768px) {
    .hero h1 { font-size: 2rem; }
    .hero p { font-size: 1rem; }
    nav { display: none; flex-direction: column; text-align: center; gap: 10px; }
    nav.active { display: flex; }
    #menu-toggle { display: block; }
    .services li { max-width: 95%; font-size: 1rem; }
    .contact-buttons { flex-direction: column; gap: 15px; }
    .map-container { width: 95%; height: 300px; }
}
@media (max-width: 480px) {
    .hero { padding: 60px 10px; }
    .hero h1 { font-size: 1.5rem; }
    .hero p { font-size: 0.9rem; }
    .services li { padding: 15px; font-size: 0.95rem; }
    .contact h2 { font-size: 1.5rem; }
    .contact p { font-size: 1rem; }
    .map-container { height: 250px; }
    .floating-buttons { bottom: 15px; right: 15px; }
    .whatsapp-btn-floating, .instagram-btn-floating { width: 40px; height: 40px; font-size: 20px; }
}
</style>
</head>
<body>

<header>
    <img src="logo_alvarez.png" alt="Alvares Ar Condicionado Logo">
    <button id="menu-toggle">&#9776;</button>
    <nav>
        <a href="#home">Home</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
    </nav>
</header>

<section class="hero" id="home">
    <h1>Alvares Ar Condicionado</h1>
    <p>Venda, Instalação, Manutenção e Assistência</p>
    <p>Sempre com você</p>
</section>

<section class="services" id="services">
    <h2>Nossos Serviços</h2>
    <ul>
        <li>Venda de aparelhos de ar condicionado</li>
        <li>Instalação profissional</li>
        <li><a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">Manutenção preventiva e corretiva</a></li>
        <li>Assistência técnica especializada</li>
    </ul>
</section>

<section class="contact" id="contact">
    <h2>Contato</h2>
    <p>Horário: Segunda a Sexta, 08:00 às 17:30</p>
    <div class="contact-buttons">
        <a href="https://wa.me/551630136700" target="_blank" class="whatsapp-btn">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="instagram-btn">
            <i class="fab fa-instagram"></i> Instagram
        </a>
    </div>
    <div class="map-container">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.434603734647!2d-47.82334468445166!3d-21.21792318590764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949320d6e6d36d9f%3A0x7e16e92e682d0d42!2sR.%20Genoveva%20On%C3%B3fre%20Barban%2C%20657%20-%20Planalto%20Verde%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014056-340!5e0!3m2!1spt-BR!2sbr!4v1694440000000!5m2!1spt-BR!2sbr"
            width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
</section>

<footer>
    &copy; 2025 Alvares Ar Condicionado. Todos os direitos reservados.
    <br>
    <i class="fab fa-whatsapp" style="color:#25D366; margin-right:5px;"></i>
    <a href="https://wa.me/551630136700" target="_blank">+55 16 3013-6700</a> | 
    <i class="fab fa-instagram" style="color:#ff6600; margin-left:10px; margin-right:5px;"></i>
    <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">@alvaresarcondicionado</a>
</footer>

<!-- Botões flutuantes -->
<div class="floating-buttons">
    <a href="https://wa.me/551630136700" target="_blank" class="whatsapp-btn-floating">
        <i class="fab fa-whatsapp"></i>
    </a>
    <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="instagram-btn-floating">
        <i class="fab fa-instagram"></i>
    </a>
</div>

<script>
// Fade-in das seções
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });
sections.forEach(section => observer.observe(section));

// Menu mobile toggle
const toggleBtn = document.getElementById('menu-toggle');
const mobileNav = document.querySelector('header nav');
toggleBtn.addEventListener('click', () => { mobileNav.classList.toggle('active'); });
</script>

</body>
</html>


