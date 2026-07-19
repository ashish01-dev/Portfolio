"use client"

import { useState } from "react"
import { Check, MessageSquare } from "lucide-react"

import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/base/ui/popover"
import { Button } from "@/components/base/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function FeedbackPopover() {
  const [isSent, setIsSent] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState("")

  const handleSend = () => {
    if (!feedbackText.trim()) return
    setIsSent(true)
  }

  const handleCancel = () => {
    setIsOpen(false)
    setIsSent(false)
    setFeedbackText("")
  }

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="flex items-center text-muted-foreground transition-[color] hover:text-foreground">
        <MessageSquare className="size-4" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Feedback</PopoverTitle>
        </PopoverHeader>
        {isSent ? (
          <div className="flex items-center gap-2 text-sm text-green-500">
            <Check className="size-4" />
            Thanks for the feedback!
          </div>
        ) : (
          <>
            <Textarea
              placeholder="Your feedback..."
              className="min-h-24"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" size="sm" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                size="sm"
                onClick={handleSend}
                disabled={!feedbackText.trim()}
              >
                Send
              </Button>
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  )
}
