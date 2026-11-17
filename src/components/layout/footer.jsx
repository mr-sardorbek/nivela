import { Logo } from "@/assets";
import {
  SiAppstore,
  SiFacebook,
  SiGoogleplay,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const footerLinks = [
    {
      title: t("footer.shop"),
      links: [
        t("footer.allProducts"),
        t("footer.newArrivals"),
        t("footer.bestSellers"),
        t("footer.deals"),
        t("footer.giftCards"),
      ],
    },
    {
      title: t("footer.help"),
      links: [
        t("footer.faq"),
        t("footer.shipping"),
        t("footer.returns"),
        t("footer.trackOrder"),
        t("footer.sizeGuide"),
      ],
    },
    {
      title: t("footer.company"),
      links: [
        t("footer.about"),
        t("footer.philosophy"),
        t("footer.blog"),
        t("footer.careers"),
        t("footer.contact"),
      ],
    },
  ];

  return (
    <footer>
      <div className="site-container">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 py-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8 lg:py-10">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <img
  src={Logo}
  alt="NIVELA"
  className="h-auto w-36 object-contain"
/>

            <p className="mt-3 max-w-xs text-xs leading-5 text-muted-foreground">
              {t("footer.description")}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <SiInstagram className="size-5 cursor-pointer text-primary-dark transition-colors hover:text-primary" />
              <SiFacebook className="size-5 cursor-pointer text-primary-dark transition-colors hover:text-primary" />
              <SiYoutube className="size-5 cursor-pointer text-primary-dark transition-colors hover:text-primary" />
              <SiX className="size-5 cursor-pointer text-primary-dark transition-colors hover:text-primary" />
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">
                {column.title}
              </h3>

              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Download App */}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">
              {t("footer.downloadApp")}
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 transition-colors hover:border-primary"
              >
                <SiAppstore className="size-6 shrink-0 text-foreground" />

                <div>
                  <p className="text-[9px] text-muted-foreground">
                    {t("footer.downloadOn")}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {t("footer.appStore")}
                  </p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 transition-colors hover:border-primary"
              >
                <SiGoogleplay className="size-6 shrink-0 text-foreground" />

                <div>
                  <p className="text-[9px] text-muted-foreground">
                    {t("footer.getItOn")}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {t("footer.googlePlay")}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col gap-3 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NIVELA. {t("footer.copyright")}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("footer.privacy")}
            </a>

            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("footer.terms")}
            </a>

            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              {t("footer.cookies")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
