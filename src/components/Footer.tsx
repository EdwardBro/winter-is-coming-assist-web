import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-0">
      <p>&copy; {currentYear} EdwardBro. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
