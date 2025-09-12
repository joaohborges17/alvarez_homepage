<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alvares Ar Condicionado</title>
    <meta name="description" content="Alvares Ar Condicionado - Venda, instalação e manutenção de aparelhos de ar condicionado em Ribeirão Preto.">
    <meta property="og:title" content="Alvares Ar Condicionado - Ribeirão Preto">
    <meta property="og:description" content="Venda, instalação, manutenção e assistência técnica de ar condicionado com qualidade e confiança.">
    <meta property="og:image" content="https://seusite.com/logo_alvarez.png">
    <meta property="og:url" content="https://seusite.com">
    <meta property="og:type" content="website">
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" onload="this.rel='stylesheet'" media="print" loading="lazy">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-Avb2QiuDEEvB4bZJYdft2mNjVShBftLdPG8FJ0V7irTLQ8Uo0qcPxh4Plq7G5tGm0rU+1SPhVotteLpBERwTkw==" crossorigin="anonymous" referrerpolicy="no-referrer" media="print" onload="this.media='all'" loading="lazy">
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

        /* Reset e padrão */
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        body { font-family: 'Roboto', sans-serif; background: var(--background); color: var(--text-color); line-height: 1.6; }
        a { text-decoration: none; color: inherit; transition: color 0.3s, outline 0.2s; }
        a:focus { outline: 2px solid var(--secondary-color); outline-offset: 2px; }

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
        }
        .cta-btn:hover { transform: scale(1.05); opacity: 0.9; }
        .cta-btn:focus { outline: 2px solid var(--white); outline-offset: 2px; }

        /* Serviços */
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

        /* Contato */
        .contact { 
            background-color: var(--primary-color); 
            color: var(--white); 
            padding: 60px 20px; 
            text-align: center; 
            display: flex; 
            flex-direction: column; 
            align-items: center; 
        }
        .contact h2 { font-size: 2.2rem; margin-bottom: 20px; }
        .contact p { font-size: 1.2rem; margin-bottom: 20px; max-width: 600px; }
        .contact-buttons { 
            margin: 20px auto; 
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

        /* Contêiner para mapa */
        .contact-content {
            display: flex;
            justify-content: center;
            max-width: 1200px;
            margin: 20px auto;
        }

        /* Mapa */
        .map-section { 
            max-width: 600px; 
            width: 100%; 
            text-align: center; 
        }
        .map-section h3 { 
            font-size: 1.5rem; 
            color: var(--white); 
            margin-bottom: 20px; 
            text-align: center; 
        }
        .map-container { 
            width: 100%; 
            max-width: 600px; 
            margin: 0 auto; 
            border-radius: 12px; 
            overflow: hidden; 
            box-shadow: 0 4px 12px rgba(0,0,0,0.1); 
        }

        /* Footer */
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
        }
        .floating-btn:hover { 
            transform: scale(1.2); 
            box-shadow: 0 10px 20px rgba(0,0,0,0.4); 
        }
        .whatsapp-btn-floating { 
            background-color: var(--whatsapp-color); 
            order: -1; 
        }
        .instagram-btn-floating {
            background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
            background-size: 400% 400%;
            animation: gradientAnimation 8s ease infinite;
        }
        .loja-btn-disabled {
            background-color: #999;
            cursor: not-allowed;
            position: relative;
            animation: pulseDisabled 2s infinite;
        }
        .loja-btn-disabled:hover::after {
            content: attr(data-title);
            position: absolute;
            bottom: 70px;
            right: 50%;
            transform: translateX(50%);
            background-color: #333;
            color: var(--white);
            padding: 6px 10px;
            border-radius: 6px;
            font-size: 0.9rem;
            white-space: nowrap;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        }
        @keyframes pulse { 
            0%, 100% { transform: scale(1); } 
            50% { transform: scale(1.1); } 
        }
        @keyframes pulseDisabled { 
            0%, 100% { transform: scale(1); } 
            50% { transform: scale(1.05); } 
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

        /* Responsividade */
        @media (max-width: 768px) {
            header { flex-direction: column; align-items: flex-start; }
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
            .map-section { max-width: 100%; padding: 0 10px; }
            .map-container { max-width: 100%; }
        }
        @media (max-width: 480px) {
            .hero { padding: 80px 10px; }
            .hero h1 { font-size: 1.6rem; }
            .hero p { font-size: 0.9rem; }
            .contact h2 { font-size: 1.4rem; }
            .contact p { font-size: 1rem; }
            .floating-btn { width: 50px; height: 50px; font-size: 24px; }
        }
    </style>
    <script defer src="script.js"></script>
</head>
<body>
    <header id="header">
        <img src="logo_alvarez.png" alt="Logo Alvares Ar Condicionado" aria-label="Alvares Ar Condicionado" loading="lazy">
        <button id="menu-toggle" aria-label="Toggle menu"><i class="fas fa-bars"></i></button>
        <nav role="navigation">
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
            <a href="https://wa.me/551630136700" target="_blank" class="cta-btn" rel="noopener noreferrer">Solicite seu Orçamento</a>
        </section>

        <section class="services" id="services">
            <h2>Nossos Serviços</h2>
            <div class="cards">
                <div class="card"><i class="fas fa-snowflake"></i> Venda de aparelhos de ar condicionado<p>Modelos residenciais e comerciais.</p></div>
                <div class="card"><i class="fas fa-tools"></i> Instalação profissional<p>Equipe qualificada para montagem rápida e segura.</p></div>
                <div class="card"><i class="fas fa-cogs"></i> <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" rel="noopener noreferrer">Manutenção preventiva e corretiva</a><p>Garantia de funcionamento eficiente.</p></div>
                <div class="card"><i class="fas fa-headset"></i> Assistência técnica especializada<p>Suporte rápido e confiável.</p></div>
            </div>
        </section>

        <section class="contact" id="contact">
            <h2>Entre em Contato Conosco</h2>
            <p>Horário: Segunda a Sexta, 08:00 às 17:30</p>
            <div class="contact-buttons">
                <a href="https://wa.me/551630136700" target="_blank" class="whatsapp-btn" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="instagram-btn" rel="noopener noreferrer"><i class="fab fa-instagram"></i> Instagram</a>
            </div>
            <div class="contact-content">
                <div class="map-section">
                    <h3>Nossa Localização</h3>
                    <div class="map-container">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.434603734647!2d-47.82334468445166!3d-21.21792318590764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949320d6e6d36d9f%3A0x7e16e92e682d0d42!2sR.%20Genoveva%20On%C3%B3fre%20Barban%2C%20657%20-%20Planalto%20Verde%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014056-340!5e0!3m2!1spt-BR!2sbr!4v1694440000000!5m2!1spt-BR!2sbr" 
                            width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy" aria-label="Localização da Alvares Ar Condicionado"></iframe>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        &copy; 2025 Alvares Ar Condicionado. Todos os direitos reservados.
        <br>
        <i class="fab fa-whatsapp" style="color:#25D366; margin-right:5px;"></i>
        <a href="https://wa.me/551630136700" target="_blank" rel="noopener noreferrer">+55 16 3013-6700</a> | 
        <i class="fab fa-instagram" style="color:#ff6600; margin-left:10px; margin-right:5px;"></i>
        <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" rel="noopener noreferrer">@alvaresarcondicionado</a>
        <br>
        <span style="color:#ff6600; font-weight:bold;">Loja Online: Em breve!</span>
        <br>
        <a href="#home" class="back-to-top">Voltar ao topo</a>
    </footer>

    <div class="floating-buttons" id="floating-buttons">
        <a href="https://wa.me/551630136700" target="_blank" class="floating-btn whatsapp-btn-floating" aria-label="WhatsApp" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
        <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank" class="floating-btn instagram-btn-floating" aria-label="Instagram" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
        <a class="floating-btn loja-btn-disabled" data-title="Em breve!" aria-label="Loja"><i class="fas fa-store"></i></a>
    </div>
</body>
</html>
