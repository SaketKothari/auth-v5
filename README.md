# 🔐 Auth V5 - Next.js Authentication Toolkit

A complete, production-ready authentication solution built with **Next.js 14**, **Auth.js v5** (NextAuth), **Prisma**, and **PostgreSQL**. This project demonstrates modern authentication patterns with a beautiful UI powered by **shadcn/ui** and **Tailwind CSS**.

## ✨ Features

### 🔑 Authentication Methods

- **Credentials Login** - Email & password authentication with secure hashing
- **OAuth Providers** - Google and GitHub social login integration
- **Two-Factor Authentication (2FA)** - TOTP-based 2FA for enhanced security

### 📧 Email Functionality

- **Email Verification** - Verify user emails before allowing access
- **Password Reset** - Secure forgot password flow with email tokens
- **2FA Codes** - Email-based two-factor authentication codes

### 🛡️ Security Features

- **JWT Sessions** - Secure, stateless session management
- **Role-Based Access Control** - Admin and User roles with protected routes
- **CSRF Protection** - Built-in protection against cross-site request forgery
- **Secure Password Hashing** - bcrypt-based password encryption

### 🎨 User Experience

- **Beautiful Landing Page** - Modern, responsive design with dark/light mode
- **Settings Dashboard** - Update profile, change password, enable 2FA
- **Role-Based UI** - Different views for Admin and User roles
- **Toast Notifications** - Real-time feedback for user actions

## 🛠️ Tech Stack

| Category        | Technology                                                                |
| --------------- | ------------------------------------------------------------------------- |
| Framework       | [Next.js 14](https://nextjs.org/) (App Router)                            |
| Authentication  | [Auth.js v5](https://authjs.dev/) (NextAuth)                              |
| Database        | [PostgreSQL](https://www.postgresql.org/)                                 |
| ORM             | [Prisma](https://www.prisma.io/)                                          |
| Styling         | [Tailwind CSS](https://tailwindcss.com/)                                  |
| UI Components   | [shadcn/ui](https://ui.shadcn.com/)                                       |
| Email Service   | [Resend](https://resend.com/)                                             |
| Form Validation | [Zod](https://zod.dev/) + [React Hook Form](https://react-hook-form.com/) |

## 📁 Project Structure

```
├── actions/            # Server actions for auth operations
├── app/
│   ├── (protected)/    # Protected routes (requires authentication)
│   ├── api/            # API routes
│   └── auth/           # Authentication pages (login, register, etc.)
├── components/
│   ├── auth/           # Authentication components
│   ├── layout/         # Layout and landing page sections
│   └── ui/             # shadcn/ui components
├── data/               # Database query functions
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── prisma/             # Database schema
└── schemas/            # Zod validation schemas
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (or use [Neon](https://neon.tech)/[Supabase](https://supabase.com))
- [Resend](https://resend.com) account for emails

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/SaketKothari/auth-v5.git
cd auth-v5
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@host:5432/database"
DIRECT_URL="postgresql://username:password@host:5432/database"

# NextAuth
AUTH_SECRET="your-auth-secret"  # Run: npx auth secret

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
GITHUB_CLIENT_ID="your-github-client-id"
GITHUB_CLIENT_SECRET="your-github-client-secret"

# Email (Resend)
RESEND_API_KEY="your-resend-api-key"
```

4. **Set up the database**

```bash
npx prisma generate
npx prisma db push
```

5. **Run the development server**

```bash
npm run dev
```

6. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables Guide

| Variable                  | Description                  | How to Get                                                          |
| ------------------------- | ---------------------------- | ------------------------------------------------------------------- |
| `DATABASE_URL`            | PostgreSQL connection string | [Neon](https://neon.tech) or [Supabase](https://supabase.com)       |
| `AUTH_SECRET`             | NextAuth secret key          | Run `npx auth secret`                                               |
| `GOOGLE_CLIENT_ID/SECRET` | Google OAuth credentials     | [Google Cloud Console](https://console.cloud.google.com)            |
| `GITHUB_CLIENT_ID/SECRET` | GitHub OAuth credentials     | [GitHub Developer Settings](https://github.com/settings/developers) |
| `RESEND_API_KEY`          | Email service API key        | [Resend Dashboard](https://resend.com)                              |

## 📸 Screenshots

### Landing Page

Modern, responsive landing page with dark/light mode support.

### Authentication Flow

- Login with credentials or OAuth
- Register with email verification
- Two-factor authentication
- Password reset flow

### Protected Dashboard

- User settings management
- Role-based access control
- Profile customization

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Saket Kothari**

- GitHub: [@SaketKothari](https://github.com/SaketKothari)

---

⭐ If you found this project helpful, please give it a star!
