/**
 * @typedef {{ type: 'text' | 'bold' | 'italic' | 'link', value: string, href?: string }} RichTextNode
 */

/**
 * @typedef {{ type: string, data: Record<string, unknown> }} ContentBlock
 */

/**
 * @typedef {{ url: string, alt: string }} FeaturedImage
 */

/**
 * @typedef {{ id: number, slug: string, title: string, excerpt: string, date: string, modified: string, featuredImage: FeaturedImage | null, category: string | null }} PostSummary
 */

/**
 * @typedef {PostSummary & { blocks: ContentBlock[] }} PostDetail
 */

export {};
