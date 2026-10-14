# Product Requirements Document
**Fashion E-commerce Store for Gen-Z Women**

Tech Stack: Next.js 15 (TypeScript, App Router) · Spring Boot 3 (Java 21) · PostgreSQL 16  
Target: Gen-Z women in India · Mobile-first design

---

## 1. Feature Priority

### Must-Have (MVP)
- Product catalog with filtering (category, size, price)
- Product detail page with image gallery and size selection
- Shopping cart with quantity management
- Guest and registered checkout
- Order confirmation and email notifications
- User registration and login
- Order history for registered users
- Return request submission
- Admin: Product management (add, edit, delete, stock)
- Admin: Order management (view, update status)
- Admin: Basic analytics dashboard
- Search functionality
- Mobile-responsive design
- Payment gateway integration (Razorpay)

### Later (Post-MVP)
- Wishlist
- Product reviews and ratings
- Size recommendation quiz
- Virtual try-on
- Social login (Google, Instagram)
- Loyalty program
- Live chat support
- Push notifications
- Advanced filters (color, occasion, fabric)
- Admin: Customer management
- Admin: Bulk product upload
- Referral program
- Gift cards
- Pre-order capability
- Size alerts (notify when back in stock)

---

## 2. Sitemap

```
Home
│
├── Shop
│   ├── Kurtis
│   ├── Dresses
│   └── Co-ord Sets
│
├── Product Detail
│   └── [Product ID]
│
├── Cart
│
├── Checkout
│   ├── Shipping Info
│   ├── Payment
│   └── Order Confirmation
│
├── Account (Registered Users)
│   ├── Login / Sign Up
│   ├── Profile
│   ├── Orders
│   │   └── Order Detail
│   │       └── Return Request
│   └── Addresses
│
├── Pages
│   ├── About
│   ├── Size Chart
│   ├── Shipping & Returns
│   ├── Privacy Policy
│   └── Terms & Conditions
│
└── Admin (Protected)
    ├── Dashboard
    ├── Products
    │   ├── Product List
    │   ├── Add Product
    │   └── Edit Product
    ├── Orders
    │   └── Order Detail
    └── Returns
        └── Return Detail
```

---

## 3. User Journeys

### Journey 1: Browse and Buy
1. User opens the app on mobile
2. Sees hero banner with new arrivals
3. Scrolls through featured products
4. Taps "Shop Dresses" category card
5. Views grid of dress products with filters collapsed
6. Taps filter icon, selects size "M" and price range "₹1000-₹2000"
7. Applies filters, sees filtered results
8. Taps on a pink floral dress thumbnail
9. Views product detail with image carousel
10. Swipes through 4 product images
11. Selects size "M" from dropdown
12. Taps "Add to Cart" button
13. Cart badge updates to show "1"
14. Taps cart icon in header
15. Reviews cart showing 1 item, subtotal ₹1,499
16. Taps "Proceed to Checkout"
17. Chooses "Continue as Guest"
18. Fills shipping form (name, phone, address, pin code)
19. Taps "Continue to Payment"
20. Reviews order summary
21. Selects "UPI" payment method
22. Taps "Place Order"
23. Redirected to Razorpay
24. Completes UPI payment
25. Returns to app, sees order confirmation with order ID
26. Receives confirmation email

### Journey 2: Return an Item
1. User logs into their account
2. Taps "My Orders" from account menu
3. Views list of past orders
4. Taps on order #12345 placed 5 days ago
5. Sees order detail with 1 dress
6. Taps "Request Return" button
7. Views return policy reminder (7-day window)
8. Selects return reason from dropdown: "Size too small"
9. Types additional comment: "Need size L instead"
10. Uploads 2 photos of the product
11. Reviews return summary
12. Taps "Submit Return Request"
13. Sees success message with return request ID
14. Returns to order detail, status shows "Return Pending"
15. Receives email confirmation of return request

### Journey 3: Admin Adds a Product
1. Admin logs into admin dashboard
2. Sees overview: 145 products, 23 pending orders, 5 returns
3. Clicks "Products" in sidebar navigation
4. Views product list table with search and filters
5. Clicks "Add New Product" button
6. Fills product form:
   - Name: "Sunshine Yellow Co-ord Set"
   - Category: Co-ord Sets (dropdown)
   - Description: Multi-line text
   - Price: ₹2,499
   - SKU: CCS-001
7. Uploads 5 product images (drag and drop)
8. Reorders images by dragging thumbnails
9. Sets size inventory:
   - XS: 10 units
   - S: 15 units
   - M: 20 units
   - L: 15 units
   - XL: 10 units
10. Adds tags: summer, casual, yellow
11. Sets product as "Active"
12. Clicks "Save & Publish"
13. Sees success notification
14. Product appears in product list
15. Opens storefront in new tab to verify product is live

---

## 4. Brand Kit

### Color Tokens
```
cream:  #FFF7F0  // Primary background
ink:    #17141F  // Primary text, headers
pink:   #FF4F8B  // Primary CTA, accents
lilac:  #B8A1FF  // Secondary accents, hover states
mint:   #8FF0C8  // Success states, badges
yellow: #FFE45E  // Highlights, sale badges
```

**Usage Guidelines:**
- Background: cream
- Body text: ink at 80% opacity
- Headings: ink at 100%
- Primary buttons: pink background, cream text
- Secondary buttons: cream background, ink text, ink border
- Links: pink, underline on hover
- Success messages: mint background, ink text
- Sale badges: yellow background, ink text

### Typography
**Primary Font: Syne**
- Use for: Headings, buttons, navigation, price labels
- Weights: 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold)
- Sizes:
  - H1: 32px mobile / 48px desktop
  - H2: 24px mobile / 36px desktop
  - H3: 20px mobile / 28px desktop
  - Button: 16px all devices

**Secondary Font: DM Sans**
- Use for: Body text, form labels, descriptions
- Weights: 400 (Regular), 500 (Medium), 700 (Bold)
- Sizes:
  - Body: 16px mobile / 18px desktop
  - Small: 14px mobile / 16px desktop
  - Caption: 12px mobile / 14px desktop

