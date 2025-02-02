import React from 'react';
import Link from 'next/link';

interface NavigationProps {
    path: string;
    label: string;
}

export const Navigation = ({ path, label }: NavigationProps) => {
  return <div>
    Navigate to: <Link href={path}>{label}</Link>
  </div>;
};