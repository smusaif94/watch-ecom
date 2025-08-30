# 🌟 Watch E-Commerce Website - Complete Deployment Guide

## 📋 Project Overview
यह एक complete full-stack e-commerce website है watch selling के लिए। Frontend React में बना है और backend Azure Functions में deploy होता है।

## 🏗️ Tech Stack
- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Azure Functions (Node.js)
- **Database**: Azure SQL Database / MongoDB Atlas  
- **Payment**: Stripe Payment Gateway
- **Hosting**: Azure Static Web Apps + Azure Functions
- **Authentication**: JWT-based Admin Authentication

## 📁 Project Structure
```
Watch-Ecom/
├── frontend/          # React frontend application
│   ├── src/
│   │   ├── pages/     # All page components
│   │   ├── App.tsx    # Main app component
│   │   └── routes.tsx # Routing configuration
│   ├── package.json
│   └── tailwind.config.js
├── api/               # Azure Functions backend
│   ├── index.js       # Main API entry point
│   ├── watches.js     # Watches CRUD operations
│   ├── orders.js      # Orders management
│   ├── auth.js        # Admin authentication
│   └── payments.js    # Stripe integration
└── README.md         # यह file
```

## 🚀 Azure Deployment Instructions

### 1️⃣ Frontend Deployment (Azure Static Web Apps)

#### Step 1: Build Frontend
```bash
cd frontend
npm install
npm run build
```

#### Step 2: Create Azure Static Web App
1. Azure Portal में जाएं
2. "Create a resource" → "Static Web App" select करें
3. Basic details fill करें:
   - **Subscription**: आपका subscription
   - **Resource Group**: नया बनाएं या existing use करें
   - **Name**: `watch-ecom-frontend`
   - **Plan Type**: Free (0 USD/month)
   - **Region**: East Asia या nearest region

#### Step 3: GitHub Integration
1. **Source**: GitHub
2. Repository select करें जहाँ आपका code है
3. **Branch**: main
4. **Build Presets**: React
5. **App location**: `/frontend`
6. **Output location**: `dist`

### 2️⃣ Backend Deployment (Azure Functions)

#### Step 1: Create Function App
1. Azure Portal → "Create a resource" → "Function App"
2. Basic details:
   - **Function App Name**: `watch-ecom-api`
   - **Runtime Stack**: Node.js
   - **Version**: 18 LTS
   - **Region**: Same as frontend
   - **Plan**: Consumption (Pay-as-you-go)

#### Step 2: Deploy Functions
```bash
# Azure CLI install करें पहले
npm install -g @azure/functions-core-tools

# Login करें
az login

# Functions deploy करें
cd api
func azure functionapp publish watch-ecom-api
```

#### Step 3: Individual Function Mapping
प्रत्येक file को अलग function के रूप में map करना है:

1. **index.js** → Function name: `main`
   - HTTP Trigger
   - Route: `api/main`

2. **watches.js** → Function name: `watches`  
   - HTTP Trigger
   - Route: `api/watches`

3. **orders.js** → Function name: `orders`
   - HTTP Trigger  
   - Route: `api/orders`

4. **auth.js** → Function name: `auth`
   - HTTP Trigger
   - Route: `api/auth`

5. **payments.js** → Function name: `payments`
   - HTTP Trigger
   - Route: `api/payments`

### 3️⃣ Database Setup

#### Option A: Azure SQL Database
1. Azure Portal → "SQL databases" → "Create"
2. Basic details:
   - **Database Name**: `WatchEcomDB`
   - **Server**: Create new server
   - **Pricing Tier**: Basic (5 DTU, $5/month)

3. Tables create करें:
```sql
-- Watches table
CREATE TABLE Watches (
    id INT PRIMARY KEY IDENTITY(1,1),
    name NVARCHAR(255) NOT NULL,
    brand NVARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    description NTEXT,
    image_url NVARCHAR(500),
    stock_quantity INT DEFAULT 0,
    is_active BIT DEFAULT 1,
    created_at DATETIME DEFAULT GETDATE()
);

-- Orders table  
CREATE TABLE Orders (
    id INT PRIMARY KEY IDENTITY(1,1),
    order_id NVARCHAR(50) UNIQUE NOT NULL,
    customer_name NVARCHAR(255),
    customer_email NVARCHAR(255),
    customer_phone NVARCHAR(20),
    total_amount DECIMAL(10,2),
    payment_status NVARCHAR(50) DEFAULT 'pending',
    order_status NVARCHAR(50) DEFAULT 'pending',
    created_at DATETIME DEFAULT GETDATE()
);

-- Admin users table
CREATE TABLE AdminUsers (
    id INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(100) UNIQUE NOT NULL,
    password_hash NVARCHAR(255) NOT NULL,
    role NVARCHAR(50) DEFAULT 'admin',
    last_login DATETIME,
    created_at DATETIME DEFAULT GETDATE()
);
```

