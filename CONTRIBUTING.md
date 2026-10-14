# Contributing Guidelines

Thank you for contributing to the Fashion E-commerce Store project!

## 🌿 Branching Strategy

We follow the **Git Flow** model:

### Branch Types

#### 1. Main Branches
- **`main`** - Production code. Always stable and deployable.
- **`develop`** - Integration branch. Latest development changes.

#### 2. Feature Branches
- **Pattern:** `feature/<feature-name>`
- **Branch from:** `develop`
- **Merge into:** `develop`

```bash
git checkout develop
git pull origin develop
git checkout -b feature/add-cart-functionality
# Make changes
git push origin feature/add-cart-functionality
# Create PR to develop
```

#### 3. Hotfix Branches
- **Pattern:** `hotfix/<issue-description>`
- **Branch from:** `main`
- **Merge into:** `main` AND `develop`

```bash
git checkout main
git pull origin main
git checkout -b hotfix/fix-payment-gateway
# Fix the issue
git push origin hotfix/fix-payment-gateway
# Create PR to main
# After merge, also merge to develop
```

#### 4. Release Branches
- **Pattern:** `release/<version>`
- **Branch from:** `develop`
- **Merge into:** `main` AND `develop`

```bash
git checkout develop
git pull origin develop
git checkout -b release/1.0.0
# Final testing and bug fixes only
git push origin release/1.0.0
# Create PR to main
```

## 📝 Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, semicolons, etc.)
- **refactor**: Code refactoring
- **perf**: Performance improvements
- **test**: Adding or updating tests
- **chore**: Maintenance tasks, dependency updates
- **ci**: CI/CD changes

### Examples
```bash
feat(auth): add user registration endpoint

fix(cart): prevent duplicate items in cart

docs(readme): update setup instructions

style(frontend): format code with prettier

refactor(product): optimize database queries

test(order): add integration tests for checkout flow

chore(deps): update Spring Boot to 3.4.2
```

## 🔍 Pull Request Process

### Before Creating a PR

1. **Update your branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout your-feature-branch
   git rebase develop
   ```

2. **Run all checks**
   
   Frontend:
   ```bash
   cd frontend
   npm run lint
   npm run format:check
   npm run type-check
   npm run build
   npm test
   ```
   
   Backend:
   ```bash
   cd backend
   ./mvnw clean verify
   ```

3. **Ensure tests pass**
   - All existing tests must pass
   - Add tests for new features
   - Aim for 80%+ code coverage

### Creating a PR

1. **Title Format**
   ```
   [Type] Brief description
   ```
   Examples:
   - `[Feature] Add user authentication`
   - `[Fix] Resolve cart item duplication`
   - `[Refactor] Optimize product queries`

2. **Description Template**
   ```markdown
   ## 🎯 What
   Brief description of changes
   
   ## 🤔 Why
   Reason for changes / Problem solved
   
   ## 📋 How
   Technical approach
   
   ## ✅ Checklist
   - [ ] Tests added/updated
   - [ ] Documentation updated
   - [ ] No breaking changes
   - [ ] Backwards compatible
   
   ## 🖼️ Screenshots (if UI changes)
   
   ## 🔗 Related Issues
   Closes #123
   ```

3. **Reviewers**
   - Request at least 1 reviewer
   - Address all comments
   - Keep discussions professional

### Code Review Guidelines

#### As a Reviewer
- Be constructive and specific
- Explain the "why" behind suggestions
- Approve only when confident
- Check for:
  - Code quality and readability
  - Test coverage
  - Performance implications
  - Security concerns
  - Documentation

#### As an Author
- Respond to all comments
- Don't take feedback personally
- Ask questions if unclear
- Make requested changes promptly
- Re-request review after updates

## 🧪 Testing Requirements

### Frontend Testing
- Unit tests for utilities and helpers
- Component tests for React components
- Integration tests for user flows
- E2E tests for critical paths

### Backend Testing
- Unit tests for services
- Integration tests for repositories
- API tests for controllers
- Security tests for endpoints

### Test Coverage
- Minimum 80% coverage for new code
- 100% coverage for critical paths (auth, payments)

## 📐 Code Style

### Frontend (TypeScript/React)
- Follow ESLint configuration
- Use Prettier for formatting
- Functional components with hooks
- TypeScript strict mode
- Meaningful variable names
- Extract complex logic into hooks

```typescript
// Good
const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);
  
  const addItem = useCallback((product: Product, size: Size) => {
    // Implementation
  }, []);
  
  return { items, addItem };
};

// Bad
const cart = () => {
  let i = [];
  const add = (p, s) => {
    // Implementation
  };
};
```

### Backend (Java/Spring Boot)
- Follow Java conventions
- Use Lombok annotations appropriately
- Service layer for business logic
- DTOs for API contracts
- Proper exception handling
- Meaningful method names

```java
// Good
@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    
    public ProductDto getProductById(Long id) {
        return productRepository.findById(id)
            .map(this::toDto)
            .orElseThrow(() -> new ProductNotFoundException(id));
    }
}

// Bad
@Service
public class ProductService {
    @Autowired
    ProductRepository repo;
    
    public Product get(Long id) {
        return repo.findById(id).get();
    }
}
```

## 🔒 Security Guidelines

- Never commit secrets or API keys
- Use environment variables for configuration
- Validate all user inputs
- Sanitize data before storage
- Use parameterized queries
- Follow OWASP Top 10 guidelines
- Keep dependencies updated

## 📚 Documentation

### Code Documentation
- Add JSDoc comments for public functions (TypeScript)
- Add JavaDoc for public methods (Java)
- Document complex algorithms
- Explain "why" not just "what"

### API Documentation
- Update Swagger annotations
- Document request/response formats
- Include example requests
- Document error responses

### README Updates
- Update setup instructions if changed
- Document new features
- Update environment variables
- Keep troubleshooting section current

## 🚀 Release Process

1. **Create release branch**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout -b release/1.0.0
   ```

2. **Version bump**
   - Update `frontend/package.json`
   - Update `backend/pom.xml`
   - Update CHANGELOG.md

3. **Final testing**
   - Run full test suite
   - Manual QA testing
   - Performance testing
   - Security scan

4. **Create PR to main**
   - Title: `Release v1.0.0`
   - Include changelog
   - Tag after merge: `git tag v1.0.0`

5. **Merge back to develop**
   ```bash
   git checkout develop
   git merge main
   git push origin develop
   ```

## ❓ Questions?

- Check existing documentation first
- Search closed issues and PRs
- Ask in team chat
- Create a discussion issue for design questions

## 📜 License

By contributing, you agree that your contributions will be licensed under the project's license.

---

Thank you for contributing! 🎉
