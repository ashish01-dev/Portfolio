"use client"

import { useState } from "react"
import { Check, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export function BlogSubscribe() {
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubscribe = () => {
    if (!email.trim()) return
    setIsSubscribed(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Mail className="size-4" />
          Subscribe
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Subscribe to Newsletter</DialogTitle>
          <DialogDescription>
            Get notified when I publish new blog posts.
          </DialogDescription>
        </DialogHeader>
        {isSubscribed ? (
          <div className="flex items-center gap-2 text-sm text-green-500">
            <Check className="size-4" />
            Thank you for subscribing!
          </div>
        ) : (
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <DialogFooter>
          {!isSubscribed && (
            <Button
              onClick={handleSubscribe}
              disabled={!email.trim()}
            >
              Subscribe
            </Button>
          )}
          {isSubscribed && (
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
