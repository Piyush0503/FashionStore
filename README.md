# Fashion E-commerce Store

A full-stack e-commerce platform for selling Kurtis, Dresses, and Co-ord Sets to Gen-Z women in India.

## 🏗️ Tech Stack

### Frontend
- **Next.js 15** (TypeScript, App Router)
- **Tailwind CSS 4** (with custom brand styling)
- **React 19**
- **ESLint** & **Prettier**

### Backend
- **Spring Boot 3.4.2**
- **Java 21**
- **Spring Data JPA** with Flyway migrations
- **Spring Security** with JWT authentication
- **PostgreSQL 16**
- **Redis 7** for caching
- **SpringDoc OpenAPI** (Swagger)
- **Spring Actuator** for monitoring

### Infrastructure
- **Docker Compose** for local development
- **GitHub Actions** for CI/CD

## 📁 Project Structure

```
.
├── frontend/                # Next.js frontend application
│   ├── app/                # App router pages
│   ├── components/         # React components
│   ├── lib/               # Utilities, types, API clients
│   └── public/            # Static assets
│
├── backend/               # Spring Boot backend API
│   └── src/
│       ├── main/
│       │   ├── java/com/fashionstore/backend/
│       │   │   ├── config/        # Configuration classes
│       │   │   ├── controller/    # REST controllers
│       │   │   ├── model/         # JPA entities
│       │   │   ├── repository/    # Data repositories
│       │   │   └── service/       # Business logic
│       │   └── resources/
│       │       ├── application.yml         # Main config
│       │       ├── application-dev.yml     # Dev profile
│       │       ├── application-test.yml    # Test profile
│       │       ├── application-prod.yml    # Production profile
│       │       └── db/migration/          # Flyway migrations
│       └── test/
│
├── docker-compose.yml     # Docker services (PostgreSQL, Redis)
├── .github/workflows/     # CI/CD pipelines
└── PRODUCT_REQUIREMENTS.md    # Complete product specification
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ (v22 recommended)
- **Java** 21
- **Docker** & **Docker Compose**
- **Maven** 3.8+

### 1. Clone the Repository

```bash
git clone <repository-url>
cd E-commerce
```

### 2. Start Docker Services

```bash
docker-compose up -d
```

This starts:
- PostgreSQL on `localhost:5432`
- Redis on `localhost:6379`

Verify services are healthy:
```bash
docker-compose ps
```

### 3. Backend Setup

#### Create environment file
```bash
cd backend
cp .env.example .env
```

#### Run the application
```bash
# Using Maven wrapper
./mvnw spring-boot:run

# Or specify a profile
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev
```

Backend will start on `http://localhost:8080`

#### Access Swagger UI
Open http://localhost:8080/swagger-ui.html

#### Health Check
```bash
curl http://localhost:8080/api/health
```

### 4. Frontend Setup

#### Create environment file
```bash
cd frontend
cp .env.example .env.local
```

#### Install dependencies
```bash
npm install
```

#### Run development server
```bash
npm run dev
```

Frontend will start on `http://localhost:3000`

## 🧪 Running Tests

### Frontend
```bash
cd frontend
npm run lint          # Run ESLint
npm run format:check  # Check code formatting
npm run type-check    # TypeScript type checking
npm test             # Run tests (when implemented)
npm run build        # Build for production
```

### Backend
```bash
cd backend
./mvnw test                    # Run all tests
./mvnw test -Dtest=ClassName   # Run specific test
./mvnw verify                  # Run tests + integration tests
```

## 🌿 Git Branching Strategy

We follow **Git Flow** branching model:

### Main Branches
- **`main`** - Production-ready code. Protected branch.
- **`develop`** - Integration branch for features. Default branch for PRs.

### Supporting Branches

#### Feature Branches
- **Naming:** `feature/<feature-name>`
- **Branch from:** `develop`
- **Merge into:** `develop`