### Sticker Badge Style
- Background: yellow for sale, mint for new, lilac for trending
- Border: 2px solid ink
- Border-radius: 16px (full pill)
- Padding: 4px 12px
- Font: Syne 700, 12px, uppercase
- Text color: ink
- Shadow: 2px 2px 0px ink (offset shadow for sticker effect)
- Rotation: -2deg to 2deg random tilt

### Button Style
**Primary Button**
- Background: pink
- Text: cream, Syne 600, 16px
- Border-radius: 8px
- Padding: 16px 32px mobile / 18px 40px desktop
- Border: 2px solid ink
- Shadow: 3px 3px 0px ink
- Hover: background lilac, shadow 2px 2px 0px ink
- Active: translate(2px, 2px), shadow 1px 1px 0px ink

**Secondary Button**
- Background: cream
- Text: ink, Syne 600, 16px
- Border-radius: 8px
- Padding: 16px 32px mobile / 18px 40px desktop
- Border: 2px solid ink
- Shadow: 3px 3px 0px ink
- Hover: background pink, text cream

**Text Button**
- Background: transparent
- Text: pink, Syne 600, 16px, underline on hover
- No border, no shadow

### Border Radius Rules
- Buttons: 8px
- Cards: 12px
- Input fields: 8px
- Badges: 16px (full pill)
- Modals: 16px
- Product images: 12px

### Spacing System (8px base)
- 2xs: 4px
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px

**Mobile Padding:**
- Page edges: 16px
- Section vertical: 32px
- Card internal: 16px

**Desktop Padding:**
- Page edges: 24px (or use container max-width 1280px)
- Section vertical: 64px
- Card internal: 24px

---

## 5. Text Wireframes

### Home Page

**MOBILE**
```
[Header - sticky]
- Logo (left) | Search icon | Cart badge icon (right)

[Hero Section - full width]
- Large image (4:5 ratio)
- Overlay text: "New Arrivals"
- Subtext: "Fresh fits for your vibe"
- CTA Button: "Shop Now"

[Category Cards - 3 cards, vertical scroll]
Card 1: Image (square crop) + "Kurtis"
Card 2: Image (square crop) + "Dresses"
Card 3: Image (square crop) + "Co-ord Sets"

[Featured Products]
- Section heading: "Trending Now"
- Product grid: 2 columns
  Each card:
  - Product image (4:5 ratio, 12px radius)
  - NEW badge (if applicable, top-left corner)
  - Product name (2 lines max, ellipsis)
  - Price: ₹1,299 (Syne 700)
  - Quick add heart icon (top-right)

[USP Banner]
- 3 icons with text, stacked vertically
  - "Free Shipping Over ₹999"
  - "7-Day Easy Returns"
  - "100% Secure Payments"

[Footer]
- About link
- Size Chart link
- Shipping & Returns link
- Privacy Policy link
- Instagram icon | WhatsApp icon
- © 2026 [Brand Name]
```

**DESKTOP**
```
[Header - sticky, cream background]
- Logo (left) | Navigation: Home, Kurtis, Dresses, Co-ord Sets | Search bar | Account icon | Cart badge icon (right)

[Hero Section - full width, max height 600px]
- Large image (background)
- Centered overlay text: "New Arrivals" (H1)
- Subtext: "Fresh fits for your vibe"
- CTA Button: "Shop Now"

[Category Cards - 3 cards, horizontal row, equal width]
Card 1: Image (16:9 crop) + "Kurtis" overlay
Card 2: Image (16:9 crop) + "Dresses" overlay
Card 3: Image (16:9 crop) + "Co-ord Sets" overlay

[Featured Products]
- Section heading: "Trending Now" (centered)
- Product grid: 4 columns
  Each card: (same as mobile, larger hover effect)
  - Hover: scale 1.02, shadow grows

[USP Banner]
- 3 icons with text, horizontal row
- Icons centered, text below

[Footer - 4 columns]
- Col 1: About, Contact
- Col 2: Size Chart, Shipping, Returns
- Col 3: Privacy, Terms
- Col 4: Social icons
- Bottom: © 2026 [Brand Name]
```

---

### Shop Page (Category: Dresses)

**MOBILE**
```
[Header - same as Home]

[Page Title]
- "Dresses" (H1)
- Product count: "24 products"

[Filter & Sort Bar - sticky below header]
- Filter button (left) | Sort dropdown (right)

[Product Grid - 2 columns]
- Each product card (same as Home featured products)
- Infinite scroll or "Load More" button at bottom

[Filter Drawer - slides from left when filter tapped]
- Close icon (top-right)
- "Filters" heading
- Size checkboxes: XS, S, M, L, XL
- Price range slider: ₹500 - ₹5000
- Availability toggle: In Stock Only
- Clear All button
- Apply button (sticky at bottom, primary style)
```

**DESKTOP**
```
[Header - same as Home]

[Breadcrumb]
- Home > Dresses

[Content Layout - 2 columns]

Left Sidebar (25% width, sticky):
- "Filters" heading
- Size checkboxes: XS, S, M, L, XL
- Price range slider
- Availability toggle
- Clear All button

Main Content (75% width):
- Top bar:
  - "Dresses" (H1) | Product count: "24 products" (right)
  - Sort dropdown (right)
- Product grid: 3 columns
- Pagination at bottom: < 1 2 3 >
```

---

### Product Detail Page

**MOBILE**
```
[Header - back arrow (left) | Cart badge icon (right)]

[Product Images - full width carousel]
- Main image (4:5 ratio)
- Swipeable with dot indicators
- Image counter: "1 / 5" (top-right corner)

[Product Info Section]
- Product name (H2, 2 lines)
- Price: ₹1,499 (Syne 700, large)
- Star rating: ★★★★☆ (12 reviews) - link to reviews
- Color: Pink (with color swatch)
- Size selector: Dropdown with XS, S, M, L, XL
- "Size Chart" link (opens modal)
- Stock status: "Only 3 left!" (yellow badge) or "In Stock" (mint badge)
- Quantity selector: - [1] +
- Primary button: "Add to Cart"
- Secondary button: "Buy Now"

[Product Details - accordion]
- Description (expanded by default)
  - Full text content
- Material & Care (collapsed)
  - Fabric details
  - Wash care instructions
- Delivery & Returns (collapsed)
  - Expected delivery date
  - Return policy link

[Reviews Section]
- "Customer Reviews" heading
- Review cards (first 3 shown)
  Each card:
  - Star rating | Name | Date
  - Review text (3 lines max)
- "View All Reviews" button

[You May Also Like]
- Horizontal scroll, 1.5 cards visible
- Product cards (same style as grid)
```

