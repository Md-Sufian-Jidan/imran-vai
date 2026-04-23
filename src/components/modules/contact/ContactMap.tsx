export default function ContactMap() {
    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden border border-[#d1d5db] shadow-[0_20px_50px_rgba(187,222,231,0.15)] relative bg-white mt-12">
            {/* Top Overlay Gradient for depth */}
            <div className="absolute inset-0 pointer-events-none border-[12px] border-white rounded-xl z-10" />

            <iframe
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(0.3) contrast(1.1) brightness(0.95)" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.356178479847!2d90.5171485750815!3d23.63440347883612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b26864597b%3A0x241094384664087d!2sNarayanganj%20District!5e0!3m2!1sen!2sbd!4v1712440977945!5m2!1sen!2sbd"
            ></iframe>

            {/* Floating Badge - Primary Teal and Navy Text */}
            <div className="absolute bottom-10 left-10 z-20 bg-[#1fb1c1] text-white px-6 py-4 rounded-xl shadow-xl shadow-[#1fb1c1]/20 flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm uppercase tracking-widest font-black opacity-80 leading-none">Status</span>
                    <span className="text-sm font-bold">Available for Projects</span>
                </div>
            </div>

            {/* Navy Accent Corner */}
            <div className="absolute top-0 right-0 p-8 z-20">
                <div className="bg-[#1fb1c1] text-white text-sm font-bold px-4 py-2 rounded-xl uppercase tracking-tighter shadow-lg">
                    Based in Narayanganj
                </div>
            </div>
        </div>
    );
}