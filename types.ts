
// Fix: Added React import to resolve the "Cannot find namespace 'React'" error in the TypeScript definition.
import React from 'react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  variant?: 'cyan' | 'red';
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceTier {
  title: string;
  price: string;
  features: string[];
  isPremium?: boolean;
}
