<html lang="pt-BR">  
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alvares Ar Condicionado</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            font-family: 'Roboto', sans-serif;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background: #004aad;
            color: white;
            padding: 15px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        header img {
            height: 60px;
        }
        nav a {
            color: white;
            margin-left: 20px;
            text-decoration: none;
            font-weight: bold;
        }
        nav a:hover {
            text-decoration: underline;
        }
        .hero {
            background: url('arcondicionado.jpg') no-repeat center center/cover;
            height: 400px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center;
        }
        .hero h1 {
            font-size: 3em;
            background: rgba(0,0,0,0.5);
            padding: 10px 20px;
            border-radius: 10px;
        }
        section {
            padding: 40px 20px;
            max-width: 1000px;
            margin: auto;
        }
        .services {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        .service-card {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            text-align: center;
        }
        .service-card h3 {
            margin-top: 0;
            color: #004aad;
        }
        footer {
            background: #004aad;
            color: white;
            text-align: center;
            padding: 20px;
        }
        footer a {
            color: #ffd700;
            text-decoration: none;
        }
        footer a:hover {
            text-decoration: underline;
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
        <h1>Conforto e Qualidade em Climatização</h1>
    </section>

    <section id="services">
        <h2>Serviços</h2>
        <div class="services">
            <div class="service-card">
                <h3>Instalação</h3>
                <p>Realizamos instalação profissional de ar-condicionado para residências e empresas.</p>
            </div>
            <div class="service-card">
                <h3>Manutenção Corretiva</h3>
                <p>Consertos e reparos rápidos para garantir o funcionamento do seu equipamento.</p>
            </div>
            <div class="service-card">
                <h3>Manutenção Preventiva</h3>
                <p>Evite problemas futuros! Agende sua manutenção preventiva diretamente pelo nosso 
                   <a href="https://www.instagram.com/alvarezarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">Instagram</a>.
                </p>
            </div>
        </div>
    </section>

    <section id="contact">
        <h2>Contato</h2>
        <p>Entre em contato pelo nosso WhatsApp ou visite nosso 
           <a href="https://www.instagram.com/alvarezarcondicionado?igsh=MWk2azJwcmJrYTRvZA==" target="_blank">Instagram</a>.
        </p>
    </section>

    <footer>
        <p>&copy; 2025 Alvares Ar Condicionado - Todos os direitos reservados</p>
    </footer>

</body>
</html>
