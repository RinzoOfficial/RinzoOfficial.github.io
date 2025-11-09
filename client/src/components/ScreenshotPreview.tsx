import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ScreenshotPreviewProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ScreenshotPreview({ src, alt, className = "" }: ScreenshotPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.img
        src={src}
        alt={alt}
        className={`rounded-lg border border-primary/20 cursor-pointer hover-elevate transition-all duration-200 ${className}`}
        onClick={() => setIsOpen(true)}
        data-testid={`img-screenshot-${alt.toLowerCase()}`}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(59, 130, 246, 0.3)" }}
      />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
            data-testid="modal-screenshot"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-secondary hover-elevate"
              data-testid="button-close-screenshot"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.img
              src={src}
              alt={alt}
              className="max-w-full max-h-full rounded-lg border border-primary/20"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
