# Quick Start Guide

Get the Fashion Store up and running in 5 minutes!

## Prerequisites

✅ **Node.js 22+** - [Download](https://nodejs.org/)  
✅ **Java 21** - [Download](https://adoptium.net/)  
✅ **Docker Desktop** - [Download](https://www.docker.com/products/docker-desktop/)

## 🚀 Quick Setup

### 1. Clone & Navigate
```bash
git clone <repository-url>
cd E-commerce
```

### 2. Start Services
```bash
# Automatically start PostgreSQL & Redis
./start-dev.sh

# Or manually:
docker-compose up -d
```

### 3. Backend Setup
```bash
cd backend
cp .env.example .env
./mvnw spring-boot:run
```
✅ Backend running on http://localhost:8080

### 4. Frontend Setup
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```
✅ Frontend running on http://localhost:3000

## 🎯 Verify Everything Works

### Check Services
```bash
# PostgreSQL
docker exec -it fashionstore-postgres psql -U postgres -c "SELECT version();"

# Redis
docker exec -it fashionstore-redis redis-cli ping
```

### Test Backend
```bash
# Health check
curl http://localhost:8080/api/health

# Swagger UI
open http://localhost:8080/swagger-ui.html
```

### Test Frontend
```bash
# Open browser
open http://localhost:3000
```

## 🛠️ Common Commands

### Docker
```bash
docker-compose up -d              # Start services
docker-compose ps                 # Check status
docker-compose logs postgres      # View logs
docker-compose down               # Stop services
docker-compose down -v            # Stop & remove volumes
```

### Backend
```bash
cd backend
./mvnw spring-boot:run            # Run app
./mvnw clean install              # Build
./mvnw test                       # Run tests
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev  # Run with profile
```

### Frontend
```bash
cd frontend
npm run dev                       # Development server
npm run build                     # Production build
npm run lint                      # Lint code
npm run format                    # Format code
npm test                          # Run tests
```

## 📝 Development Workflow

### 1. Create Feature Branch
```bash
git checkout develop
git pull origin develop
git checkout -b feature/my-feature
```

### 2. Make Changes
- Edit code
- Add tests
- Commit frequently

### 3. Before Pushing
```bash
# Frontend checks
cd frontend
npm run lint
npm run format:check
npm run type-check
npm run build

# Backend checks
cd backend
./mvnw clean verify
```

### 4. Create Pull Request
```bash
git push origin feature/my-feature
# Then create PR on GitHub to 'develop' branch
```

## 🔑 Important URLs

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | User interface |
| Backend API | http://localhost:8080/api | REST API |
| Swagger UI | http://localhost:8080/swagger-ui.html | API documentation |
| Health Check | http://localhost:8080/api/health | Service health |
| Actuator | http://localhost:8080/actuator | Monitoring endpoints |

## 🗄️ Database Access

### PostgreSQL
```bash
# Connect via Docker
docker exec -it fashionstore-postgres psql -U postgres -d fashionstore

# Common commands
\dt                    # List tables
\d+ users             # Describe users table
SELECT * FROM users;  # Query data
\q                    # Quit
```

### Redis
```bash
# Connect via Docker
docker exec -it fashionstore-redis redis-cli

# Common commands
PING                  # Test connection
KEYS *                # List all keys
GET key               # Get value
FLUSHALL              # Clear all data (careful!)
EXIT                  # Quit
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Check what's using the port
lsof -i :8080         # Backend
lsof -i :3000         # Frontend
lsof -i :5432         # PostgreSQL
lsof -i :6379         # Redis

# Kill process
kill -9 <PID>
```

### Docker Issues
```bash
# Restart Docker
docker-compose restart

# Clean rebuild
docker-compose down -v
docker-compose up -d --build

# Check logs
docker-compose logs -f
```

### Backend Won't Start
```bash
# Check Java version
java -version  # Should be 21

# Clean Maven cache
./mvnw clean

# Check database connection
docker-compose ps postgres
```

### Frontend Issues
```bash
# Clear Next.js cache
rm -rf .next node_modules
npm install
npm run dev

# Check Node version
node --version  # Should be 22+
```

### Database Connection Error
```bash
# Ensure PostgreSQL is running
docker-compose ps

# Check database exists
docker exec -it fashionstore-postgres psql -U postgres -l

# Recreate database
docker-compose down -v
docker-compose up -d
```

## 🔒 Default Credentials

### PostgreSQL
- **Host:** localhost
- **Port:** 5432
- **Database:** fashionstore
- **Username:** postgres
- **Password:** postgres

### Redis
- **Host:** localhost
- **Port:** 6379
- **Password:** (none)

## 📚 Next Steps

1. ✅ Read [PRODUCT_REQUIREMENTS.md](./PRODUCT_REQUIREMENTS.md) - Product specification
2. ✅ Read [ARCHITECTURE.md](./ARCHITECTURE.md) - System architecture
3. ✅ Read [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
4. ✅ Check [README.md](./README.md) - Complete documentation

## 🆘 Getting Help

1. Check existing documentation
2. Search [Issues](https://github.com/your-repo/issues)
3. Ask in team chat
4. Create a new issue

## 🎉 You're Ready!

Start building amazing features! 🚀

---

**Pro Tips:**
- Run `./start-dev.sh` to set up everything automatically
- Use `docker-compose logs -f <service>` to debug issues
- Keep your `develop` branch up to date
- Run tests before every commit
- Use meaningful commit messages
