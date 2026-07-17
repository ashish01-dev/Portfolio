import { getTotalViews, getOrdinalSuffix } from "@/lib/umami";
import Container from "../container";
// import DiaRainbow from "../icons/dia-rainbow";

const Footer = async () => {
  const views = await getTotalViews();

  return (
    <Container className="relative space-y-4">
      <div className="relative flex flex-col items-center justify-between px-8 sm:flex-row">
        <p className="font-mono text-xs text-black/40 dark:text-white/40">
          © 2026 All rights reserved.
        </p>
        {/* <p className="font-mono text-xs font-medium text-black/40 dark:text-white/40">
        Designed{" "}
        <span className="font-serif text-lg text-black italic dark:text-white">
          &
        </span>{" "}
        Developed by{" "}
        <span className="font-semibold text-black dark:text-white">
          Abhishek
        </span>
      </p> */}

        {views !== null && views > 0 && (
          <p className="font-mono text-xs font-medium text-black/40 dark:text-white/40">
            You are the{" "}
            <span className="text-black dark:text-white">
              {views}
              <sup className="text-[0.65em]">{getOrdinalSuffix(views)}</sup>
            </span>{" "}
            visitor
          </p>
        )}
      </div>

      {/*<DiaRainbow />*/}
    </Container>
  );
};

export default Footer;
