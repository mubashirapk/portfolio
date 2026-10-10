import React from 'react';
import * as Icons from 'lucide-react';

export default function DynamicIcon({ name, size = 20, className = '', ...props }) {
  // Normalize or fallback
  const IconComponent = Icons[name] || Icons.CheckCircle || Icons.Activity;
  return <IconComponent size={size} className={className} {...props} />;
}
