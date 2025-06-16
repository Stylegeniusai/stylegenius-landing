import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#F6F6F6] text-[#202033]">
      {/* Navigation */}
      <header className="container mx-auto px-6 py-8 flex items-center justify-between max-w-6xl">
        <h1 className="text-3xl font-bold">
          <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">
            StyleGenius
          </span>
        </h1>
        <a
          href="#download"
          className="rounded-[30px] bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-8 py-4 text-white font-semibold text-[16px] shadow-lg hover:scale-105 transition"
        >
          Download App
        </a>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 text-center max-w-4xl">
        <div className="mb-12">
          <Image
            src="/mainavatar.png"
            alt="StyleGenius Avatar"
            width={200}
            height={200}
            className="mx-auto rounded-full shadow-lg"
          />
        </div>
        
        <h2 className="text-[36px] md:text-[42px] font-bold leading-tight mb-8">
          Finally - a personal stylist who actually knows{" "}
          <span className="bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] bg-clip-text text-transparent">
            YOU
          </span>
        </h2>
        
        <p className="text-[18px] text-[#6D6D7A] mb-12 max-w-3xl mx-auto leading-relaxed">
          StyleGenius learns your unique style, remembers your wardrobe, and understands your body type to give you perfect outfit advice every single time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="rounded-[30px] bg-gradient-to-r from-[#FF70D9] to-[#6EC1E4] px-10 py-5 text-white font-semibold text-[18px] shadow-lg hover:scale-105 transition"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="rounded-[30px] bg-white border-2 border-[#E8E8E8] px-10 py-5 text-[#202033] font-semibold text-[18px] hover:border-[#FF70D9] transition"
          >
            Download for Android
          </a>
        </div>
      </section>

      {/* Simple Features */}
      <section className="container mx-auto px-6 py-24 max-w-4xl text-center">
        <h3 className="text-[32px] font-bold mb-16">
          It's like having a best friend who's amazing at style
        </h3>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-[20px] font-semibold mb-4">Knows Your Wardrobe</h4>
            <p className="text-[#6D6D7A] text-[16px] leading-relaxed">
              Remembers every piece you own and suggests perfect combinations.
            </p>
          </div>
          
          <div>
            <h4 className="text-[20px] font-semibold mb-4">Learns Your Style</h4>
            <p className="text-[#6D6D7A] text-[16px] leading-relaxed">
              Gets smarter with every interaction, understanding what you love.
            </p>
          </div>
          
          <div>
            <h4 className="text-[20px] font-semibold mb-4">Always Available</h4>
            <p className="text-[#6D6D7A] text-[16px] leading-relaxed">
              24/7 style advice whenever you need it, right in your pocket.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-[14px] text-[#6D6D7A] border-t border-[#E8E8E8] mt-20">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} StyleGenius — affiliate links may earn us a commission.
          <div className="mt-3">
            <a href="/privacy" className="underline mr-4 hover:text-[#FF70D9]">
              Privacy
            </a>
            •
            <a href="/cookies" className="underline mx-4 hover:text-[#FF70D9]">
              Cookies
            </a>
            •
            <a href="mailto:ai@stylegenius.app" className="underline ml-4 hover:text-[#FF70D9]">
              ai@stylegenius.app
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}