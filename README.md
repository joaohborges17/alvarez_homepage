<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Alvares Ar Condicionado - Venda, instalação e manutenção de aparelhos de ar condicionado em Ribeirão Preto.">
    <meta name="keywords" content="ar condicionado, instalação, manutenção, Ribeirão Preto, Alvares">
    <meta name="author" content="Alvares Ar Condicionado">
    <meta property="og:title" content="Alvares Ar Condicionado - Ribeirão Preto">
    <meta property="og:description" content="Venda, instalação, manutenção e assistência técnica de ar condicionado com qualidade e confiança.">
    <meta property="og:image" content="https://seusite.com/logo_alvarez.png">
    <meta property="og:url" content="https://seusite.com">
    <meta property="og:type" content="website">
    <title>Alvares Ar Condicionado</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" onload="this.rel='stylesheet'" media="print">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" crossorigin="anonymous" referrerpolicy="no-referrer" media="print" onload="this.media='all'">
    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    </script>
    <style>
        :root {
            --primary-color: #003366;
            --secondary-color: #ff6600;
            --whatsapp-color: #25D366;
            --text-color: #333;
            --white: #fff;
            --card-bg: #fff;
            --hero-gradient: linear-gradient(135deg, #003366cc, #ff6600cc);
            --background: #f5f5f5;
            --footer-bg: #002244;
        }

        /* === Reset e Padrão === */
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        body { font-family: 'Roboto', sans-serif; background: var(--background); color: var(--text-color); line-height: 1.6; }
        a { text-decoration: none; color: inherit; transition: color 0.3s, outline 0.2s; }
        a:focus { outline: 2px solid var(--secondary-color); outline-offset: 2px; }

        /* === Header === */
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
        nav a { color: var(--white); font-weight: bold; }
        nav a:hover { color: var(--secondary-color); text-decoration: underline; }
        #menu-toggle { display: none; font-size: 28px; background: none; border: none; color: var(--white); cursor: pointer; }
        nav.active { 
            display: flex; 
            flex-direction: column; 
            position: absolute; 
            top: 80px; 
            left: 0; 
            width: 100%; 
            background: var(--primary-color); 
            padding: 20px; 
            transition: transform 0.3s ease-in-out; 
            transform: translateY(0); 
        }
        nav:not(.active) { transform: translateY(-100%); }

        /* === Hero === */
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
            animation: fadeIn 1s ease-in;
        }
        .hero h1 { font-size: 3rem; margin-bottom: 10px; text-shadow: 1px 1px 6px rgba(0,0,0,0.4); }
        .hero p { font-size: 1.3rem; margin-bottom: 10px; text-shadow: 1px 1px 4px rgba(0,0,0,0.3); }
        .cta-btn {
            background-color: var(--secondary-color);
            color: var(--white);
            padding: 14px 28px;
            border-radius: 10px;
            font-weight: bold;
            margin-top: 15px;
            transition: transform 0.3s, opacity 0.3s;
            cursor: pointer;
            border: none;
            animation: pulseCTA 2s infinite;
        }
        .cta-btn:hover { transform: scale(1.05); opacity: 0.9; }
        .cta-btn:focus { outline: 2px solid var(--white); outline-offset: 2px; }
        @keyframes pulseCTA {
            0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(255, 102, 0, 0.5); }
            50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(255, 102, 0, 0.7); }
        }

        /* === Serviços === */
        .services { padding: 60px 20px; text-align: center; }
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
            transition: transform 0.4s, box-shadow 0.4s;
            width: 100%;
            max-width: 300px;
            text-align: center;
            opacity: 0;
            animation: slideIn 0.5s ease forwards;
        }
        .services .card:nth-child(1) { animation-delay: 0.1s; }
        .services .card:nth-child(2) { animation-delay: 0.2s; }
        .services .card:nth-child(3) { animation-delay: 0.3s; }
        .services .card:nth-child(4) { animation-delay: 0.4s; }
        .services .card i { font-size: 2.5rem; margin-bottom: 15px; color: var(--secondary-color); transition: transform 0.4s; }
        .services .card:hover { transform: translateY(-10px); box-shadow: 0 8px 25px rgba(0,0,0,0.15); }
        .services .card:hover i { transform: rotate(20deg) scale(1.2); }
        .services .card a { color: var(--primary-color); font-weight: bold; }
        .services .card p { font-size: 0.9rem; margin-top: 5px; color: var(--text-color); }

        /* === Contato === */
        .contact { 
            background-color: var(--primary-color); 
            color: var(--white); 
            padding: 60px 20px; 
            text-align: center; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
            role: region;
            aria-labelledby: contact-title;
        }
        .contact h2#contact-title { font-size: 2.2rem; margin-bottom: 10px; }
        .contact p { font-size: 1.2rem; margin-bottom: 10px; max-width: 600px; }
        .contact-buttons { 
            margin: 10px auto; 
            display: flex; 
            justify-content: center; 
            gap: 20px; 
            flex-wrap: wrap; 
            max-width: 600px; 
        }
        .contact-buttons a {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 28px;
            border-radius: 10px;
            font-weight: bold;
            color: var(--white);
            transition: transform 0.3s, opacity 0.3s, box-shadow 0.3s;
        }
        .contact-buttons a:hover { 
            transform: scale(1.08); 
            opacity: 0.9; 
            box-shadow: 0 6px 15px rgba(0,0,0,0.2); 
        }
        .whatsapp-btn { background-color: var(--whatsapp-color); }
        .instagram-btn {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            background-size: 400% 400%;
            animation: gradientAnimation 8s ease infinite;
        }

        /* === Modal do Formulário === */
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            align-items: center;
            justify-content: center;
        }
        .modal-content {
            background: var(--card-bg);
            padding: 20px;
            border-radius: 12px;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            position: relative;
            animation: slideIn 0.3s ease;
        }
        .modal-content h3 {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-bottom: 20px;
            text-align: center;
        }
        .modal-content label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: var(--text-color);
        }
        .modal-content input,
        .modal-content textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
            font-family: 'Roboto', sans-serif;
        }
        .modal-content textarea {
            resize: vertical;
            min-height: 80px;
        }
        .modal-content input:focus,
        .modal-content textarea:focus {
            border-color: var(--secondary-color);
            outline: none;
            box-shadow: 0 0 5px rgba(255, 102, 0, 0.5);
        }
        .modal-content button[type="submit"] {
            background-color: var(--whatsapp-color);
            color: var(--white);
            padding: 14px 28px;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.3s, opacity 0.3s;
            width: 100%;
        }
        .modal-content button[type="submit"]:hover {
            transform: scale(1.05);
            opacity: 0.9;
        }
        .modal-content button[type="submit"]:focus {
            outline: 2px solid var(--white);
            outline-offset: 2px;
        }
        .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 24px;
            color: var(--text-color);
            cursor: pointer;
            transition: color 0.3s;
        }
        .close-btn:hover { color: var(--secondary-color); }
        .modal.show { display: flex; }

        /* === Mapa === */
        .contact-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            max-width: 1200px;
            margin: 10px auto;
            gap: 20px;
        }
        .map-section { 
            flex: 1;
            min-width: 300px;
            max-width: 500px;
            width: 100%;
            height: 450px;
            text-align: center;
        }
        .map-section h3 { 
            font-size: 1.5rem; 
            color: var(--white); 
            margin-bottom: 10px; 
            text-align: center; 
        }
        .map-container { 
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            height: calc(100% - 40px);
        }
        .map-container iframe {
            width: 100%;
            height: 100%;
        }

        /* === Footer === */
        footer { 
            background-color: var(--footer-bg); 
            color: var(--white); 
            text-align: center; 
            padding: 25px 20px; 
            font-size: 0.95rem; 
        }
        footer a { 
            color: var(--secondary-color); 
            font-weight: bold; 
        }
        footer a:hover { 
            text-decoration: underline; 
        }
        .back-to-top { 
            margin-top: 10px; 
            display: inline-block; 
            padding: 10px 20px; 
            background: var(--secondary-color); 
            border-radius: 8px; 
            color: var(--white); 
            font-weight: bold; 
        }

        /* === Botões Flutuantes === */
        .floating-buttons {
            position: fixed;
            bottom: 20px;
            right: 20px;
            display: flex;
            flex-direction: column;
            gap: 18px;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        .floating-buttons.show { opacity: 1; }
        .floating-btn {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-size: 28px;
            box-shadow: 0 6px 14px rgba(0,0,0,0.3);
            transition: transform 0.3s, box-shadow 0.3s;
            animation: pulse 2s infinite;
            position: relative;
            text-align: center;
        }
        .floating-btn:hover { 
            transform: scale(1.2); 
            box-shadow: 0 10px 20px rgba(0,0,0,0.4); 
        }
        .budget-btn-floating {
            background-color: var(--secondary-color);
        }
        .budget-btn-floating:hover::after {
            content: "Solicite seu Orçamento";
            position: absolute;
            bottom: 70px;
            right: 50%;
            transform: translateX(50%);
            background-color: #333;
            color: var(--white);
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 0.9rem;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 150px;
            line-height: 1.4;
        }
        .whatsapp-btn-floating { 
            background-color: var(--whatsapp-color); 
        }
        .instagram-btn-floating {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            background-size: 400% 400%;
            animation: gradientAnimation 8s ease infinite;
        }

        /* === Animações === */
        @keyframes pulse { 
            0%, 100% { transform: scale(1); } 
            50% { transform: scale(1.1); } 
        }
        @keyframes gradientAnimation { 
            0% { background-position: 0% 50%; } 
            50% { background-position: 100% 50%; } 
            100% { background-position: 0% 50%; } 
        }
        @keyframes fadeIn { 
            from { opacity: 0; } 
            to { opacity: 1; } 
        }
        @keyframes slideIn { 
            from { opacity: 0; transform: translateY(20px); } 
            to { opacity: 1; transform: translateY(0); } 
        }

        /* === Responsividade === */
        @media (max-width: 768px) {
            header { flex-direction: column; align-items: flex-start; padding: 10px 20px; }
            #menu-toggle { display: block; }
            nav { 
                display: none; 
                flex-direction: column; 
                width: 100%; 
                padding: 10px 0; 
            }
            nav.active { display: flex; }
            .hero h1 { font-size: 2rem; }
            .hero p { font-size: 1rem; }
            .services .card { max-width: 95%; font-size: 1rem; }
            .contact-buttons { flex-direction: column; gap: 15px; }
            .contact-content { flex-direction: column; align-items: center; }
            .map-section { 
                max-width: 100%; 
                padding: 0 10px; 
                height: 400px;
            }
            .map-container { max-width: 100%; height: calc(100% - 40px); }
            .floating-buttons { bottom: 15px; right: 15px; gap: 12px; }
            .modal-content { width: 95%; }
            .budget-btn-floating:hover::after { font-size: 0.8rem; padding: 5px 8px; max-width: 120px; }
        }
        @media (max-width: 480px) {
            .hero { padding: 80px 10px; }
            .hero h1 { font-size: 1.6rem; }
            .hero p { font-size: 0.9rem; }
            .contact h2 { font-size: 1.4rem; }
            .contact p { font-size: 1rem; }
            .map-section { height: 350px; }
            .floating-btn { width: 50px; height: 50px; font-size: 24px; }
            .modal-content { padding: 15px; }
            .modal-content h3 { font-size: 1.3rem; }
            .budget-btn-floating:hover::after { font-size: 0.7rem; padding: 4px 6px; max-width: 100px; }
        }
    </style>
</head>
<body>
    <header id="header" role="banner">
        <img src="logo_alvarez.png" alt="Logo da Alvares Ar Condicionado, empresa de venda e manutenção de ar condicionado" aria-label="Alvares Ar Condicionado" loading="eager" decoding="async">
        <button id="menu-toggle" aria-label="Alternar menu de navegação" aria-expanded="false"><i class="fas fa-bars" aria-hidden="true"></i></button>
        <nav role="navigation" aria-label="Menu principal">
            <a href="#home" aria-current="page">Home</a>
            <a href="#services">Serviços</a>
            <a href="#contact">Contato</a>
        </nav>
    </header>

    <main>
        <section class="hero" id="home" role="region" aria-labelledby="hero-title">
            <h1 id="hero-title" lang="pt-BR">Alvares Ar Condicionado</h1>
            <p>Venda, Instalação, Manutenção e Assistência</p>
            <p>Sempre com você</p>
            <button class="cta-btn" id="open-budget-form" aria-label="Abrir formulário para solicitação de orçamento">Solicite seu Orçamento</button>
        </section>

        <section class="services" id="services" role="region" aria-labelledby="services-title">
            <h2 id="services-title" lang="pt-BR">Nossos Serviços</h2>
            <div class="cards">
                <div class="card"><i class="fas fa-snowflake" aria-hidden="true"></i> Venda de aparelhos de ar condicionado<p>Modelos residenciais e comerciais.</p></div>
                <div class="card"><i class="fas fa-tools" aria-hidden="true"></i> Instalação profissional<p>Equipe qualificada para montagem rápida e segura.</p></div>
                <div class="card"><i class="fas fa-cogs" aria-hidden="true"></i> <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" rel="noopener noreferrer">Manutenção preventiva e corretiva</a><p>Garantia de funcionamento eficiente.</p></div>
                <div class="card"><i class="fas fa-headset" aria-hidden="true"></i> Assistência técnica especializada<p>Suporte rápido e confiável.</p></div>
            </div>
        </section>

        <section class="contact" id="contact" role="region" aria-labelledby="contact-title">
            <h2 id="contact-title" lang="pt-BR">Entre em Contato Conosco</h2>
            <p>Horário: Segunda a Sexta, 08:00 às 17:30</p>
            <div class="contact-buttons">
                <a href="https://wa.me/551630136700" target="_blank" class="whatsapp-btn" rel="noopener noreferrer" aria-label="Contate-nos pelo WhatsApp"><i class="fab fa-whatsapp" aria-hidden="true"></i> WhatsApp</a>
                <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="instagram-btn" rel="noopener noreferrer" aria-label="Siga-nos no Instagram"><i class="fab fa-instagram" aria-hidden="true"></i> Instagram</a>
            </div>
            <div class="contact-content">
                <div class="map-section" role="region" aria-labelledby="map-title">
                    <h3 id="map-title" lang="pt-BR">Nossa Localização</h3>
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.434603734647!2d-47.82334468445166!3d-21.21792318590764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949320d6e6d36d9f%3A0x7e16e92e682d0d42!2sR.%20Genoveva%20On%C3%B3fre%20Barban%2C%20657%20-%20Planalto%20Verde%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014056-340!5e0!3m2!1spt-BR!2sbr!4v1694440000000!5m2!1spt-BR!2sbr" 
                            style="border:0;" allowfullscreen="" loading="lazy" fetchpriority="high" aria-label="Mapa da localização da Alvares Ar Condicionado em Ribeirão Preto"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer role="contentinfo">
        <p>&copy; 2025 Alvares Ar Condicionado. Todos os direitos reservados.</p>
        <p>
            <i class="fab fa-whatsapp" style="color:#25D366; margin-right:5px;" aria-hidden="true"></i>
            <a href="https://wa.me/551630136700" target="_blank" rel="noopener noreferrer" aria-label="Contate-nos pelo WhatsApp">+55 16 3013-6700</a> | 
            <i class="fab fa-instagram" style="color:#ff6600; margin-left:10px; margin-right:5px;" aria-hidden="true"></i>
            <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" rel="noopener noreferrer" aria-label="Siga-nos no Instagram">@alvaresarcondicionado</a>
        </p>
        <p><span style="color:#ff6600; font-weight:bold;">Loja Online: Em breve!</span></p>
        <a href="#home" class="back-to-top" aria-label="Voltar ao topo da página">Voltar ao topo</a>
    </footer>

    <div class="floating-buttons" id="floating-buttons" role="region" aria-label="Botões de contato rápidos">
        <button class="floating-btn budget-btn-floating" id="open-budget-form" aria-label="Abrir formulário para solicitação de orçamento"><i class="fas fa-calculator" aria-hidden="true"></i></button>
        <a href="https://wa.me/551630136700" target="_blank" class="floating-btn whatsapp-btn-floating" aria-label="Contatar via WhatsApp" rel="noopener noreferrer"><i class="fab fa-whatsapp" aria-hidden="true"></i></a>
        <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="floating-btn instagram-btn-floating" aria-label="Visitar Instagram" rel="noopener noreferrer"><i class="fab fa-instagram" aria-hidden="true"></i></a>
    </div>

    <div class="modal" id="contact-modal" role="dialog" aria-labelledby="form-title">
        <div class="modal-content">
            <span class="close-btn" id="close-form" aria-label="Fechar formulário">&times;</span>
            <h3 id="form-title" lang="pt-BR">Solicite seu Orçamento</h3>
            <form id="whatsapp-form">
                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required aria-required="true" placeholder="Digite seu nome">
                <label for="phone">Telefone:</label>
                <input type="tel" id="phone" name="phone" required aria-required="true" placeholder="Digite seu telefone (com DDD)">
                <label for="message">Mensagem:</label>
                <textarea id="message" name="message" required aria-required="true" placeholder="Descreva sua solicitação"></textarea>
                <button type="submit" aria-label="Enviar mensagem via WhatsApp">Enviar via WhatsApp</button>
            </form>
        </div>
    </div>

    <script>
        // Gerenciamento do menu hamburguer, botões flutuantes e modal
        document.addEventListener('DOMContentLoaded', () => {
            const menuToggle = document.getElementById('menu-toggle');
            const nav = document.querySelector('nav');
            const floatingButtons = document.getElementById('floating-buttons');
            const openBudgetFormBtn = document.querySelectorAll('#open-budget-form');
            const closeFormBtn = document.getElementById('close-form');
            const modal = document.getElementById('contact-modal');
            const form = document.getElementById('whatsapp-form');

            // Menu hamburguer
            menuToggle.addEventListener('click', () => {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                nav.classList.toggle('active');
            });

            // Mostrar botões flutuantes
            setTimeout(() => {
                floatingButtons.classList.add('show');
            }, 500);

            // Efeito de scroll no header
            window.addEventListener('scroll', () => {
                const header = document.getElementById('header');
                header.classList.toggle('scrolled', window.scrollY > 50);
            });

            // Abrir modal com os botões de orçamento (hero e flutuante)
            openBudgetFormBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    modal.classList.add('show');
                });
            });

            // Fechar modal
            closeFormBtn.addEventListener('click', () => {
                modal.classList.remove('show');
            });

            // Fechar modal ao clicar fora
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                }
            });

            // Manipulação do formulário para WhatsApp
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const name = document.getElementById('name').value.trim();
                const phone = document.getElementById('phone').value.trim();
                const message = document.getElementById('message').value.trim();
                
                // Formatar a mensagem para o WhatsApp
                const whatsappMessage = `Olá, meu nome é ${encodeURIComponent(name)}. Meu telefone é ${encodeURIComponent(phone)}. Mensagem: ${encodeURIComponent(message)}`;
                const whatsappUrl = `https://wa.me/551630136700?text=${whatsappMessage}`;
                
                // Redirecionar para o WhatsApp
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                
                // Limpar formulário e fechar modal
                form.reset();
                modal.classList.remove('show');
            });
        });
    </script>
</body>
</html>
