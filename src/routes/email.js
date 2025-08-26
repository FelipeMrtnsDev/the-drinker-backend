import express from 'express'
import nodemailer from 'nodemailer'
import { emailHTML } from '../views/templateEmail.js' 
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

router.post("/enviar", async (req, res) => {
    const { nome, email, whatsapp, valorEstimado, message } = req.body;

    if (!nome) return res.status(400).json({ message: "O campo 'nome' é obrigatório." });
    if (!email) return res.status(400).json({ message: "O campo 'email' é obrigatório." });
    if (!whatsapp) return res.status(400).json({ message: "O campo 'whatsapp' é obrigatório." });
    if (!valorEstimado) return res.status(400).json({ message: "O campo 'valor estimado' é obrigatório." });
    if (!message) return res.status(400).json({ message: "O campo 'mensagem' é obrigatório." });

    const transport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        }
    });

    try {
        await transport.sendMail({
            from: process.env.MY_EMAIL,
            to: process.env.MY_EMAIL,
            subject: `Novo Contato da Landing Page - ${nome}`,
            html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>Novo pedido de contato recebido!</h2>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>WhatsApp:</strong> ${whatsapp}</p>
                <p><strong>Valor Estimado de Interesse:</strong> ${valorEstimado}</p>
                <hr>
                <p><strong>Mensagem:</strong></p>
                <p>${message}</p>
            </div>
            `
        });

        const primeiroNome = nome.split(' ')[0];
        const htmlContent = emailHTML(primeiroNome); 

        await transport.sendMail({
            from: `"Daniel Justino | The Drinker" <${process.env.MY_EMAIL}>`,
            to: email,
            subject: 'Recebemos seu pedido de contato!',
            html: htmlContent
        });

        res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro ao enviar os emails." });
    }
});

export default router;
