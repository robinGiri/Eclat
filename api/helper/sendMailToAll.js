const nodemailer = require("nodemailer");

let data = {
    name: "Abhisek",
    mails: "abhisekmagarvivo@gmail.com",
}




const sendMailToAll = async (req, res) => {
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
            subject: "Unveil the Latest Trends in Bags - Exclusive Deals Inside! 🎒✨",
            text: "Hello Iam god sending You a message.",

            html: `
            <p>Hello ${data.name},</p>
    
    <p>Welcome to our latest edition of [Your Website's Name] Newsletter, where we bring the world of high-quality bags right to your inbox!</p>
    
    <h2>🌟 What's New This Month? 🌟</h2>
    
    <p><strong>The Latest Arrivals:</strong> Dive into our newest collection! From sleek office briefcases to trendy backpacks, our latest arrivals are sure to dazzle you. Explore [New Collection Name] and find your perfect match.</p>
    
    <p><strong>Designer Spotlight:</strong> This month, we're featuring [Designer's Name], known for their innovative designs and sustainable materials. Discover how [Designer's Name]'s creations are setting new trends in the world of fashion accessories.</p>
    
    <h2>🔥 Hot Deals You Can't Miss 🔥</h2>
    
    <p><strong>Exclusive Subscriber Discount:</strong> As a token of our appreciation, here's an exclusive 15% off on your next purchase! Use code: LOVEBAGS15 at checkout. Valid until [Date].</p>
    
    <p><strong>Clearance Sale:</strong> It's your last chance to grab some of our best-selling items at up to 50% off! Hurry, while stocks last!</p>
    
    <h2>💡 Bag Care Tips 💡</h2>
    
    <p><strong>Leather Love:</strong> Learn how to keep your leather bags in pristine condition with our expert care tips.</p>
    
    <p><strong>Storage Solutions:</strong> Maximize the lifespan of your bags with our guide on proper storage techniques.</p>
    
    <h2>📣 Community Corner 📣</h2>
    
    <p><strong>Customer Spotlight:</strong> This month, we're featuring [Customer's Name], a travel blogger who loves her [Product Name] backpack. Read about her adventures and how our bag has been a trusty companion on her journeys.</p>
    
    <p><strong>Photo Contest:</strong> Share a picture of your favorite [Your Website's Name] bag in action! Tag us and use #My[WebsiteName]Journey for a chance to be featured on our website and win exciting prizes.</p>
    
    <h2>📆 Upcoming Events 📆</h2>
    
    <p><strong>Webinar Alert:</strong> Join us on [Date] for a free webinar on 'The Evolution of Bag Fashion'. Register now to reserve your spot!</p>
    
    <p><strong>Pop-Up Shop:</strong> We're coming to [Location] on [Date]! Experience our collection firsthand and enjoy exclusive on-site promotions.</p>
    
    <p>Thank you for being a part of the [Your Website's Name] community. We're always here to provide you with the best in style, quality, and service. Stay tuned for more exciting updates and feel free to reach out to us with any feedback or queries.</p>
    
    <p>Happy Bag Shopping!</p>
    
    <p>Warm regards,</p>
    Abhisek<br>
    CTO<br>
    Eclat<br>
    [Contact Information]<br>
    [Website URL]</p>`
        });

        console.log("Message sent: %s", info.messageId);
        res.json(info);
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
};

module.exports = sendMailToAll;
