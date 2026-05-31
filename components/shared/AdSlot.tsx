"use client";

type AdSize = "728x90" | "300x250" | "320x50";

interface AdSlotProps {
  position: string;
  size?: AdSize;
}

const SIZE_CLASSES: Record<AdSize, string> = {
  "728x90": "w-full max-w-[728px] h-[90px]",
  "300x250": "w-[300px] h-[250px]",
  "320x50": "w-full max-w-[320px] h-[50px]",
};

const SIZE_LABELS: Record<AdSize, string> = {
  "728x90": "728×90",
  "300x250": "300×250",
  "320x50": "320×50",
};

export default function AdSlot({ position, size = "728x90" }: AdSlotProps) {
  const isDev = process.env.NODE_ENV === "development";

  if (isDev) {
    return (
      <div className="flex justify-center my-6">
        <div
          className={`${SIZE_CLASSES[size]} flex items-center justify-center bg-gray-100 border border-dashed border-gray-300 rounded-md`}
        >
          <span className="text-xs text-gray-400 font-mono">
            Advertisement · {SIZE_LABELS[size]} · {position}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center my-6">
      {/* AdSense slot — uncomment and configure after approval */}
      {/* <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"
      /> */}
    </div>
  );
}