**DESKTOP**
```
[Header - same as Home]

[Breadcrumb]
- Home > Dresses > [Product Name]

[Content Layout - 2 columns, 50/50]

Left Column:
- Main image (large, 4:5 ratio)
- Thumbnail strip below (5 thumbnails, click to change main)
- Zoom on hover

Right Column (sticky):
- Product name (H1)
- Price: ₹1,499
- Star rating: ★★★★☆ (12 reviews)
- Color: Pink (color swatch)
- Size selector: Button group (XS, S, M, L, XL)
- "Size Chart" link
- Stock status badge
- Quantity selector
- Primary button: "Add to Cart"
- Secondary button: "Buy Now"
- Tabs: Description | Material & Care | Delivery
  - Tab content shows inline

[Below main section - full width]
- Customer Reviews (first 6 in 2 columns)
- "Load More Reviews" button

[You May Also Like]
- 4 columns product grid
```

---

### Cart Page

**MOBILE**
```
[Header - back arrow (left) | "Cart (2)" title center]

[Cart Items List]
Each item card:
- Product image (small, 1:1 ratio, left)
- Product name (truncated, 2 lines)
- Size: M | Color: Pink
- Price: ₹1,499
- Quantity selector: - [1] +
- Remove icon (top-right of card)
- Divider line

[Empty Cart State - if no items]
- Illustration or icon
- "Your cart is empty"
- "Start Shopping" button

[Cart Summary - sticky at bottom]
- Subtotal: ₹2,998
- Shipping: FREE (or calculated at checkout)
- Estimated Total: ₹2,998 (large, bold)
- Primary button: "Proceed to Checkout"
- "Continue Shopping" text link

[Recommendations - above summary]
- "Complete Your Look" heading
- Horizontal scroll, product cards
```

**DESKTOP**
```
[Header - same as Home]

[Page Title]
- "Shopping Cart" (H1)

[Content Layout - 2 columns, 65/35]

Left Column:
- Cart items (list, similar to mobile but horizontal layout)
  Each item:
  - Image (left, 120px square)
  - Details (center): Name, size, color
  - Quantity selector
  - Price (right)
  - Remove icon

Right Column (sticky):
- "Order Summary" card
- Subtotal: ₹2,998
- Shipping: FREE
- Promo code input + Apply button
- Divider
- Total: ₹2,998 (large)
- Primary button: "Proceed to Checkout"
- "Continue Shopping" link
- Trust badges: Secure Checkout icons

[Below main section]
- "You May Also Like" 4 columns
```

---

### Checkout Page

**MOBILE**
```
[Header - back arrow (left) | "Checkout" title center | Lock icon (right)]

[Progress Indicator]
- Step 1: Shipping ● | Step 2: Payment ○

[Step 1: Shipping Information]
- "Shipping Address" heading
- Form fields:
  - Full Name *
  - Phone Number *
  - Address Line 1 *
  - Address Line 2
  - City *
  - State * (dropdown)
  - Pin Code *
- Checkbox: "Save this address"
- Primary button: "Continue to Payment"

[Step 2: Payment]
- "Shipping Address" (collapsed, edit link)
- "Payment Method" heading
- Radio options:
  - UPI (default selected)
  - Card
  - Net Banking
  - Cash on Delivery (+₹50 fee)
- Order Summary (collapsed by default, tap to expand)
  - 2 items
  - Subtotal: ₹2,998
  - Shipping: FREE
  - Total: ₹2,998
- Primary button: "Place Order ₹2,998"
- Small print: "By placing order, you agree to Terms"
```

**DESKTOP**
```
[Header - simple, logo center, lock icon]

[Progress Indicator - center]
- Shipping ● — Payment ○ — Confirmation ○

[Content Layout - 2 columns, 60/40]

Left Column:
- "Shipping Address" section
- Form (2 columns for name/phone)
- "Payment Method" section (shown after shipping filled)
- Radio options with icons

Right Column (sticky):
- "Order Summary" card
- Product list (small images + names)
- Subtotal, Shipping, Total breakdown
- Promo code input
- Primary button: "Place Order ₹2,998"
- Trust badges row
```

---

### Order Confirmation Page

**MOBILE**
```
[Header - no back button | "Order Confirmed" title center]

[Success Icon/Animation]
- Large checkmark in mint circle
- "Order Confirmed!" (H1)
- "Thank you for your order"

[Order Details Card]
- Order Number: #12345
- Order Date: 14 Oct 2026
- Estimated Delivery: 18-20 Oct 2026
- Shipping Address (collapsed, tap to expand)

[Items Ordered]
- Mini product cards (image + name + quantity + price)

[Order Summary]
- Subtotal: ₹2,998
- Shipping: FREE
- Total Paid: ₹2,998
- Payment Method: UPI

[Action Buttons]
- Primary: "Track Order"
- Secondary: "Continue Shopping"

[Footer note]
- "Order confirmation sent to your email"
```

**DESKTOP**
```
[Header - logo center]

[Content - centered, max-width 600px]
- Success icon
- "Order Confirmed!" (H1, centered)
- Order details (same as mobile, in card format)
- Items list
- Summary
- Action buttons (horizontal)
- Footer note
```

---

### Account - Login / Sign Up

**MOBILE**
```
[Header - back arrow | "Account" title]

[Tab Switcher]
- Login (active) | Sign Up

[Login Form]
- "Welcome Back" (H2)
- Email field *
- Password field * (show/hide toggle)
- "Forgot Password?" link (right-aligned)
- Primary button: "Login"
- Divider with "or"
- Secondary button: "Continue as Guest"

[Sign Up Form - when tab active]
- "Create Account" (H2)
- Full Name field *
- Email field *
- Phone Number field *
- Password field * (show/hide toggle)
- Checkbox: "I agree to Terms & Privacy Policy"
- Primary button: "Sign Up"
- Small text: "Already have account? Login"
```

