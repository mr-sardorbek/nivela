
import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTranslation } from "react-i18next";

const NewsLetter = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-primary">
      <div className="site-container">
        <div className="flex flex-col sm:px-10 md:px-0 lg:px-0   gap-5 py-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Left content */}
          <div className="flex items-center  gap-3">
            <Mail className="size-7 shrink-0 text-background" />

            <div>
              <h2 className="text-base font-semibold text-background sm:text-lg">
                {t("newsletter.title")}
              </h2>

              <p className="text-xs text-background">
                {t("newsletter.description")}
              </p>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="flex w-full max-w-md items-center gap-1.5">
              <Input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="h-10 min-w-0 flex-1 border border-background bg-white text-sm text-black placeholder:text-gray-400 dark:border-background dark:bg-white/10 dark:text-background dark:placeholder:text-background"
              />

              <Button
                variant="outline"
                className="h-10 shrink-0 border-background bg-transparent px-4 text-xs text-background hover:bg-white/10 hover:text-background sm:px-5"
              >
                {t("newsletter.subscribe")}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
