'use client';
import { useEffect } from 'react';

export default function AdSlot({ slot = '0000000000', className = '' }) {
  const id = process.env.NEXT_PUBLIC_ADSENSE_ID;
  useEffect(() => {
    if (!id) return;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
  }, [id]);
  if (!id) {
    return <div className={`flex h-24 items-center justify-center rounded-xl border border-dashed border-pine/30 text-sm text-pine/60 ${className}`}>Ad space (add NEXT_PUBLIC_ADSENSE_ID)</div>;
  }
  return (
    <div className={className} aria-label="Advertisement">
      <ins className="adsbygoogle block" data-ad-client={id} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
    </div>
  );
}