**DESKTOP**
```
[Content - centered card, max-width 480px]
- Logo (centered)
- Tab switcher
- Form (same fields, more spacious)
- Social login buttons (if post-MVP):
  - "Continue with Google"
  - "Continue with Instagram"
```

---

### Account - Orders Page

**MOBILE**
```
[Header - back arrow | "My Orders" title]

[Orders List]
Each order card:
- Order #12345 (top)
- Date: 5 Oct 2026
- Status badge: Delivered (mint) | Processing (yellow) | Cancelled (pink)
- Product thumbnail(s) - up to 3, then "+2 more"
- Total: ₹2,998
- "View Details" link (right)
- Divider

[Empty State - if no orders]
- Illustration
- "No orders yet"
- "Start Shopping" button

[Filter Tabs - above list]
- All | Processing | Delivered | Returned
```

**DESKTOP**
```
[Account Layout - 2 columns, 25/75]

Left Sidebar:
- Profile name + email
- Navigation menu:
  - Profile
  - Orders (active)
  - Addresses
  - Logout

Right Content:
- "My Orders" (H1)
- Filter tabs
- Orders table:
  Columns: Order # | Date | Items | Total | Status | Actions
- Pagination
```

---

### Account - Order Detail Page

**MOBILE**
```
[Header - back arrow | "Order #12345" title]

[Status Timeline]
- Order Placed ● 5 Oct
- Processing ● 6 Oct
- Shipped ● 7 Oct
- Delivered ○ Expected 10 Oct

[Order Items]
Each item card:
- Product image | Name | Size M | Qty 1 | ₹1,499

[Shipping Address Card]
- Name
- Full address
- Phone

[Payment Summary Card]
- Subtotal: ₹2,998
- Shipping: FREE
- Total: ₹2,998
- Payment: UPI

[Actions]
- Primary button: "Track Shipment" (if shipped)
- Secondary button: "Request Return" (if eligible)
- Text link: "Download Invoice"
```

**DESKTOP**
```
[Account Layout - same sidebar as Orders page]

Right Content:
- Back to orders link
- Order #12345 (H1) | Status badge
- Status timeline (horizontal)
- Content in cards:
  - Items table
  - Shipping address (left column)
  - Payment summary (right column)
- Action buttons row
```

---

### Account - Return Request Page

**MOBILE**
```
[Header - back arrow | "Return Request" title]

[Order Reference]
- Order #12345
- Product thumbnail | Name | Size M

[Return Policy Banner - yellow background]
- "7-day return window"
- "Item must be unused with tags"
- "Free return pickup"

[Return Form]
- "Reason for Return" * (dropdown)
  Options:
  - Size too small
  - Size too large
  - Quality issue
  - Wrong item received
  - Changed my mind
  - Other
- "Additional Details" (textarea, optional)
- "Upload Photos" (up to 3 images)
  - Photo preview thumbnails after upload
  - Remove icon per photo

[Refund Method]
- Radio: "Original payment method" (default)
- Radio: "Store credit" (+10% bonus)

[Action Buttons]
- Primary: "Submit Return Request"
- Text link: "Cancel"
```

**DESKTOP**
```
[Account Layout - same sidebar]

Right Content:
- "Return Request" (H1)
- Content in centered card, max-width 720px
- Form fields (2 columns where applicable)
- Photo upload with larger previews
- Action buttons row
```

---

### Admin - Dashboard

**MOBILE**
```
[Header - menu icon (left) | "Dashboard" title | admin avatar (right)]

[Sidebar Drawer - slides from left]
- Dashboard (active)
- Products
- Orders
- Returns
- Logout

[Stats Cards - stacked vertically]
Card 1: Total Revenue | ₹1,25,000 | +12% this month
Card 2: Orders Today | 8 | 3 pending
Card 3: Total Products | 145 | 12 out of stock
Card 4: Return Requests | 5 | 2 pending

[Recent Orders Table]
- "Recent Orders" heading
- Simplified table (scrollable horizontally):
  Order # | Customer | Total | Status
- "View All" link

[Quick Actions - 2 column grid]
- "Add Product" button
- "View Orders" button
- "Manage Returns" button
- "Analytics" button
```

**DESKTOP**
```
[Layout - sidebar left (240px fixed) + main content]

Sidebar (ink background, cream text):
- Logo top
- Navigation menu:
  - Dashboard (active, pink accent)
  - Products
  - Orders
  - Returns
- Admin profile bottom

Top Bar:
- Page title: "Dashboard" (H1)
- Date range selector (right)
- Notification icon

Main Content:
- Stats Cards (4 columns, cards with shadows)
- Charts section:
  - Revenue chart (line graph, 2 columns width)
  - Top products (bar chart, 1 column)
  - Order status (pie chart, 1 column)
- Recent Orders Table (full width)
  Columns: Order # | Date | Customer | Items | Total | Status | Actions
  - View icon per row
- Low Stock Alert section
```

---

### Admin - Products Page

**MOBILE**
```
[Header - menu icon | "Products" title]

[Action Bar]
- Search field (top)
- Filter dropdown: All | Active | Draft | Out of Stock
- Primary button: "+ Add Product" (floating bottom-right)

[Product List - card view]
Each card:
- Product image (small, left)
- Name | SKU
- Category badge
- Price | Stock count
- Status toggle: Active / Inactive
- Edit icon (right)
- Divider

[Pagination]
- < 1 2 3 >
```

**DESKTOP**
```
[Layout - same sidebar]

[Top Bar]
- "Products" (H1) | Product count (right)
- Search bar (center)
- Filter dropdown
- Primary button: "+ Add Product"

[Products Table]
Columns:
- Image (thumbnail)
- Name | SKU
- Category
- Price
- Stock
- Status (toggle switch)
- Actions (Edit | Delete icons)

[Table features]
- Sortable columns
- Bulk select checkboxes
- Pagination with page size selector
```

