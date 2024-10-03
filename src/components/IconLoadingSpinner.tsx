"use client"

import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export function IconLoadingSpinner({
  size = "md",
  className,
}: {
  size?: "xs" | "sm" | "md" | "lg"
  className?: string
}) {
  return (
    <Loader2
      className={cn(
        "animate-spin size-6",
        className,
        `size-${size}`
      )}
    />
  )
}