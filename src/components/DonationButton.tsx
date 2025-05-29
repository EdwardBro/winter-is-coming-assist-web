import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Coffee } from 'lucide-react';

interface DonationButtonProps {
  className?: string;
  onClick?: () => void;
  compact?: boolean;
}

const DonationButton: React.FC<DonationButtonProps> = ({ className = '', onClick, compact = false }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative">
      <a
        href="https://www.buymeacoffee.com/ed_bro"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`
          flex items-center gap-2 px-4 py-2 rounded-lg font-medium
          bg-[#FFDD00] text-black hover:bg-[#FFDD00]/90
          transition-all duration-300 shadow-lg hover:shadow-xl
          ${compact ? 'text-sm px-3 py-1.5' : 'text-base'}
          min-w-[180px] justify-center
        `}
      >
        <Coffee className={`${compact ? 'w-4 h-4' : 'w-5 h-5'}`} />
        <span>{t("footer.buyMeCoffee")}</span>
      </a>
    </div>
  );
};

export default DonationButton; 