---

### Admin - Add/Edit Product Page

**MOBILE**
```
[Header - back arrow | "Add Product" or "Edit Product" title]

[Form - scrollable]
Section 1: Basic Info
- Product Name * (text input)
- Category * (dropdown: Kurtis, Dresses, Co-ord Sets)
- SKU * (text input)
- Description * (textarea, 5 rows)

Section 2: Pricing
- Price * (₹ input)
- Compare at Price (optional, for showing discount)

Section 3: Images
- "Upload Images" button
- Image previews (grid, reorderable by drag)
- Max 8 images
- Remove icon per image

Section 4: Inventory
- Size stock table:
  XS [ ] S [ ] M [ ] L [ ] XL [ ]
  (number inputs for quantity per size)
- "Track Quantity" toggle

Section 5: Additional
- Tags (comma-separated input)
- Status: Active / Draft (toggle)

[Action Bar - sticky bottom]
- Secondary button: "Save as Draft"
- Primary button: "Save & Publish"
```

**DESKTOP**
```
[Layout - same sidebar]

[Content - 2 columns, 60/40]

Left Column (main form):
- Section cards (same sections as mobile, more spacious)
- Image upload with larger previews (4 columns grid)
- Inventory table (better formatted)

Right Column (sticky):
- Preview card:
  - "Product Preview" heading
  - Shows how product will appear on storefront
  - Updates live as form filled
- Status card:
  - Status toggle
  - Visibility options
  - Created/Modified date
- Action buttons (stacked):
  - Save as Draft
  - Save & Publish
  - Delete (if editing)
```

---

### Admin - Orders Page

**MOBILE**
```
[Header - menu icon | "Orders" title]

[Filter Bar]
- Search by order #
- Status filter: All | Pending | Processing | Shipped | Delivered | Cancelled

[Orders List - card view]
Each card:
- Order #12345 (bold)
- Customer name
- Date: 5 Oct 2026
- Items count: 2 items
- Total: ₹2,998
- Status badge
- "View Details" link

[Stats Row - above list]
- Pending: 23 | Today: 8 | This Week: 156
```

**DESKTOP**
```
[Layout - same sidebar]

[Top Bar]
- "Orders" (H1)
- Search bar
- Status filter tabs
- Date range picker
- Export button

[Orders Table]
Columns:
- Order # (link)
- Date & Time
- Customer
- Items
- Total
- Payment
- Status (dropdown to update)
- Actions (View | Print Invoice)

[Bulk Actions]
- Select multiple orders
- Update status dropdown
- Print selected button
```

---

### Admin - Order Detail Page

**MOBILE**
```
[Header - back arrow | "Order #12345" title]

[Status Update Card - top]
- Current Status badge: Processing
- "Update Status" dropdown
- Update button

[Customer Info Card]
- Name | Email | Phone
- Shipping address

[Items List]
Each item:
- Image | Name | Size | Qty | Price

[Payment Card]
- Subtotal: ₹2,998
- Shipping: FREE
- Total: ₹2,998
- Payment: UPI | Paid

[Timeline]
- Order placed: 5 Oct, 10:30 AM
- Payment confirmed: 5 Oct, 10:31 AM
- Processing: 6 Oct, 9:00 AM

[Actions]
- Secondary: "Print Invoice"
- Secondary: "Contact Customer"
- Danger: "Cancel Order" (if applicable)
```

**DESKTOP**
```
[Layout - same sidebar]

[Content - 2 columns, 65/35]

Left Column:
- Order #12345 (H1) | Order date
- Status badge + update dropdown inline
- Items table
- Timeline section

Right Column (sticky):
- Customer card (with contact icons)
- Shipping address card
- Payment summary card
- Action buttons (stacked)
- Notes textarea: "Add internal note"
```

---

### Admin - Returns Page

**MOBILE**
```
[Header - menu icon | "Returns" title]

[Filter Bar]
- Status filter: All | Pending | Approved | Rejected | Completed

[Returns List - card view]
Each card:
- Return #R-456 (bold)
- Order #12345 link
- Customer name
- Product thumbnail | Name | Size
- Reason: Size too small
- Requested: 8 Oct 2026
- Status badge: Pending
- "View Details" link

[Stats Row]
- Pending: 5 | Approved: 12 | This Month: 34
```

**DESKTOP**
```
[Layout - same sidebar]

[Top Bar]
- "Returns" (H1)
- Search bar
- Status filter tabs
- Date range picker

[Returns Table]
Columns:
- Return #
- Order #
- Date
- Customer
- Product (thumbnail + name)
- Reason
- Status (dropdown)
- Actions (View | Approve | Reject)

[Bulk Actions]
- Select multiple
- Bulk approve / reject
```

---

### Admin - Return Detail Page

**MOBILE**
```
[Header - back arrow | "Return #R-456" title]

[Status Update Card]
- Current Status: Pending
- "Update Status" dropdown:
  - Approve
  - Reject
  - Mark as Completed
- Update button

[Return Info Card]
- Return ID: R-456
- Order #: 12345 (link)
- Requested: 8 Oct 2026
- Customer: Name | Email | Phone

[Product Card]
- Product image | Name
- Size: M | Quantity: 1
- Price: ₹1,499

[Return Details Card]
- Reason: Size too small (from dropdown)
- Customer Comments:
  "Need size L instead"
- Photos: (3 uploaded images, clickable to enlarge)

[Refund Card]
- Refund Amount: ₹1,499
- Refund Method: Original payment method

[Actions]
- Primary: "Approve Return"
- Secondary: "Reject Return"
- Text link: "Contact Customer"

[Timeline]
- Return requested: 8 Oct, 2:00 PM
- Admin viewed: 8 Oct, 3:30 PM
```

**DESKTOP**
```
[Layout - same sidebar]

[Content - 2 columns, 60/40]

Left Column:
- Return #R-456 (H1) | Date
- Status badge + update dropdown
- Product details card
- Return reason + comments card
- Photo gallery (larger)
- Timeline section

Right Column (sticky):
- Customer info card
- Order reference card
- Refund details card
- Action buttons (stacked)
- Internal notes textarea
```

