import Link from "next/link"
import { Building } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center gap-2">
      <Building className="h-6 w-6" />
      <Link href="/" className="font-semibold">
        HR Portal
      </Link>
    </div>
  )
}
