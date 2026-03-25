export default function AnnouncementBar() {
  return (
    <div
      className="w-full text-center py-2 px-4"
      style={{ backgroundColor: '#c0392b' }}
    >
      <p
        className="text-white font-barlow"
        style={{ fontSize: '11px', letterSpacing: '0.01em' }}
      >
        Spring tune-up special — $49 AC inspection. Call{' '}
        <a
          href="tel:6138588525"
          className="underline font-medium hover:opacity-80 transition-opacity"
        >
          (613) 858-8525
        </a>{' '}
        to book before April 30th.
      </p>
    </div>
  );
}
