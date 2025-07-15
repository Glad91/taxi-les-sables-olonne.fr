import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // Validation des champs requis
  if (!body.name || !body.phone || !body.pickup || !body.destination || !body.date || !body.time) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Champs requis manquants',
    })
  }

  // Configuration du transporteur Nodemailer pour Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.emailSmtpUser, // Votre adresse Gmail
      pass: config.emailSmtpPassword, // Votre mot de passe d'application
    },
  })

  // Formatage de la date en français
  let formattedDate = body.date
  try {
    const dateObj = new Date(body.date)
    if (!Number.isNaN(dateObj.getTime())) {
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
      formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(dateObj)
    }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors du formatage de la date:', error)
  }

  // Template HTML de l'e-mail
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Nouvelle Réservation de Taxi</title>
        <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 20px auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); border-top: 5px solid #1d4ed8; }
            h1 { color: #1d4ed8; font-size: 24px; margin-bottom: 20px; text-align: center; }
            .info-block { background-color: #eff6ff; border-left: 5px solid #2563eb; padding: 15px; margin-bottom: 20px; border-radius: 4px; }
            .info-block p { margin: 5px 0; }
            strong { color: #1e40af; }
            .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #777; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Nouvelle Réservation de Taxi !</h1>
            <p>Une nouvelle demande de réservation a été soumise via votre site web. Voici les détails :</p>

            <div class="info-block">
                <p><strong>Service :</strong> ${body.service}</p>
                <p><strong>Date et Heure :</strong> ${formattedDate} à ${body.time}</p>
                <p><strong>Adresse de départ :</strong> ${body.pickup}</p>
                <p><strong>Adresse d'arrivée :</strong> ${body.destination}</p>
            </div>

            <p><strong>Informations de contact :</strong></p>
            <ul>
                <li><strong>Nom :</strong> ${body.name}</li>
                <li><strong>Téléphone :</strong> <a href="tel:${body.phone}" style="color:#1d4ed8; text-decoration:none;">${body.phone}</a></li>
                ${body.email ? `<li><strong>Email :</strong> <a href="mailto:${body.email}" style="color:#1d4ed8; text-decoration:none;">${body.email}</a></li>` : ''}
                <li><strong>Passagers :</strong> ${body.passengers}</li>
            </ul>

            <p><strong>Message du client :</strong></p>
            <p>${body.notes || 'Aucun message fourni.'}</p>

            <div class="footer">
                <p>Ceci est un email automatique envoyé depuis votre site web.</p>
                <p>&copy; ${new Date().getFullYear()} Taxi Les Sables d'Olonne. Tous droits réservés.</p>
            </div>
        </div>
    </body>
    </html>
  `

  // Version texte de secours
  const textContent = `
    Nouvelle réservation reçue :
    - Nom: ${body.name}
    - Téléphone: ${body.phone}
    - Email: ${body.email || 'Non fourni'}
    - Service: ${body.service}
    - Date: ${formattedDate}
    - Heure: ${body.time}
    - Départ: ${body.pickup}
    - Destination: ${body.destination}
    - Passagers: ${body.passengers}
    - Message: ${body.notes || 'Aucun'}
  `

  try {
    await transporter.sendMail({
      from: `"Taxi Les Sables d'Olonne" <${config.emailSmtpUser}>`,
      to: process.env.EMAIL_RECIPIENT, // Destinataire configuré dans .env
      replyTo: body.email,
      subject: `Réservation de ${body.name} - ${body.service}`,
      html: htmlContent,
      text: textContent,
    })

    return { success: true, message: 'Email envoyé avec succès' }
  }
  catch (error) {
    // eslint-disable-next-line no-console
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Erreur lors de l\'envoi de l\'e-mail',
    })
  }
})
