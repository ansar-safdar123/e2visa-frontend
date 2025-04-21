const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/images/auth/signin/signinImg.png')] bg-cover bg-center">
      <div className="signin-bg rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-[#2EC4B6] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-[#424242]">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner; 