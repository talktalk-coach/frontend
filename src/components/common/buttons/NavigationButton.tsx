import Link from 'next/link';

type NavigationButtonVariant = 'primary' | 'oatmeal';

type NavigationButtonProps = {
  href: string;
  label: string;
  variant?: NavigationButtonVariant;
};

export const NavigationButton = ({
  href,
  label,
  variant = 'primary',
}: NavigationButtonProps) => {
  const variantStyle = {
    primary: 'bg-primary text-white hover:bg-primary-gradient',
    oatmeal: 'bg-oatmeal text-brown',
  };

  return (
    <Link
      href={href}
      className={`flex w-full items-center justify-center rounded-full py-4 font-bold shadow-md transition-all ${variantStyle[variant]}`}>
      {label}
    </Link>
  );
};
