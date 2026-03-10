import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";
import { useState, useCallback, useEffect } from "react";

export interface GalleryImage {
  src: string;
  title?: string;
  description?: string;
  category: "screenshot" | "mockup" | "diagram" | "mobile";
}

interface ImageLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const ImageLightbox = ({ images, currentIndex, isOpen, onClose, onNavigate }: ImageLightboxProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const handlePrev = useCallback(() => {
    onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    setZoom(1);
  }, [currentIndex, images.length, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    setZoom(1);
  }, [currentIndex, images.length, onNavigate]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, handlePrev, handleNext, onClose]);

  const current = images[currentIndex];
  if (!current) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Controls */}
            <div className="absolute -top-12 right-0 flex items-center gap-2 z-10">
              <button onClick={() => setZoom(Math.max(0.5, zoom - 0.25))} className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <ZoomOut size={18} />
              </button>
              <span className="text-sm text-muted-foreground font-medium min-w-[3rem] text-center">{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom(Math.min(3, zoom + 0.25))} className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <ZoomIn size={18} />
              </button>
              <button onClick={toggleFullscreen} className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button onClick={onClose} className="p-2 rounded-lg bg-secondary text-foreground hover:bg-secondary/80 transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card">
              <div className="overflow-auto max-h-[80vh] flex items-center justify-center">
                <img
                  src={current.src}
                  alt={current.title || "Project image"}
                  className="transition-transform duration-300"
                  style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
                  draggable={false}
                />
              </div>
            </div>

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-[-50px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hidden md:block"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-[-50px] top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors hidden md:block"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Caption & counter */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                {current.title && <p className="text-foreground font-medium">{current.title}</p>}
                {current.description && <p className="text-muted-foreground text-sm">{current.description}</p>}
              </div>
              <span className="text-muted-foreground text-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