#### Option B: MongoDB Atlas (Free Alternative)
1. MongoDB Atlas पर account बनाएं
2. Free cluster create करें
3. Connection string copy करें

### 4️⃣ Environment Variables Setup

Azure Function App में जाएं → Configuration → Application Settings में add करें:

```bash
# Database Connection
DATABASE_URL=your_database_connection_string

# Stripe Keys (Test Mode)
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx

# JWT Secret
JWT_SECRET=your_super_secret_jwt_key_here

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD_HASH=hashed_password_here

# CORS Settings
CORS_ORIGIN=https://your-static-web-app.azurestaticapps.net
```

### 5️⃣ Stripe Payment Setup

#### Step 1: Stripe Account
1. Stripe.com पर account बनाएं
2. Test mode में keys generate करें
3. Webhook endpoint setup करें: `https://watch-ecom-api.azurewebsites.net/api/payments`

#### Step 2: Test Cards
```
Test Card Number: 4242 4242 4242 4242
Expiry: Any future date
CVC: Any 3 digits
```

### 6️⃣ Domain & SSL Setup

#### Custom Domain (Optional)
1. Azure Static Web App → Custom domains
2. Domain name add करें
3. DNS records setup करें
4. SSL certificate automatically provision होगा

### 7️⃣ Testing Checklist

#### Frontend Testing
- [ ] Home page load हो रहा है
- [ ] Navigation working है
- [ ] Product details page accessible है
- [ ] Cart functionality working है
- [ ] Admin login page accessible है

#### Backend Testing  
```bash
# API endpoints test करें
curl https://watch-ecom-api.azurewebsites.net/api/main
curl https://watch-ecom-api.azurewebsites.net/api/watches
curl https://watch-ecom-api.azurewebsites.net/api/orders
```

#### Payment Testing
- [ ] Checkout page load हो रहा है
- [ ] Stripe payment form working है
- [ ] Test payment successful हो रहा है
- [ ] Order creation working है

### 8️⃣ Monitoring & Maintenance

#### Azure Monitor Setup
1. Application Insights enable करें
2. Log queries setup करें
3. Alerts configure करें for:
   - API errors
   - High response times  
   - Payment failures

#### Regular Tasks
- Database backups
- Security updates
- Performance monitoring
- Error log review

### 9️⃣ Cost Optimization

#### Free Tier Resources
- **Azure Static Web Apps**: 100GB bandwidth/month free
- **Azure Functions**: 1M requests/month free
- **Azure SQL**: Basic tier ~$5/month
- **Stripe**: 2.9% + $0.30 per transaction

#### Expected Monthly Cost: $5-15 USD

### 🆘 Troubleshooting

#### Common Issues:

1. **CORS Errors**
   - Function app में CORS settings check करें
   - Allowed origins में frontend URL add करें

2. **Database Connection Failed**
   - Connection string verify करें
   - Firewall rules check करें
   - VNet settings review करें

3. **Payment Not Working**
   - Stripe keys verify करें
   - Webhook endpoint check करें
   - Test mode enabled है या नहीं

4. **Authentication Issues**
   - JWT secret verify करें
   - Token expiration check करें
   - Admin credentials verify करें

### 📞 Support

Issues के लिए GitHub repository में issue create करें या documentation review करें।

---

## 🎯 Next Steps After Deployment

1. **Add Real Watch Data**: Admin panel से actual watches add करें
2. **Test Payment Flow**: End-to-end payment process test करें  
3. **Monitor Performance**: Azure Monitor से performance track करें
4. **SEO Optimization**: Meta tags और analytics add करें
5. **Mobile Testing**: Different devices पर test करें

**Success!** आपकी watch e-commerce website अब live है! 🎉
