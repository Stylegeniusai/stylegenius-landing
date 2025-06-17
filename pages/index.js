import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033] flex items-center justify-center">
      {/* Single Hero Section */}
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        {/* Title + Avatar Row */}
        <div className="flex items-center justify-center gap-12 mb-16">
          <div className="text-left">
            <h1 className="text-[48px] md:text-[64px] font-bold leading-tight">
              Your personal shopping
              <br />
              & styling assistant
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
        <p className="text-[24px] text-[#6D6D7A] mb-16 max-w-2xl mx-auto leading-relaxed">
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
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="#"
            className="rounded-[30px] bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-12 py-6 text-white font-semibold text-[20px] shadow-lg hover:scale-105 transition"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="rounded-[30px] bg-white border-2 border-[#E8E8E8] px-12 py-6 text-[#202033] font-semibold text-[20px] hover:border-[#FF70D9] transition"
          >
            Download for Android
          </a>
        </div>

        {/* Minimal Footer Links */}
        <div className="text-center text-[12px] text-[#6D6D7A]">
          <a href="/privacy" className="underline mr-4 hover:text-[#FF70D9]">
            Privacy Policy
          </a>
          •
          <a href="/cookies" className="underline ml-4 hover:text-[#FF70D9]">
            Cookie Policy
          </a>
        </div>
      </div>
    </main>
  );
}