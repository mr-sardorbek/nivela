import { Leaf, RefreshCw, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"



const AnnouncementBar = () => {

  const {t} = useTranslation()
  return (
    <div className="border-b border-[var(--color-surface)]">
       <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 
       py-2 text-[10px] sm:justify-center sm:gap-10 sm:px-6 sm:text-xs md:gap-20">
        <div className="flex items-center gap-2">
         <Leaf size={14}/>
        <span>{t("announcement.shipping")}</span>
        </div>

        <div className="flex items-center gap-2">
        <RefreshCw size={14}/>
        <span>{t("announcement.returns")}</span>
        </div>

        <div className="flex items-center gap-2">
          <ShieldCheck size={14}/>
        <span>{t("announcement.payments")}</span>
        </div>
       </div>
    </div>
  )
}

export default AnnouncementBar