---

## 6. Acceptance Criteria

### User Registration & Login

**Feature: User Sign Up**
```
GIVEN I am a new user on the sign-up page
WHEN I enter valid name, email, phone, and password
  AND I check "I agree to Terms & Privacy Policy"
  AND I tap "Sign Up"
THEN my account is created
  AND I am logged in automatically
  AND I am redirected to the home page
  AND I receive a welcome email
```

**Feature: User Login**
```
GIVEN I am a registered user on the login page
WHEN I enter correct email and password
  AND I tap "Login"
THEN I am logged in
  AND I am redirected to the page I was trying to access (or home)
  AND my cart persists from guest session if applicable
```

```
GIVEN I am on the login page
WHEN I enter incorrect credentials
  AND I tap "Login"
THEN I see error message "Invalid email or password"
  AND I remain on the login page
```

---

### Product Browsing

**Feature: View Product Catalog**
```
GIVEN I am on the Shop page
WHEN the page loads
THEN I see a grid of products (2 columns mobile, 4 desktop)
  AND each product shows image, name, and price
  AND I see the total product count
  AND products load within 2 seconds
```

**Feature: Filter by Size**
```
GIVEN I am on the Shop page
WHEN I open filters
  AND I select size "M"
  AND I tap "Apply"
THEN I see only products available in size M
  AND the product count updates
  AND the filter persists if I navigate away and return
```

**Feature: Filter by Price Range**
```
GIVEN I am on the Shop page with price filter visible
WHEN I set price range slider to ₹1000-₹2000
  AND I tap "Apply"
THEN I see only products priced between ₹1000 and ₹2000
  AND the filter shows active state
```

**Feature: Sort Products**
```
GIVEN I am on the Shop page
WHEN I select "Price: Low to High" from sort dropdown
THEN products are reordered by price ascending
  AND the sort selection persists on page refresh
```

**Feature: Search Products**
```
GIVEN I am on any page
WHEN I tap the search icon
  AND I type "floral dress"
  AND I submit the search
THEN I see products matching "floral dress" in name or description
  AND I see message "X results for 'floral dress'"
  AND I can clear search and return to all products
```

---

### Product Detail

**Feature: View Product Details**
```
GIVEN I tap on a product from the catalog
WHEN the product detail page loads
THEN I see product name, price, images, description, size options, and stock status
  AND I can swipe through all product images
  AND the first image loads within 1 second
```

**Feature: Select Size**
```
GIVEN I am on a product detail page
WHEN I select size "M" from the dropdown
THEN size M is highlighted as selected
  AND I see stock status for size M specifically
  AND the selection persists if I scroll down and back up
```

**Feature: Add to Cart**
```
GIVEN I am on a product detail page
  AND I have selected a size
WHEN I tap "Add to Cart"
THEN the product is added to my cart
  AND cart badge updates to show new item count
  AND I see a success notification "Added to cart"
  AND I remain on the product page
```

```
GIVEN I am on a product detail page
  AND I have NOT selected a size
WHEN I tap "Add to Cart"
THEN I see error message "Please select a size"
  AND the product is not added
  AND size dropdown highlights in error state
```

**Feature: View Size Chart**
```
GIVEN I am on a product detail page
WHEN I tap "Size Chart"
THEN a modal opens showing size measurements table
  AND I can close the modal by tapping X or outside
  AND the page behind does not scroll when modal is open
```

---

### Shopping Cart

**Feature: View Cart**
```
GIVEN I have items in my cart
WHEN I tap the cart icon
THEN I see all cart items with images, names, sizes, prices, and quantities
  AND I see subtotal and estimated total
  AND I see "Proceed to Checkout" button
```

**Feature: Update Quantity**
```
GIVEN I am on the cart page
WHEN I tap "+" on an item's quantity selector
THEN quantity increases by 1
  AND item total updates immediately
  AND cart subtotal updates immediately
  AND quantity updates persist if I navigate away
```

```
GIVEN I am on the cart page with quantity at 1
WHEN I tap "-" on quantity selector
THEN I see confirmation "Remove this item?"
  AND if I confirm, item is removed from cart
  AND cart count and total update
```

**Feature: Remove Item**
```
GIVEN I am on the cart page
WHEN I tap remove icon on an item
THEN I see confirmation "Remove this item?"
  AND if I confirm, item is removed
  AND cart updates immediately
  AND I see undo notification for 5 seconds
```

**Feature: Empty Cart State**
```
GIVEN my cart is empty
WHEN I navigate to the cart page
THEN I see "Your cart is empty" message
  AND I see "Start Shopping" button
  AND I do NOT see checkout button
```

---

### Checkout - Guest

**Feature: Checkout as Guest**
```
GIVEN I have items in cart
  AND I am not logged in
WHEN I tap "Proceed to Checkout"
THEN I see option to "Continue as Guest" or "Login"
  AND I can complete checkout without creating account
```

**Feature: Enter Shipping Information**
```
GIVEN I am on the checkout page at shipping step
WHEN I fill all required fields (name, phone, address, city, state, pin)
  AND I tap "Continue to Payment"
THEN my information is validated
  AND I proceed to payment step
  AND shipping info is saved for order
```

```
GIVEN I am on the checkout shipping step
WHEN I leave required fields empty
  AND I tap "Continue to Payment"
THEN I see inline error messages on empty fields
  AND I remain on shipping step
  AND no fields are submitted
```

---

### Checkout - Payment

**Feature: Select Payment Method**
```
GIVEN I am on the payment step
WHEN I select "UPI" payment method
THEN UPI is marked as selected
  AND order total remains visible
  AND "Place Order" button shows total amount
```

**Feature: Place Order**
```
GIVEN I am on the payment step
  AND I have selected a payment method
WHEN I tap "Place Order ₹2,998"
THEN I am redirected to payment gateway (Razorpay)
  AND order is created with status "Pending Payment"
  AND order ID is generated
```

