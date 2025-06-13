# 🛍️ TechStore - Demo E-commerce App

**A realistic demo web application showcasing QA AI integration**

This is a comprehensive e-commerce demo that demonstrates how to integrate **QA AI** automated testing into any web application. 

## 🎯 What This Demo Shows

### **Real E-commerce Scenarios**
- 🏠 **Home page** with hero section and navigation
- 🛍️ **Product catalog** with filtering and search
- 🛒 **Shopping cart** functionality
- 👤 **User authentication** (login/register)
- 📞 **Contact forms** and validation
- 📱 **Responsive design** and accessibility

### **User Journeys QA AI Will Test**
1. **Browse Products** → Filter by category → View details
2. **Shopping Flow** → Add to cart → View cart → Checkout
3. **User Authentication** → Register → Login → Access features
4. **Search & Discovery** → Search products → Apply filters
5. **Contact & Support** → Fill contact form → Submit inquiry
6. **Navigation** → Menu clicks → Page transitions

## 🚀 QA AI Integration

This demo includes **automated QA AI testing** that runs on every push:

```yaml
# .github/workflows/qalia-demo.yml
- name: Run QA AI Analysis
  uses: floor-licker/qalia@v1
  with:
    app_url: 'http://localhost:8080'
    max_depth: 4
    frameworks: 'playwright,cypress'
    openai_api_key: ${{ secrets.OPENAI_API_KEY }}
```

### **What QA AI Will Generate**
- ✅ **Playwright tests** for modern e2e testing
- ✅ **Cypress tests** for interactive UI testing  
- ✅ **Accessibility compliance** reports
- ✅ **Performance bottleneck** analysis
- ✅ **User experience** issue detection

## 🏃‍♂️ Running Locally

### **Simple HTTP Server**
```bash
# Clone the repo
git clone https://github.com/floor-licker/demo-web-app.git
cd demo-web-app

# Start simple HTTP server
python3 -m http.server 8080

# Open browser
open http://localhost:8080
```

### **With Live Server (VSCode)**
1. Install "Live Server" extension
2. Right-click `index.html` → "Open with Live Server"

## 🎮 Interactive Features

### **Try These User Flows**
1. **Product Shopping**
   - Click "Shop Now" button
   - Filter by "Laptops", "Phones", "Tablets"
   - Click on any product card
   - Add items to cart with quantity

2. **User Account**
   - Click "Login" button
   - Try registration flow
   - Test form validations

3. **Search & Filter**
   - Click search icon
   - Search for "MacBook" or "iPhone"
   - Use category filters

4. **Contact Form**
   - Scroll to contact section
   - Fill out contact form
   - Test required field validation

## 🤖 QA AI Test Results

After QA AI runs, you'll get:

### **Generated Test Files**
```
qalia-tests/
├── playwright/
│   ├── product-browsing.spec.ts
│   ├── shopping-cart.spec.ts
│   └── user-authentication.spec.ts
├── cypress/
│   ├── product-search.cy.js
│   ├── contact-form.cy.js
│   └── navigation.cy.js
└── reports/
    ├── accessibility-report.json
    ├── performance-analysis.json
    └── ux-issues.json
```

### **AI Analysis Includes**
- 🔍 **User journey mapping** 
- 🚨 **Accessibility violations**
- ⚡ **Performance bottlenecks**
- 🐛 **Error handling gaps**
- 📊 **Coverage analysis**

## 🎯 Perfect for Demonstrating

This demo app is designed to showcase QA AI's capabilities:

### **Complex Interactions**
- Modal dialogs and overlays
- Form validation and submission
- Dynamic content loading
- State management (cart, user session)

### **Real-World Patterns**
- E-commerce user flows
- Authentication workflows
- Search and filtering
- Responsive design testing

### **Edge Cases**
- Out-of-stock products
- Empty cart scenarios
- Form validation errors
- Network error simulation

## 🚀 Deploy Your Own

### **GitHub Pages**
1. Fork this repo
2. Enable GitHub Pages in Settings
3. Add `OPENAI_API_KEY` secret
4. Push to trigger QA AI workflow

### **Netlify/Vercel**
1. Connect your GitHub repo
2. Set build command: `echo "Static site"`
3. Set publish directory: `.`
4. Add QA AI workflow

## 📈 Integration Examples

### **Basic Integration**
```yaml
- uses: floor-licker/qalia@v1
  with:
    app_url: 'https://your-demo-app.com'
    openai_api_key: ${{ secrets.OPENAI_API_KEY }}
```

### **Advanced E-commerce Testing**
```yaml
- uses: floor-licker/qalia@v1
  with:
    app_url: 'https://your-store.com'
    max_depth: 6  # Deep exploration for complex flows
    frameworks: 'playwright,cypress,jest'
    timeout: 600  # Allow time for complex interactions
```

---

**🎉 This demo shows how QA AI can automatically discover and test complex user journeys in modern web applications!**

Ready to add QA AI to your project? Check out the [Integration Guide](../INTEGRATION_GUIDE.md)! # Test trigger

## 🧪 Testing Qalia GitHub App
This change is to test the Qalia GitHub App integration.
# Final Webhook Test
Testing the complete Qalia.ai GitHub App functionality - Fri Jun 13 17:08:41 EDT 2025

This PR should trigger:
- ✅ Webhook delivery
- ✅ GitHub client authentication
- ✅ Repository cloning
- ✅ QA AI analysis using qalia.yml
- ✅ Check run creation
- ✅ PR comment posting
Testing after fixing repository cloning authentication - Fri Jun 13 17:11:01 EDT 2025
Final test with Playwright browsers and Qalia.ai branding - Fri Jun 13 19:33:50 EDT 2025
