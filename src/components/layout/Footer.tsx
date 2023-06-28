export function Footer() {
  return (
    <footer>
      <div className="flex items-center py-8 px-6 gap-2 max-w-[1120px] m-auto flex-col md:flex-row md:gap-8">
        <img className="w-[140px]" src="/images/logo.svg" alt="Logo" />
        <span className="text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved
        </span>
      </div>
    </footer>
  );
}
