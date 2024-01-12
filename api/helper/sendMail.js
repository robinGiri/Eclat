const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'abhisekmagarlinkedin@gmail.com',
                pass: 'utri vgnz dxgp zhbv'
            }
        });

        const info = await transporter.sendMail({
            from: 'abhisekmagarlinkedin@gmail.com',
            to: "abhisekmagarvivo@gmail.com",
            subject: "Your Eclat Order Confirmation - Thank You for Your Purchase!",
            text: "Hello Iam god sending You a message.",

            html: `
        <p><strong>Dear Abhisek,</strong></p>
        <p>Thank you for shopping with us! We're excited to let you know that we've received your order, and it's now being processed. Here are the details of your order for your records:</p>
        
        <p><strong>Order Number:</strong> [Order Number]<br>
        <strong>Order Date:</strong> [Order Date]</p>
        
        <p><strong>Billing Information:</strong><br>
        Name: [Customer's Name]<br>
        Address: [Billing Address]<br>
        Phone: [Billing Phone]<br>
        Email: [Billing Email]</p>
      
        <p><strong>Shipping Information:</strong><br>
        Name: [Recipient's Name]<br>
        Address: [Shipping Address]<br>
        Estimated Delivery Date: [Delivery Date]</p>
      
        <p><strong>Order Details:</strong><br>
        [Include a list of items purchased, their quantities, and prices. If the order is extensive, consider attaching a detailed invoice instead.]</p>
      
        <p><strong>Payment Method:</strong> [Payment Method Used]<br>
        <strong>Total Amount:</strong> [Total Order Amount]</p>
      
        <p><strong>Order Status:</strong> Your order is currently [Current Status - e.g., "being prepared for shipment"]. You can track the progress of your order by visiting [link to order tracking, if available].</p>
      
        <p><strong>Additional Information:</strong><br>
        [Include any additional information the customer might find useful, such as return policy, customer service contact details, or a thank you discount on future purchases.]</p>
      
        <p>We're committed to ensuring that your experience with Eclat is seamless and enjoyable. If you have any questions or need assistance, please don't hesitate to contact our customer service team at [Customer Service Email] or [Customer Service Phone Number].</p>
      
        <p>Thank you for choosing Eclat. We hope you love your purchase, and we look forward to serving you again!</p>
      
        <p><strong>Warm regards,</strong><br>
        Abhisek<br>
        CTO<br>
        Eclat<br>
        abhisekmagarlinkedin@gmail.com<br>
        https://deploy-preview-44--eclatbags.netlify.app</p>`
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

module.exports = sendMail;
