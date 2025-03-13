import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('API route hit with method:', req.method);
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Request body:', req.body);
    const { firstName, lastName, company, email, phoneNumber, message, country } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Log connection details (remove in production)
    console.log('Attempting to connect to email server with:', {
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USER,
        // Password hidden for security
      }
    });

    // Create a transporter with more detailed configuration
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT), // Ensure port is a number
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // Add these options for Gmail
      tls: {
        rejectUnauthorized: false // Helps with self-signed certificates
      },
      debug: true, // Enable debug output
      logger: true // Log information to the console
    });

    // Get recipients from environment variable
    const recipients = process.env.EMAIL_TO.split(',').map(email => email.trim());

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: recipients.join(', '),
      subject: 'New Contact Form Submission - Lakestate Industries',
      text: `
        Name: ${firstName} ${lastName}
        Company: ${company || 'N/A'}
        Email: ${email}
        Phone: ${phoneNumber || 'Not provided'} (${country})
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber || 'Not provided'} (${country})</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    console.log('Sending email to:', recipients.join(', '));

    // Send email with promise
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);

    // Return success response with more details
    return res.status(200).json({ 
      success: true,
      message: 'Your message has been sent successfully! We will get back to you soon.',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error response
    return res.status(500).json({ 
      error: 'Failed to send message',
      details: error.message,
      code: error.code
    });
  }
} 