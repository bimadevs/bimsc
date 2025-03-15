'use client';

import { useEffect } from 'react';

export default function TestErrorPage() {
  useEffect(() => {
    throw new Error('Ini adalah error test untuk menguji komponen Error');
  }, []);

  return null;
} 