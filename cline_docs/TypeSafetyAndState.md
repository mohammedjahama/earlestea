# TypeScript and State Management Guidelines

## TypeScript Best Practices

### Component Props
```typescript
// Use explicit interface definitions for props
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  description?: string;  // Optional props with ?
  image: {
    url: string;
    alt: string;
  };
  onAddToCart: (id: string) => void;
}
```

### API Types
```typescript
// Define types for API responses
interface TeaProduct {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  price: number;
  inventory: number;
  description: string;
}

// Use type for API error handling
type ApiResponse<T> = {
  data?: T;
  error?: {
    message: string;
    code: number;
  };
};
```

### State Management
```typescript
// Use discriminated unions for state
type FetchState<T> = 
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string };
```

## Strict TypeScript Configuration
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

## State Management Guidelines

### Local Component State
- Use `useState` for simple component state
- Implement `useReducer` for complex state logic
- Type all state initialization

### Global State Management
- Avoid unnecessary global state
- Use React Context for shared state
- Type context providers and consumers

### Form State
- Implement controlled components
- Use TypeScript for form validation
- Type form event handlers

## Type Safety Checklist
- [ ] All component props typed
- [ ] API responses typed
- [ ] State management typed
- [ ] Event handlers typed
- [ ] Form data typed
- [ ] Route parameters typed

## Code Examples

### Component Type Safety
```typescript
interface HeaderProps {
  title: string;
  isAuthenticated: boolean;
  user?: {
    name: string;
    email: string;
  };
}

const Header: React.FC<HeaderProps> = ({
  title,
  isAuthenticated,
  user
}) => {
  return (
    // Implementation
  );
};
```

### Hook Type Safety
```typescript
const useCart = <T extends { id: string }>(
  initialItems: T[] = []
): {
  items: T[];
  addItem: (item: T) => void;
  removeItem: (id: string) => void;
} => {
  // Implementation
};
```

## Error Handling
```typescript
type ErrorWithMessage = {
  message: string;
  statusCode: number;
};

const isErrorWithMessage = (
  error: unknown
): error is ErrorWithMessage => {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    'statusCode' in error
  );
};
```

## Testing Types
```typescript
// Use type-safe test utilities
interface RenderOptions {
  initialState?: Record<string, unknown>;
  route?: string;
}

const renderWithProviders = (
  ui: React.ReactElement,
  options?: RenderOptions
) => {
  // Implementation
};