```bash
# Create feature branch
git checkout develop
git pull origin develop
git checkout -b feature/user-authentication

# Work on feature, commit changes
git add .
git commit -m "feat: add user authentication"

# Push and create PR
git push origin feature/user-authentication
```

#### Hotfix Branches
- **Naming:** `hotfix/<issue-name>`
- **Branch from:** `main`
- **Merge into:** `main` and `develop`

```bash
# Create hotfix branch
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug-fix

# Fix issue, commit, and merge
```

#### Release Branches
- **Naming:** `release/<version>`
- **Branch from:** `develop`
- **Merge into:** `main` and `develop`

### Branch Protection Rules

#### `main` branch:
- Require pull request reviews (minimum 1)
- Require status checks to pass (CI tests)
- No direct commits allowed
- Enforce linear history

#### `develop` branch:
- Require pull request reviews
- Require CI checks to pass
- Allow squash merging

## 🔧 Environment Variables

### Backend (.env)
```env
SPRING_PROFILES_ACTIVE=dev
DATABASE_URL=jdbc:postgresql://localhost:5432/fashionstore
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-256-bit-secret-key
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## 🔒 Spring Profiles

### Development (`dev`)
- Debug logging enabled
- SQL query logging
- Swagger UI enabled
- Hot reload
- Error details in responses

### Test (`test`)
- In-memory test database
- Flyway disabled
- Minimal logging
- Swagger disabled

### Production (`prod`)
- Error details hidden
- Minimal logging
- Connection pooling optimized
- Flyway migrations enforced
- Swagger disabled by default

Set profile:
```bash
# Via Maven
./mvnw spring-boot:run -Dspring-boot.run.profiles=prod

# Via environment variable
export SPRING_PROFILES_ACTIVE=prod
./mvnw spring-boot:run

# Via Docker
docker run -e SPRING_PROFILES_ACTIVE=prod myapp
```

## 📊 Database Management

### Flyway Migrations

Migrations are in `backend/src/main/resources/db/migration/`

```bash
# Apply migrations
./mvnw flyway:migrate

# Check migration status
./mvnw flyway:info

# Validate migrations
./mvnw flyway:validate

# Clean database (dev only!)
./mvnw flyway:clean
```

### Manual Database Access

```bash
# Connect to PostgreSQL
docker exec -it fashionstore-postgres psql -U postgres -d fashionstore

# Common commands
\dt          # List tables
\d+ users    # Describe users table
\q           # Quit
```

## 🎨 Brand Guidelines

### Colors
- **Cream** `#FFF7F0` - Primary background
- **Ink** `#17141F` - Primary text
- **Pink** `#FF4F8B` - Primary CTA
- **Lilac** `#B8A1FF` - Secondary accents
- **Mint** `#8FF0C8` - Success states
- **Yellow** `#FFE45E` - Highlights, sale badges

### Typography
- **Syne** - Headings, buttons (600, 700, 800)
- **DM Sans** - Body text (400, 500, 700)

## 📝 API Documentation

Once the backend is running, access:
- **Swagger UI:** http://localhost:8080/swagger-ui.html
- **OpenAPI JSON:** http://localhost:8080/api-docs

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if ports are in use
lsof -i :8080
lsof -i :5432

# Check Docker services
docker-compose ps
docker-compose logs postgres
docker-compose logs redis

# Restart services
docker-compose restart
```

### Frontend build issues
```bash
# Clear Next.js cache
rm -rf frontend/.next
rm -rf frontend/node_modules
npm install
```

### Database issues
```bash
# Reset database
docker-compose down -v
docker-compose up -d
# Wait for health checks, then restart backend
```

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Ensure tests pass: `npm test` and `./mvnw test`
4. Ensure code is formatted: `npm run format` and `./mvnw spotless:check`
5. Push your branch and create a Pull Request to `develop`
6. Wait for CI checks and code review

## 📄 License

Private project - All rights reserved

## 👥 Team

For questions or issues, contact the development team.

---

**Last Updated:** 2026-10-14
