export const emailHTML = (nome) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <title>Convite para Reunião</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #f4f7f6;
            font-family: 'Inter', 'Arial', sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        .wrapper {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #e5e5e5;
        }
        .header {
            background-color: #01dfb2;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 26px;
            font-weight: 700;
        }
        .content {
            padding: 40px 30px;
            color: #333333;
            line-height: 1.7;
        }
        .content h2 {
            font-size: 22px;
            color: #1a1a1a;
            margin-top: 0;
            font-weight: 600;
        }
        .content p {
            font-size: 16px;
            margin-bottom: 25px;
            color: #555555;
        }
        .topics {
            margin-top: 30px;
            padding: 20px;
            background-color: #f8f8f8;
            border-radius: 8px;
        }
        .topics h3 {
            font-size: 18px;
            color: #000000;
            margin-top: 0;
            font-weight: 600;
        }
        .topics ul {
            padding-left: 20px;
            margin: 0;
            color: #555555;
        }
        .cta-button {
            display: inline-block;
            background-color: #01dfb2;
            color: #000000;
            padding: 15px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            margin-top: 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        .cta-button:hover {
            background-color: #00c9a7;
            transform: scale(1.05);
        }
        .footer {
            text-align: center;
            padding: 30px 20px;
            font-size: 12px;
            color: #999999;
            background-color: #f4f7f6;
        }
        .footer a {
            color: #01dfb2;
            text-decoration: none;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="header">
            <h1>Vamos Agendar Nossa Conversa?</h1>
        </div>
        <div class="content">
            <h2>Olá, ${nome}!</h2>
            <p>Obrigado pelo seu interesse na The Drinker! Recebemos o seu pedido para agendar uma conversa e estamos animados para nos conectarmos com você.</p>
            <p>Para confirmar e escolher o melhor horário, por favor, utilize o botão abaixo para acessar nossa agenda online.</p>
            
            <div class="topics">
                <h3>O que esperar da nossa conversa:</h3>
                <ul>
                    <li>Entender seus objetivos e como podemos ajudar.</li>
                    <li>Apresentar as soluções e diferenciais da The Drinker.</li>
                    <li>Esclarecer suas dúvidas e discutir os próximos passos.</li>
                </ul>
            </div>

            <p style="margin-top: 30px;">O processo é rápido e garante que nosso tempo juntos seja o mais produtivo possível. Estamos à sua disposição!</p>
            
            <div style="text-align: center;">
                <a href="#" class="cta-button">Escolher um Horário</a>
            </div>
        </div>
        <div class="footer">
            <p>Atenciosamente, <br><strong>Daniel Justino | CEO The Drinker</strong></p>
            <p><a href="https://the-drinker.vercel.app/">thedrinker.com</a></p>
        </div>
    </div>
</body>
</html>
`;
