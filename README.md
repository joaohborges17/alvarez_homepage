<html lang="pt-BR">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alvarez Ar Condicionado</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <!-- Importando ícones do Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
    <style>
        * { box-sizing: border-box; }
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background-color: #f5f5f5;
            color: #333;
        }

        header {
            background-color: #003366;
            color: white;
            padding: 20px;
            text-align: center;
        }

        header img {
            max-height: 80px;
            margin-bottom: 10px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underline;
        }

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

        .hero h1 {
            font-size: 3rem;
            margin: 0 0 10px;
        }

        .hero p {
            font-size: 1.2rem;
        }

        .services {
            padding: 50px 20px;
            text-align: center;
        }

        .services h2 {
            font-size: 2.2rem;
            margin-bottom: 30px;
            color: #003366;
        }

        .services ul {
            list-style: none;
            padding: 0;
        }

        .services li {
            background-color: white;
            margin: 15px auto;
            padding: 25px;
            max-width: 600px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            font-size: 1.1rem;
            transition: transform 0.3s;
        }

        .services li:hover {
            transform: translateY(-5px);
        }

        .contact {
            background-color: #003366;
            color: white;
            padding: 50px 20px;
            text-align: center;
        }

        .contact h2 {
            margin-bottom: 20px;
            font-size: 2rem;
        }

        .contact p {
            font-size: 1.2rem;
        }

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

        .contact-buttons a:hover {
            transform: scale(1.05);
            opacity: 0.9;
        }

        .whatsapp-btn {
            background-color: #25D366;
        }

        .instagram-btn {
            background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }

        footer {
            background-color: #002244;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 0.9rem;
        }

        footer a {
            color: #ff6600;
            text-decoration: none;
            font-weight: bold;
        }

        footer a:hover {
            text-decoration: underline;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            .hero p {
                font-size: 1rem;
            }
            nav a {
                display: block;
                margin: 5px 0;
            }
            .contact-buttons {
                flex-direction: column;
                gap: 15px;
            }
        }
    </style>
</head>
<body>

<header>
     <img src="logo_alvarez.png" alt="Alvares Ar Condicionado Logo">
    <nav>
        <a href="#home">Home</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
    </nav>
</header>

<section class="hero" id="home">
    <h1>Alvarez Ar Condicionado</h1>
    <p>Venda, Instalação, Manutenção e Assistência</p>
    <p>Sempre com você</p>
</section>

<section class="services" id="services">
    <h2>Nossos Serviços</h2>
    <ul>
        <li>Venda de aparelhos de ar condicionado</li>
        <li>Instalação profissional</li>
        <li>Manutenção preventiva e corretiva</li>
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
</section>

<footer>
    &copy; 2025 Alvarez Ar Condicionado. Todos os direitos reservados.
    <br>
    <i class="fab fa-whatsapp" style="color:#25D366; margin-right: 5px;"></i>
    <a href="https://wa.me/551630136700" target="_blank">+55 16 3013-6700</a> | 
    <i class="fab fa-instagram" style="color:#ff6600; margin-right: 5px; margin-left:10px;"></i>
    <a href="https://www.instagram.com/alvaresarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">@alvaresarcondicionado</a>
</footer>

</body>
</html>
