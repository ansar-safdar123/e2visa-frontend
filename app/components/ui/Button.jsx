'use client';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-white text-[#1B2333] hover:bg-gray-100',
    secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-[#1B2333]',
    outline: 'border border-gray-300 text-gray-700 hover:border-gray-400',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
      //   className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    <button
    className="px-[33.63px] py-4 rounded-full text-[#1B263B] bg-white hover:bg-gray-100 "

      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 