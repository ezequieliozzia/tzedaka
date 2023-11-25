import Link from "next/link"

const StyledNavbarButton = ({ href, label }) => {
    return (
      <Link
        href={href}
        className="relative inline-flex items-center justify-center h-12 px-4 rounded-full overflow-hidden 
        border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute 
        before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 
        before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white 
        hover:shadow-indigo-600 hover:before:h-full hover:before:w-full hover:before:opacity-80"
        style={{ minWidth: '6rem' }}
      >
        <span className="relative z-10">{label}</span>
      </Link>
    );
  };

export default StyledNavbarButton;