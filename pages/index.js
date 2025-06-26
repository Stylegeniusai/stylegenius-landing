import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033] flex items-center justify-center">
      {/* Single Hero Section */}
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        {/* Title + Avatar Row */}
        <div className="flex items-center justify-center gap-12 mb-16">
          <div className="text-left">
            <h1 className="text-[56px] md:text-[80px] font-black leading-[1.1] tracking-tight">
              Your personal <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">shopping</span>
              <br />
              & <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">styling</span> assistant
            </h1>
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
        <p className="text-[28px] text-[#6D6D7A] mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
          It's like having a best friend who's amazing at style and gives great advice.
        </p>

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
    </main>
  );
}