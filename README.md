# HSBC CIB Regulatory Response Application

## Overview

The HSBC CIB Regulatory Response Application is a comprehensive web-based platform designed to assist compliance teams in managing regulatory queries, checking email compliance, and searching through regulatory documentation. Built with React, TypeScript, and modern UI components, it provides a secure, efficient, and user-friendly interface for regulatory operations.

## 🎯 Key Features

### 1. **Citation Search**
Search through regulatory documents, policies, and guidelines with AI-powered responses and relevant citations.
- Natural language query processing
- AI-generated responses with source citations
- Document preview and download
- Multi-source aggregation

[📖 Read More](./features/CITATION_SEARCH.md)

### 2. **Compliance Check**
Validate email drafts and responses against regulatory guidelines and company policies.
- Real-time compliance scoring
- Detailed issue detection (High, Medium, Low priority)
- Corrected response suggestions
- Passed and skipped checks tracking

[📖 Read More](./features/COMPLIANCE_CHECK.md)

### 3. **Unified Chat Interface**
Conversational interface for both citation search and compliance checking.
- Multi-turn conversations
- Context-aware responses
- Message history
- Copy protection for sensitive data

[📖 Read More](./features/CHAT_INTERFACE.md)

### 4. **Authentication & Security**
Enterprise-grade authentication using Microsoft Azure AD (MSAL).
- Single Sign-On (SSO)
- Role-based access control
- Secure token management
- Session management

[📖 Read More](./features/AUTHENTICATION.md)

### 5. **Audit & Monitoring**
Comprehensive activity logging and monitoring dashboard.
- Real-time activity tracking
- Cosmos DB integration
- Audit trail for compliance
- Performance metrics

[📖 Read More](./features/MONITORING_AUDIT.md)

### 6. **Blocked Request Handling**
Intelligent handling of blocked or restricted requests.
- Status-based filtering
- Custom error messages
- Audit logging of blocked attempts
- User-friendly feedback

[📖 Read More](./features/BLOCKED_STATUS.md)

## 🏗️ Architecture

### Technology Stack
- **Frontend Framework:** React 18.3.1
- **Language:** TypeScript
- **Build Tool:** Vite
- **UI Components:** Shadcn/ui + Radix UI
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Authentication:** MSAL (Microsoft Authentication Library)
- **HTTP Client:** Fetch API
- **Notifications:** Sonner (Toast notifications)

### Project Structure
```
reg-response/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── chat/         # Chat-related components
│   │   ├── citations/    # Citation display components
│   │   ├── compliance/   # Compliance check components
│   │   ├── home/         # Home page components
│   │   ├── layout/       # Layout components (Header, etc.)
│   │   └── ui/           # Base UI components (Shadcn)
│   ├── contexts/         # React Context providers
│   │   ├── AuditContext.tsx
│   │   ├── AuthContext.tsx
│   │   └── ConversationContext.tsx
│   ├── data/             # Mock data and constants
│   ├── pages/            # Page components
│   │   ├── Home.tsx
│   │   ├── Conversation.tsx
│   │   └── Monitoring.tsx
│   ├── services/         # API service layers
│   │   ├── auditService.ts
│   │   ├── citationService.ts
│   │   └── complianceService.ts
│   ├── types/            # TypeScript type definitions
│   └── lib/              # Utility functions
├── docs/                 # Documentation (this folder)
└── public/               # Static assets
```

[📖 Detailed Architecture](./architecture/OVERVIEW.md)

## 📚 Documentation Index

### Features
- [Citation Search](./features/CITATION_SEARCH.md)
- [Compliance Check](./features/COMPLIANCE_CHECK.md)
- [Chat Interface](./features/CHAT_INTERFACE.md)
- [Authentication](./features/AUTHENTICATION.md)
- [Monitoring & Audit](./features/MONITORING_AUDIT.md)
- [Blocked Status Handling](./features/BLOCKED_STATUS.md)

### Architecture
- [System Overview](./architecture/OVERVIEW.md)
- [Data Flow](./architecture/DATA_FLOW.md)
- [State Management](./architecture/STATE_MANAGEMENT.md)
- [API Integration](./architecture/API_INTEGRATION.md)

### Components
- [UI Components Guide](./components/UI_COMPONENTS.md)
- [Chat Components](./components/CHAT_COMPONENTS.md)
- [Citation Components](./components/CITATION_COMPONENTS.md)
- [Compliance Components](./components/COMPLIANCE_COMPONENTS.md)

### Development
- [Getting Started](./development/GETTING_STARTED.md)
- [Development Guide](./development/DEVELOPMENT_GUIDE.md)
- [Testing Guide](./development/TESTING.md)
- [Deployment](./development/DEPLOYMENT.md)

### API Reference
- [API Endpoints](./api/ENDPOINTS.md)
- [Request/Response Schemas](./api/SCHEMAS.md)
- [Error Handling](./api/ERROR_HANDLING.md)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Azure AD tenant access
- API endpoint access

### Installation
```bash
# Clone the repository
cd reg-response

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
```

[📖 Detailed Setup Guide](./development/GETTING_STARTED.md)

## 🔑 Key Concepts

### Modes
The application operates in two primary modes:
- **Citations Mode:** Search and retrieve regulatory documents
- **Compliance Mode:** Check email drafts for compliance issues

### Conversations
All interactions are organized into conversations, allowing users to:
- Track query history
- Resume previous work
- Maintain context across sessions

### Audit Trail
Every action is logged for compliance and monitoring:
- User activities
- API calls
- Response times
- Error tracking

## 📊 API Endpoints

| Endpoint | Purpose | Documentation |
|----------|---------|---------------|
| `/api/responsesearchfunction` | Citation Search | [Link](./api/ENDPOINTS.md#citation-search) |
| `/api/compliancecheckfunction` | Compliance Check | [Link](./api/ENDPOINTS.md#compliance-check) |
| `/api/auditcosmosfunction` | Audit Logging | [Link](./api/ENDPOINTS.md#audit-logging) |

## 🛡️ Security Features

- **Authentication:** Azure AD SSO with MSAL
- **Authorization:** Role-based access control
- **Data Protection:** Copy/paste restrictions on sensitive data
- **Audit Logging:** Complete activity tracking
- **Blocked Request Handling:** Automatic filtering of restricted content

## 📝 License

Copyright © 2026 HSBC. All rights reserved.

## 📞 Support

For questions or issues, please contact the development team or refer to the detailed documentation in this folder.
