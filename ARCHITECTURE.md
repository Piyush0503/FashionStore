# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         User Devices                             │
│                    (Mobile-first, Desktop)                       │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ HTTPS
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Frontend Layer                              │
│                    Next.js 15 (React 19)                         │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │  - App Router (Pages & Layouts)                          │  │
│   │  - TypeScript (Type Safety)                              │  │
│   │  - Tailwind CSS (Brand Styling)                          │  │
│   │  - API Client (HTTP Requests)                            │  │
│   │  - State Management (Cart, Auth)                         │  │
│   └──────────────────────────────────────────────────────────┘  │
│                    Port: 3000                                    │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         │ REST API / JSON
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Backend Layer                               │
│                    Spring Boot 3.4.2                             │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │  Controllers (REST Endpoints)                            │  │
│   │       │                                                   │  │
│   │       ├─> Services (Business Logic)                      │  │
│   │       │        │                                          │  │
│   │       │        ├─> Repositories (Data Access)            │  │
│   │       │        │                                          │  │
│   │       │        └─> Models (JPA Entities)                 │  │
│   │       │                                                   │  │
│   │       └─> Security (JWT, Auth)                           │  │
│   └──────────────────────────────────────────────────────────┘  │
│                    Port: 8080                                    │
└────────┬────────────────────────────────┬───────────────────────┘
         │                                │
         │ JDBC                           │ Redis Protocol
         ▼                                ▼
┌──────────────────────┐      ┌────────────────────────┐
│   PostgreSQL 16      │      │      Redis 7           │
│                      │      │                        │
│  - Users             │      │  - Session Cache       │
│  - Products          │      │  - Rate Limiting       │
│  - Orders            │      │  - Temp Data           │
│  - Returns           │      │                        │
│                      │      │                        │
│  Port: 5432          │      │  Port: 6379            │
└──────────────────────┘      └────────────────────────┘
```

## Technology Stack

### Frontend
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Next.js 15 | React framework with SSR/SSG |
| Language | TypeScript | Type-safe JavaScript |
| Styling | Tailwind CSS 4 | Utility-first CSS framework |
| State | React Hooks | Local state management |
| API Client | Fetch API | HTTP requests to backend |
| Routing | App Router | File-based routing |

### Backend
| Layer | Technology | Purpose |
|-------|-----------|---------|
| Framework | Spring Boot 3.4.2 | Enterprise Java framework |
| Language | Java 21 | Modern Java with LTS |
| ORM | Spring Data JPA | Database abstraction |
| Security | Spring Security | Authentication & Authorization |
| Auth | JWT | Stateless authentication |
| Validation | Bean Validation | Input validation |
| API Docs | SpringDoc OpenAPI | Interactive API documentation |
| Build | Maven | Dependency management |

### Database
| Technology | Version | Purpose |
|-----------|---------|---------|
| PostgreSQL | 16 | Primary relational database |
| Redis | 7 | Caching and session storage |
| Flyway | Latest | Database migration management |

### DevOps
| Tool | Purpose |
|------|---------|
| Docker Compose | Local development environment |
| GitHub Actions | CI/CD pipeline |
| Maven Wrapper | Consistent Maven version |

## Data Flow

### User Authentication Flow
```
User → Frontend (Login Form)
  ↓
  POST /api/auth/login
  ↓
Backend (Security Layer)
  ↓
Validate Credentials (Database)
  ↓
Generate JWT Token
  ↓
Response → Frontend
  ↓
Store Token (localStorage)
  ↓
Include in subsequent requests (Authorization header)
```

### Product Purchase Flow
```
1. Browse Products
   Frontend → GET /api/products → Backend → PostgreSQL

2. Add to Cart
   Frontend → localStorage (client-side)

3. Checkout
   Frontend → POST /api/orders → Backend
     ↓
   Validate Stock → PostgreSQL
     ↓
   Create Order → PostgreSQL
     ↓
   Initiate Payment → Razorpay Gateway
     ↓
   Update Order Status → PostgreSQL
     ↓
   Send Email Notification
     ↓
   Response → Frontend

4. Order Confirmation
   Frontend displays confirmation
