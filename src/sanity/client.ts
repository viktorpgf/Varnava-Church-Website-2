import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageReference } from '../types/sanity';

// Read config from Vite environment variables or sessionStorage overrides for interactive testing
export const getSanityConfig = () => {
  const envProjectId = import.meta.env.VITE_SANITY_PROJECT_ID;
  const envDataset = import.meta.env.VITE_SANITY_DATASET;
  const envApiVersion = import.meta.env.VITE_SANITY_API_VERSION;

  // Check interactive session overrides (allows testing without restarting dev server)
  const sessionProjectId = typeof window !== 'undefined' ? sessionStorage.getItem('SANITY_PROJECT_ID') : null;
  const sessionDataset = typeof window !== 'undefined' ? sessionStorage.getItem('SANITY_DATASET') : null;

  const projectId = sessionProjectId || envProjectId || '';
  const dataset = sessionDataset || envDataset || 'production';
  const apiVersion = envApiVersion || '2024-03-01';

  // Check if it's configured with a real project ID (not empty and not the placeholder)
  const isConfigured = Boolean(
    projectId &&
    projectId.trim() !== '' &&
    projectId !== 'your_sanity_project_id_here' &&
    projectId !== 'MY_PROJECT_ID'
  );

  return {
    projectId: projectId.trim(),
    dataset: dataset.trim(),
    apiVersion,
    isConfigured,
  };
};

/**
 * Creates an active Sanity client instance.
 * If not configured, returns a dummy-safe client that throws recognizable errors
 * caught by queries.ts to fall back to demo content.
 */
export const getClient = () => {
  const { projectId, dataset, apiVersion, isConfigured } = getSanityConfig();

  if (!isConfigured) {
    return null;
  }

  const config: ClientConfig = {
    projectId,
    dataset,
    apiVersion,
    useCdn: true, // Use fast CDN caching for public read requests (no secrets required in browser)
    perspective: 'published',
  };

  return createClient(config);
};

// Builder for dynamic Sanity Image URLs
export const getImageBuilder = () => {
  const client = getClient();
  if (!client) return null;
  return imageUrlBuilder(client);
};

/**
 * Builds an optimized image URL from a Sanity image reference
 */
export const urlFor = (source: SanityImageReference | undefined | null) => {
  if (!source || !source.asset) return null;
  const builder = getImageBuilder();
  if (!builder) return null;
  try {
    return builder.image(source);
  } catch {
    return null;
  }
};
