---
layout: post
title: "Example: Daily Programming Blog Post"
date: 2026-01-22
author: Shafikul
categories:
  - Tutorial
  - Programming
tags:
  - JavaScript
  - React
  - TypeScript
  - WebDev
excerpt: "This is an example of how your daily programming blog posts will look - with beautiful code highlighting and easy formatting!"
published: true
---

# Today I Learned: React Custom Hooks

Today I want to share a powerful React pattern I discovered - creating custom hooks for data fetching.

## The Problem

When fetching data in React components, we often repeat the same pattern:

```javascript
function UserProfile() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{data.name}</div>;
}
```

This is repetitive and hard to maintain!

## The Solution: Custom Hook

Create a reusable `useFetch` hook:

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}
```

## Using the Custom Hook

Now our components are clean and simple:

```javascript
function UserProfile() {
  const { data, loading, error } = useFetch('/api/user');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Hello, {data.name}!</div>;
}

function PostsList() {
  const { data, loading, error } = useFetch('/api/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

## TypeScript Version

For type safety, here's the TypeScript version:

```typescript
interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useFetch<T>(url: string): FetchState<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json() as Promise<T>;
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

// Usage with types
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const { data, loading, error } = useFetch<User>('/api/user');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>Hello, {data?.name}!</div>;
}
```

## Key Benefits

1. **DRY Code**: Write the logic once, use everywhere
2. **Easy Testing**: Test the hook independently
3. **Maintainability**: Update logic in one place
4. **Reusability**: Use across multiple components
5. **Type Safety**: Full TypeScript support

## Advanced: With Refetch

Want to refetch data? Extend the hook:

```javascript
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refetchToggle, setRefetchToggle] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url, refetchToggle]);

  const refetch = () => setRefetchToggle(prev => !prev);

  return { data, loading, error, refetch };
}

// Usage
function UserProfile() {
  const { data, loading, error, refetch } = useFetch('/api/user');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
```

## Conclusion

Custom hooks are a powerful pattern for:
- Extracting component logic
- Sharing functionality between components
- Creating clean, maintainable code

Try creating your own custom hooks for common patterns in your applications!

## Related Resources

- [React Hooks Documentation](https://react.dev/reference/react)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [TypeScript with React](https://react.dev/learn/typescript)

## Comments

What custom hooks do you use in your projects? Share in the comments below!

---

**Tags:** #React #JavaScript #TypeScript #WebDev #CustomHooks #Programming

**Category:** Tutorial

**Published:** January 22, 2026
