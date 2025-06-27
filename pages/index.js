import Image from "next/image";

export default function LandingPage() {
  // Add CSS for animations
  if (typeof window !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes gradient {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-gradient {
        animation: gradient 3s ease-in-out infinite;
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
    `;
    document.head.appendChild(style);
  }
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033]">
      {/* New Hero Section - Don't Be Dumb */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="mb-48">
            <span className="block text-[72px] md:text-[100px] font-black leading-[0.9]">
              Don't Be Dumb
            </span>
            <span className="block text-[72px] md:text-[100px] font-black leading-[0.9] mt-6">
              Be a <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent animate-gradient">StyleGenius</span>
            </span>
          </h1>
          
          {/* First CTA */}
          <a
            href="https://apps.apple.com/app/id6747178892"
            className="inline-block rounded-[30px] bg-white border-2 border-transparent bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] p-[2px] hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="rounded-[28px] bg-white px-12 py-6 text-[#202033] font-semibold text-[20px]">
              Download for iOS
            </div>
          </a>
        </div>
      </div>

      {/* Shopping and Styling Image Section */}
      <div className="py-48 px-6 mb-80">
        <div className="max-w-6xl mx-auto">
          <Image
            src="/shoppingandstyling.png"
            alt="StyleGenius Features"
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl shadow-2xl animate-fade-in"
          />
        </div>
      </div>

      {/* Original Hero Section - Now Second */}
      <div className="py-64 px-6">
        <div className="container mx-auto text-center max-w-4xl">
          
          {/* Title + Avatar Row */}
          <div className="flex items-center justify-center gap-12 mb-16">
            <div className="text-left">
              <h2 className="text-[56px] md:text-[80px] font-black leading-[1.1] tracking-tight">
                Your personal <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">shopping</span>
                <br />
                & <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">styling</span> assistant
              </h2>
            </div>
            <Image
              src="/mainavatar.png"
              alt="StyleGenius Avatar"
              width={150}
              height={150}
              className="flex-shrink-0 rounded-full shadow-lg"
            />
          </div>

          {/* Subtitle */}
          <div className="mb-20 max-w-3xl mx-auto">
            <p className="text-[28px] text-[#6D6D7A] leading-relaxed font-medium italic text-center px-8">
              "It's like having a best friend who's amazing at style and gives great advice."
            </p>
          </div>

          {/* Phone Screenshot - Coming up from bottom */}
          <div className="mb-16 overflow-hidden">
            <Image
              src="/stylegeniusassistant.png"
              alt="StyleGenius App Screenshot"
              width={300}
              height={600}
              className="mx-auto shadow-2xl translate-y-32"
            />
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col gap-8 justify-center items-center mb-16">
            <a
              href="https://apps.apple.com/app/id6747178892"
              className="rounded-[30px] bg-white border-2 border-transparent bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] p-[2px] hover:scale-105 transition-transform duration-300"
            >
              <div className="rounded-[28px] bg-white px-12 py-6 text-[#202033] font-semibold text-[20px]">
                Download for iOS
              </div>
            </a>
            <div
              className="rounded-[30px] bg-gray-50 border border-[#E8E8E8] px-8 py-4 text-[#9CA3AF] font-medium text-[16px] cursor-not-allowed opacity-50"
            >
              Android - Coming Soon
            </div>
          </div>

          {/* Footer Links */}
          <div className="text-center text-[12px] text-[#6D6D7A]">
            <a href="/privacy" className="underline mr-3 hover:text-[#FF70D9]">
              Privacy Policy
            </a>
            •
            <a href="/terms" className="underline mx-3 hover:text-[#FF70D9]">
              Terms of Use
            </a>
            •
            <a href="/support" className="underline mx-3 hover:text-[#FF70D9]">
              Support
            </a>
            •
            <a href="/cookies" className="underline ml-3 hover:text-[#FF70D9]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}