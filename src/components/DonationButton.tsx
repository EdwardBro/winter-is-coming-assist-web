import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

interface DonationButtonProps {
  className?: string;
  onClick?: () => void;
  compact?: boolean;
}

const DonationButton: React.FC<DonationButtonProps> = ({ className = '', onClick, compact = false }) => {
  const { t } = useTranslation();

  return (
    <a
      href="https://www.buymeacoffee.com/ed_bro"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-2 rounded-full transition-colors ${
        compact 
          ? 'bg-[#FFDD00]/90 text-black px-3.5 py-1.5 text-sm hover:bg-[#FFDD00]' 
          : 'bg-[#FFDD00] text-black px-4 py-2 hover:bg-[#FFDD00]/90'
      } ${className}`}
      onClick={onClick}
    >
      <Image
        src="/assets/bmc-logo.svg"
        alt="Buy Me a Coffee"
        width={20}
        height={20}
        className={`${compact ? 'w-4 h-4' : 'w-5 h-5'}`}
      />
      <span className={`${compact ? 'font-bold' : ''} text-center`}>{t("footer.buyMeCoffee")}</span>
    </a>
  );
};

export default DonationButton; 