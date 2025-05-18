export const HeroBackground = () => {
    return (
        <>
            <div className="absolute inset-0 bg-gradient-to-bl from-teal-500 from-[50%] to-white"></div>

            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0,50 Q25,30 50,50 T100,50 T150,50 T200,50"
                        stroke="white"
                        strokeWidth="8"
                        fill="none"
                        className="animate-pulse"
                        style={{
                            animation: "pulse 8s ease-in-out infinite",
                            transformOrigin: "center",
                            transform: "scale(5) rotate(-20deg) translateY(10%)"
                        }}
                    />
                </svg>
            </div>
        </>
    );
};