// This file lets you customize MDX elements without using @mdx-js/react's provider
// so it remains compatible with React Server Components.

import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Example: style code blocks minimally; extend as you like
    code: (props) => (
      <code
        style={{
          backgroundColor: "#1f2937",
          color: "#e5e7eb",
          borderRadius: 4,
          padding: "0.125rem 0.375rem",
        }}
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        style={{
          backgroundColor: "#111827",
          color: "#e5e7eb",
          borderRadius: 6,
          padding: "0.75rem 1rem",
          overflowX: "auto",
        }}
        {...props}
      />
    ),
    ...components,
  }
}
