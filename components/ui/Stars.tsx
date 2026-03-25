const GOLD = '#e8c547';

type StarsProps = {
  rating: number;
  size?: 'sm' | 'md';
  variant?: 'light' | 'dark';
};

export function Stars({ rating, size = 'md', variant = 'light' }: StarsProps) {
  const dim = variant === 'dark' ? 'rgba(255,255,255,0.12)' : '#e8ecf3';
  const className = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';

  return (
    <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={className} viewBox="0 0 20 20" fill={i < rating ? GOLD : dim}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.369 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.369-2.448a1 1 0 00-1.175 0l-3.369 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}