```

## Security Architecture

### Authentication
- JWT-based stateless authentication
- Tokens stored in localStorage (frontend)
- Token validated on each API request
- Refresh tokens for extended sessions

### Authorization
```
User Roles:
  - CUSTOMER: Browse, purchase, view own orders
  - ADMIN: All customer actions + manage products, orders, returns

Protected Endpoints:
  - /api/admin/** → Requires ADMIN role
  - /api/orders/user → Requires authentication
  - /api/returns → Requires authentication
  
Public Endpoints:
  - /api/products/** → No authentication
  - /api/auth/login → No authentication
  - /api/auth/register → No authentication
  - /api/health → No authentication
```

### Data Security
- Passwords hashed with BCrypt
- SQL injection prevention (Parameterized queries)
- XSS prevention (Input sanitization)
- CSRF protection (Spring Security)
- HTTPS in production
- Rate limiting (Redis)

## Database Schema

### Core Tables
```
users
  ├─ addresses (one-to-many)
  └─ orders (one-to-many)

products
  ├─ product_variants (one-to-many)
  ├─ product_images (one-to-many)
  └─ product_tags (one-to-many)

orders
  ├─ order_items (one-to-many)
  └─ return_requests (one-to-many)
```

### Relationships
- User → Orders (1:N)
- User → Addresses (1:N)
- Product → Variants (1:N)
- Order → OrderItems (1:N)
- Order → ReturnRequests (1:N)

## API Architecture

### REST Principles
- Stateless communication
- Resource-based URLs
- HTTP methods: GET, POST, PUT, PATCH, DELETE
- JSON request/response format
- Standard HTTP status codes

### Endpoint Structure
```
/api/auth/*          - Authentication endpoints
/api/products/*      - Product catalog (public)
/api/orders/*        - Order management
/api/returns/*       - Return requests
/api/admin/*         - Admin operations (protected)
/api/health          - Health check
```

### Response Format
```json
{
  "data": { ... },
  "message": "Success message",
  "success": true
}
```

### Error Format
```json
{
  "timestamp": "2026-10-14T10:30:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Validation failed",
  "path": "/api/orders"
}
```

## Deployment Architecture

### Development
```
Developer Machine
  ├─ Docker (PostgreSQL, Redis)
  ├─ Backend (localhost:8080)
  └─ Frontend (localhost:3000)
```

### Production (Future)
```
Load Balancer
  ├─ Frontend (Vercel/Netlify)
  └─ Backend (AWS/GCP/Azure)
      ├─ Application Servers (Auto-scaling)
      ├─ PostgreSQL (Managed RDS)
      ├─ Redis (Managed Cache)
      └─ S3/Cloud Storage (Product images)
```

## Performance Considerations

### Frontend
- Code splitting (Next.js automatic)
- Image optimization (Next.js Image component)
- Lazy loading components
- Static page generation for product listings
- Client-side caching for product data

### Backend
- Database connection pooling (HikariCP)
- Query optimization with indexes
- Redis caching for frequent reads
- Pagination for large datasets
- Async processing for emails

### Database
- Indexes on foreign keys
- Indexes on frequently queried columns
- Connection pooling
- Query optimization
- Regular vacuum and analyze

## Scalability

### Horizontal Scaling
- Stateless backend (JWT auth)
- Load balancer for multiple backend instances
- Separate read replicas for PostgreSQL
- Redis cluster for distributed caching

### Vertical Scaling
- Increase container resources
- Optimize database queries
- Add more database connections
- Increase Redis memory

## Monitoring & Logging

### Application Monitoring
- Spring Actuator endpoints
- Health checks
- Metrics collection
- Log aggregation

### Error Tracking
- Centralized logging (future)
- Error monitoring service (future)
- Performance monitoring (future)

## Future Enhancements

### Technical
- [ ] Implement event-driven architecture (RabbitMQ/Kafka)
- [ ] Add Elasticsearch for product search
- [ ] Implement WebSockets for real-time updates
- [ ] Add GraphQL API layer
- [ ] Implement microservices architecture

### Infrastructure
- [ ] Kubernetes deployment
- [ ] CI/CD pipeline improvements
- [ ] Automated testing infrastructure
- [ ] Staging environment
- [ ] Monitoring and alerting system

---

**Last Updated:** 2026-10-14
