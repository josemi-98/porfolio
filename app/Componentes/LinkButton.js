import Link from 'next/link';

const LinkButton = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <a className="inline-flex items-center gap-x-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition">
        {children}
      </a>
    </Link>
  );
};

export default LinkButton;
