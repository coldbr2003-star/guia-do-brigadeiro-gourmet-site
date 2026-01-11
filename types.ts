import React from 'react';

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface ImagePrompt {
  section: string;
  descriptionPt: string;
  descriptionEn: string;
}

export interface ColorPalette {
  name: string;
  hex: string;
  usage: string;
}