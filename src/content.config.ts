import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/site' }),
  schema: z.object({
    businessName: z.string(),
    contactEmail: z.string(),
    heroHeadline: z.string(),
    heroSubheadline: z.string(),
    heroCta: z.string(),
    aboutTitle: z.string(),
    aboutParagraphs: z.array(z.string()),
    aboutImage: z.string(),
    aboutImageAlt: z.string(),
    galleryTitle: z.string(),
    gallerySubtitle: z.string(),
    howItWorksTitle: z.string(),
    howItWorksSubtitle: z.string(),
    pricingTitle: z.string(),
    pricingSubtitle: z.string(),
    reviewsTitle: z.string(),
    reviewsSubtitle: z.string(),
    contactTitle: z.string(),
    contactText: z.string(),
    contactCta: z.string(),
    footerCopyright: z.string(),
    mascotGreeting: z.string(),
    mascotText: z.string(),
    mascotCta: z.string(),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/gallery' }),
  schema: z.object({
    image: z.string(),
    alt: z.string(),
    order: z.number(),
  }),
});

const steps = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/steps' }),
  schema: z.object({
    stepNumber: z.number(),
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

const pricing = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/pricing' }),
  schema: z.object({
    name: z.string(),
    price: z.number(),
    currency: z.string().default('MDL'),
    features: z.array(z.string()),
    ctaText: z.string(),
    ctaEmailSubject: z.string(),
    popular: z.boolean().default(false),
    popularLabel: z.string().optional(),
    order: z.number(),
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/reviews' }),
  schema: z.object({
    author: z.string(),
    text: z.string(),
    rating: z.number().min(1).max(5),
    order: z.number(),
  }),
});

export const collections = {
  site,
  gallery,
  steps,
  pricing,
  reviews,
};
