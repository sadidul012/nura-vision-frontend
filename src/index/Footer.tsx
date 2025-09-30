import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>© 2025 LivelinessCheck. All rights reserved.</p>
        <p className="mt-2">
          Contact: <a href="mailto:support@livelinesscheck.com" className="underline">support@livelinesscheck.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
