"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GlowButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean // ✅ Add this
}

export default function GlowButton({
  children,
  className,
  variant = "default",
  size = "default",
  onClick,
  type = "button",
  disabled = false, // ✅ Default false
}: GlowButtonProps) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-300 group-hover:duration-200" />
      <Button
        type={type}
        variant={variant}
        size={size}
        disabled={disabled} // ✅ Forward disabled
        className={cn(
          "relative bg-blue-600 hover:bg-blue-700 text-white border-0 transition-all duration-200",
          className,
          disabled ? "opacity-50 cursor-not-allowed" : "" // optional styling for disabled
        )}
        onClick={onClick}
      >
        {children}
      </Button>
    </div>
  )
}
