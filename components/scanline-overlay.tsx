export function ScanlineOverlay() {
  return (
    <>
      {/* Scanline effect */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="animate-scan absolute inset-x-0 h-[2px] bg-neon-cyan/20" />
      </div>
      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-40 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </>
  )
}