**Feature: Successful Payment**
```
GIVEN I completed payment on payment gateway
WHEN payment is confirmed
THEN I am redirected to order confirmation page
  AND order status updates to "Processing"
  AND I see order number, estimated delivery, and order summary
  AND I receive order confirmation email within 5 minutes
  AND inventory is decremented for purchased items
```

**Feature: Failed Payment**
```
GIVEN I am on payment gateway
WHEN payment fails or is cancelled
THEN I am redirected back to payment step
  AND I see error message "Payment failed. Please try again"
  AND order status remains "Pending Payment"
  AND inventory is NOT decremented
```

**Feature: Cash on Delivery**
```
GIVEN I select "Cash on Delivery" payment method
WHEN I tap "Place Order"
THEN ₹50 COD fee is added to total
  AND order is created with status "Processing"
  AND I see order confirmation
  AND I receive email with payment instructions
```

---

### Order History

**Feature: View My Orders**
```
GIVEN I am logged in
WHEN I navigate to "My Orders"
THEN I see a list of all my past orders
  AND each order shows order #, date, status, items, and total
  AND orders are sorted by date (newest first)
```

**Feature: View Order Details**
```
GIVEN I am on My Orders page
WHEN I tap on an order
THEN I see full order details including items, shipping address, payment info, and status timeline
  AND I can track shipment if order is shipped
  AND I can request return if order is delivered and within 7 days
```

**Feature: Filter Orders by Status**
```
GIVEN I am on My Orders page
WHEN I tap "Delivered" filter tab
THEN I see only delivered orders
  AND order count updates
  AND I can switch between filter tabs
```

---

### Returns

**Feature: Request Return**
```
GIVEN I am viewing a delivered order
  AND order was delivered within last 7 days
WHEN I tap "Request Return"
  AND I select return reason
  AND I upload at least 1 photo
  AND I tap "Submit Return Request"
THEN return request is created with unique ID
  AND order status updates to "Return Pending"
  AND I see confirmation message with return ID
  AND I receive email confirmation
  AND admin is notified of new return request
```

```
GIVEN I am viewing a delivered order
  AND order was delivered more than 7 days ago
WHEN I view the order detail page
THEN "Request Return" button is not visible
  AND I see message "Return window closed"
```

**Feature: Track Return Status**
```
GIVEN I submitted a return request
WHEN I view the order details
THEN I see return request status (Pending, Approved, Rejected, Completed)
  AND I see return ID
  AND if approved, I see pickup details
```

---

### Admin - Product Management

**Feature: Add New Product**
```
GIVEN I am logged in as admin
WHEN I navigate to Products page
  AND I tap "Add Product"
  AND I fill name, category, SKU, price, description
  AND I upload at least 1 image
  AND I add size inventory for at least 1 size
  AND I tap "Save & Publish"
THEN product is created in database
  AND product appears in product list
  AND product is visible on storefront
  AND I see success message
```

```
GIVEN I am adding a product
WHEN I leave required fields empty
  AND I tap "Save & Publish"
THEN I see validation errors on required fields
  AND product is not saved
  AND I remain on the form
```

**Feature: Edit Product**
```
GIVEN I am on Products page
WHEN I tap edit icon on a product
  AND I update the price
  AND I tap "Save & Publish"
THEN product is updated in database
  AND changes reflect on storefront immediately
  AND I see success message
  AND product modification timestamp updates
```

**Feature: Delete Product**
```
GIVEN I am editing a product
WHEN I tap "Delete"
THEN I see confirmation dialog "Delete this product? This cannot be undone"
  AND if I confirm, product is deleted
  AND product is removed from storefront
  AND I am redirected to products list
```

**Feature: Toggle Product Status**
```
GIVEN I am on Products page
WHEN I toggle a product from Active to Inactive
THEN product status updates immediately
  AND product is hidden from storefront
  AND product remains in admin list with "Inactive" badge
```

**Feature: Update Inventory**
```
GIVEN I am editing a product
WHEN I change size M stock from 10 to 5
  AND I tap "Save"
THEN inventory is updated
  AND if stock reaches 0, product shows "Out of Stock" for that size
  AND customers cannot add that size to cart
```

---

### Admin - Order Management

**Feature: View All Orders**
```
GIVEN I am logged in as admin
WHEN I navigate to Orders page
THEN I see all orders in table/list format
  AND I see order #, date, customer, total, and status for each
  AND I can search by order number or customer name
  AND I can filter by status
```

**Feature: Update Order Status**
```
GIVEN I am viewing an order detail
WHEN I select "Shipped" from status dropdown
  AND I tap "Update"
THEN order status updates to Shipped
  AND customer receives email notification
  AND status timestamp is recorded
  AND I see success message
```

**Feature: Filter Orders by Date**
```
GIVEN I am on Orders page
WHEN I select date range "Last 7 Days"
THEN I see only orders placed in last 7 days
  AND order count reflects filtered results
```

**Feature: Export Orders**
```
GIVEN I am on Orders page
WHEN I tap "Export" button
THEN CSV file downloads with all visible orders (respecting active filters)
  AND CSV includes order #, date, customer, items, total, status
```

---

### Admin - Return Management

**Feature: View Return Requests**
```
GIVEN I am logged in as admin
WHEN I navigate to Returns page
THEN I see all return requests
  AND I see return #, order #, customer, product, reason, status for each
  AND pending returns show first
```

**Feature: Approve Return**
```
GIVEN I am viewing a pending return request
WHEN I tap "Approve Return"
THEN return status updates to Approved
  AND customer receives email with pickup instructions
  AND refund is initiated
  AND I see success message
```

**Feature: Reject Return**
```
GIVEN I am viewing a pending return request
WHEN I tap "Reject Return"
THEN I see confirmation dialog requiring rejection reason
  AND if I confirm, status updates to Rejected
  AND customer receives email with reason
  AND no refund is processed
```

**Feature: View Return Photos**
```
GIVEN I am viewing a return detail with uploaded photos
WHEN I tap on a photo
THEN photo opens in full-screen lightbox
  AND I can swipe between photos
  AND I can zoom in/out
  AND I can close lightbox
```

---

### Admin - Dashboard

