#!/bin/bash

echo "🚀 Starting Fashion Store Development Environment"
echo ""

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

# Start Docker services
echo "📦 Starting PostgreSQL and Redis..."
docker-compose up -d

# Wait for services to be healthy
echo "⏳ Waiting for services to be healthy..."
sleep 5

# Check if services are healthy
if docker-compose ps | grep -q "unhealthy"; then
    echo "❌ Some services are unhealthy. Check with 'docker-compose ps'"
    exit 1
fi

echo "✅ Docker services are running"
echo ""

# Check if backend .env exists
if [ ! -f backend/.env ]; then
    echo "📝 Creating backend/.env from .env.example"
    cp backend/.env.example backend/.env
fi

# Check if frontend .env.local exists
if [ ! -f frontend/.env.local ]; then
    echo "📝 Creating frontend/.env.local from .env.example"
    cp frontend/.env.example frontend/.env.local
fi

echo ""
echo "🎉 Development environment is ready!"
echo ""
echo "Next steps:"
echo "1. Start backend:  cd backend && ./mvnw spring-boot:run"
echo "2. Start frontend: cd frontend && npm run dev"
echo ""
echo "URLs:"
echo "- Frontend:    http://localhost:3000"
echo "- Backend API: http://localhost:8080/api"
echo "- Swagger UI:  http://localhost:8080/swagger-ui.html"
echo "- Health:      http://localhost:8080/api/health"
echo ""
echo "To stop services: docker-compose down"
