export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-400">
            © {new Date().getFullYear()} SmartFarm Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
