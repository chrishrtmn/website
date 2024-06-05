import { BrandLogos } from "@/utilities/constants/constants";
import Image from "next/image";

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, outerIndex) => (
              <div
                key={`logo-group-${outerIndex}`}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {BrandLogos.map((logo) => (
                  <Image
                    key={`${outerIndex}-${logo.name}`}
                    src={logo.url}
                    width={0}
                    height={0}
                    className="h-10 w-28 px-2 brightness-0 dark:invert"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
