# Fashion E-commerce Store

A full-stack e-commerce platform for selling Kurtis, Dresses, and Co-ord Sets to Gen-Z women in India.

## Tech Stack

### Frontend
- **Next.js 15** (TypeScript, App Router)
- **Tailwind CSS 4** (with custom brand styling)
- **React 19**

### Backend
- **Spring Boot 3.4.2**
- **Java 17**
- **Spring Data JPA**
- **Spring Security** with JWT authentication
- **PostgreSQL 16**

## Project Structure

```
.
├── frontend/                # Next.js frontend application
│   ├── app/                # App router pages
│   ├── components/         # React components (to be created)
│   ├── lib/               # Utilities, types, API clients
│   └── public/            # Static assets
│
├── backend/               # Spring Boot backend API
│   └── src/
│       └── main/
│           ├── java/com/fashionstore/backend/
│           │   ├── model/         # JPA entities
│           │   ├── repository/    # Data repositories
│           │   ├── service/       # Business logic (to be created)
│           │   ├── controller/    # REST controllers (to be created)
│           │   ├── config/        # Configuration (to be created)
│           │   └── dto/           # Data transfer objects (to be created)
│           └── resources/
│               └── application.yml
│
└── PRODUCT_REQUIREMENTS.md    # Complete product specification
```

## Features Implemented

### Backend Models
✅ User (Customer & Admin roles)
✅ Product (with variants for sizes)
✅ Order (with guest checkout support)
✅ OrderItem
✅ Address
✅ ReturnRequest
✅ Repositories for all entities

### Frontend Setup
✅ Brand styling (colors, fonts, buttons, badges)
✅ TypeScript types for all entities
✅ API client utilities
✅ Cart management utilities
✅ Helper functions (formatting, validation)

## Setup Instructions

### Prerequisites
- Node.js 18+ (v22 recommended)
- Java 17+
- PostgreSQL 16
- Maven 3+

### Database Setup

1. Install and start PostgreSQL
2. Create database:
```sql
CREATE DATABASE fashionstore;
CREATE USER postgres WITH PASSWORD 'postgres';
GRANT ALL PRIVILEGES ON DATABASE fashionstore TO postgres;
```

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Update database credentials in `src/main/resources/application.yml` if needed

3. Build and run:
```bash
./mvnw clean install
./mvnw spring-boot:run
```

Backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file (already created with defaults):
```
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

4. Run development server:
```bash
npm run dev
```

Frontend will start on `http://localhost:3000`

## Brand Guidelines

### Colors
- **Cream** (#FFF7F0) - Primary background
- **Ink** (#17141F) - Primary text
- **Pink** (#FF4F8B) - Primary CTA, accents
- **Lilac** (#B8A1FF) - Secondary accents
- **Mint** (#8FF0C8) - Success states
- **Yellow** (#FFE45E) - Highlights, sale badges

### Typography
- **Syne** - Headings, buttons (weights: 600, 700, 800)
- **DM Sans** - Body text (weights: 400, 500, 700)

### Components
- Buttons with offset shadow (sticker effect)
- Rounded corners (8px buttons, 12px cards, 16px badges)
- 8px spacing system

## Next Steps

### Backend (To Implement)
- [ ] JWT authentication configuration
- [ ] User service and controller
- [ ] Product service and controller with filtering
- [ ] Order service and controller
- [ ] Return service and controller
- [ ] File upload for product images
- [ ] Email service for notifications
- [ ] Razorpay payment integration
- [ ] Admin controllers
- [ ] Exception handling
- [ ] CORS configuration

### Frontend (To Implement)
- [ ] Layout components (Header, Footer)
- [ ] Home page
- [ ] Shop page with filters
- [ ] Product detail page
- [ ] Cart page
- [ ] Checkout flow
- [ ] Authentication pages
- [ ] User account pages
- [ ] Admin dashboard
- [ ] Admin product management
- [ ] Admin order management
- [ ] Admin return management
- [ ] State management (Context API or Zustand)
- [ ] Image optimization
- [ ] SEO optimization

## API Endpoints (Planned)

### Public
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/products` - List products with filters
- `GET /api/products/{id}` - Get product details
- `GET /api/products/search` - Search products
- `GET /api/products/featured` - Featured products

### Authenticated
- `GET /api/auth/me` - Get current user
- `POST /api/orders` - Create order
- `GET /api/orders/user` - Get user orders
- `GET /api/orders/{id}` - Get order details
- `POST /api/returns` - Create return request
- `GET /api/addresses` - Get user addresses
- `POST /api/addresses` - Add address

### Admin
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/{id}` - Update product
- `DELETE /api/admin/products/{id}` - Delete product
- `GET /api/admin/orders` - List all orders
- `PATCH /api/admin/orders/{id}/status` - Update order status
- `GET /api/admin/returns` - List return requests
- `PATCH /api/admin/returns/{id}/status` - Update return status
- `GET /api/admin/dashboard` - Dashboard analytics

## Database Schema

See models in `backend/src/main/java/com/fashionstore/backend/model/`:
- User
- Product
- ProductVariant
- Address
- Order
- OrderItem
- ReturnRequest

## License

Private project - All rights reserved

## Contact

For questions or issues, contact the development team.