**Feature: View Analytics**
```
GIVEN I am logged in as admin
WHEN I navigate to Dashboard
THEN I see current stats: total revenue, orders today, total products, return requests
  AND I see percentage change from previous period
  AND I see recent orders list (last 10)
  AND I see low stock alerts if any products < 5 units
  AND data refreshes automatically every 5 minutes
```

**Feature: Quick Actions**
```
GIVEN I am on Dashboard
WHEN I tap "Add Product" quick action
THEN I am taken directly to Add Product page
  AND I can complete action without navigating through menu
```

---

## 7. Content Checklist

### Product Content (Per Product)
- [ ] **Product Photos** (minimum 4, maximum 8 per product)
  - Format: JPG or PNG
  - Aspect ratio: **4:5 (e.g., 800px × 1000px)**
  - Background: Plain white or lifestyle setting
  - Angles: Front, back, side, detail shots
  - Model photos + flat lays recommended
  - File size: Under 2MB each, optimized for web

- [ ] **Product Name** (e.g., "Sunshine Yellow Co-ord Set")

- [ ] **Product Description** (150-300 words)
  - Fabric details
  - Design features
  - Occasion suitability
  - Care instructions

- [ ] **Category** (Kurtis / Dresses / Co-ord Sets)

- [ ] **SKU** (Unique identifier per product)

- [ ] **Price** (₹)

- [ ] **Inventory by Size** (XS, S, M, L, XL stock counts)

- [ ] **Tags** (e.g., summer, casual, floral, cotton)

---

### Size & Fit Content
- [ ] **Size Chart** (General measurements table)
  - Bust, Waist, Hip measurements for each size
  - Length measurements
  - Available as image (PNG/JPG) or table data

- [ ] **Size Chart per Category** (if measurements differ)
  - Kurtis size chart
  - Dresses size chart
  - Co-ord sets size chart

- [ ] **Fit Guide Text**
  - Model height and size worn
  - Fit description (e.g., "True to size", "Runs small")

---

### Policy & Legal Content
- [ ] **Shipping Policy**
  - Delivery timelines (standard: 5-7 days)
  - Shipping charges (Free over ₹999)
  - Serviceable pin codes or regions
  - Courier partner names

- [ ] **Return & Exchange Policy**
  - Return window (7 days)
  - Eligibility criteria (unused, tags attached)
  - Return process steps
  - Refund timeline (5-7 business days)
  - Exchange policy (if applicable)

- [ ] **Privacy Policy** (Required for GDPR/compliance)
  - Data collection practices
  - Cookie usage
  - Third-party sharing

- [ ] **Terms & Conditions**
  - Purchase terms
  - Limitation of liability
  - Dispute resolution

- [ ] **Cancellation Policy**
  - Cancellation window
  - Refund process for cancellations

---

### Brand Assets
- [ ] **Logo Files**
  - Primary logo (color version, PNG with transparency)
  - Logo for dark backgrounds (if needed)
  - Favicon (32×32px, 16×16px ICO or PNG)
  - Social media profile image (square, 1080×1080px)

- [ ] **Brand Colors** (Already defined)
  - Cream #FFF7F0
  - Ink #17141F
  - Pink #FF4F8B
  - Lilac #B8A1FF
  - Mint #8FF0C8
  - Yellow #FFE45E

- [ ] **Fonts** (Already defined)
  - Syne (headings, buttons)
  - DM Sans (body text)

- [ ] **Hero Banner Images** (Homepage)
  - Desktop: 1920×1080px or larger
  - Mobile: 1080×1350px (4:5 ratio)
  - Format: JPG optimized, under 500KB

- [ ] **Category Banner Images** (3 images)
  - One for Kurtis category
  - One for Dresses category
  - One for Co-ord Sets category
  - Size: 800×800px (square) or 1200×675px (16:9 for desktop)

---

### Business Information
- [ ] **Store Name** / Brand Name

- [ ] **Contact Information**
  - Customer support email
  - Customer support phone number
  - WhatsApp number (for support)
  - Business address (for invoices, legal)

- [ ] **Social Media Links**
  - Instagram handle
  - Facebook page (if applicable)
  - Pinterest (if applicable)

- [ ] **About Us Content**
  - Brand story (200-400 words)
  - Mission statement
  - Founder photo (optional)

---

### Payment & Order Content
- [ ] **Payment Gateway Account**
  - Razorpay account set up
  - API keys (test and live)
  - Supported payment methods enabled (UPI, Cards, Net Banking, COD)

- [ ] **Email Templates Content**
  - Order confirmation email text
  - Shipping notification email text
  - Delivery confirmation email text
  - Return approval/rejection email text
  - Welcome email text (for new users)

- [ ] **Invoice Details**
  - GST number (if registered)
  - Business legal name
  - Business address for invoices

---

### Marketing & SEO Content
- [ ] **SEO Meta Descriptions**
  - Homepage meta description (150-160 characters)
  - Category page descriptions (per category)
  - Product page template structure

- [ ] **Open Graph Images** (for social sharing)
  - Default OG image: 1200×630px

- [ ] **Promotional Content** (If launching with offers)
  - Banner text for sales/offers
  - Promo codes and discount rules
  - Sale badge text

---

### Admin Setup Content
- [ ] **Admin User Credentials**
  - Admin email
  - Admin password (secure, to be set during setup)

- [ ] **Notification Preferences**
  - Email for order notifications
  - Email for return request alerts
  - Email for low stock alerts

---

### Optional (Nice-to-Have)
- [ ] Product videos (15-30 seconds, MP4, under 10MB)
- [ ] Customer testimonials and reviews (if migrating from existing platform)
- [ ] Blog content (styling tips, care guides)
- [ ] FAQ content (common questions and answers)
- [ ] Gift message template (if offering gift wrapping)

---

**Total Checklist Summary:**
- Product photos in 4:5 ratio ✓
- Size and inventory data ✓
- Size chart ✓
- Pricing ✓
- Policy texts (shipping, returns, privacy, terms) ✓
- Logo and brand assets ✓
- Contact information ✓
- Payment gateway setup ✓
- Email template content ✓

---

*End of Product Requirements Document*
