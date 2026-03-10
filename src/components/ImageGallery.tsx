import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3X3, LayoutGrid, GalleryHorizontal, Images } from "lucide-react";
import ImageLightbox from "./ImageLightbox";
import type { GalleryImage } from "./ImageLightbox";

export type { GalleryImage };

type ViewMode = "grid" | "masonry" | "carousel";

const categoryLabels: Record<GalleryImage["category"], string> = {
  screenshot: "Screenshots",
  mockup: "Mockups",
  diagram: "Diagrams",
  mobile: "Mobile",
};

interface ImageGalleryProps {
  images: GalleryImage[];
}

const BlurImage = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-border cursor-pointer group"
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={image.src}
        alt={image.title || "Project image"}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:shadow-glow ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300 flex items-center justify-center">
        <span className="text-foreground opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium">
          {image.title || "View"}
        </span>
      </div>
    </div>
  );
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const categories = useMemo(() => {
    const cats = [...new Set(images.map((img) => img.category))];
    return ["all", ...cats];
  }, [images]);

  const filtered = useMemo(() => {
    if (activeCategory === "all") return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 rounded-xl border border-border bg-card">
        <div className="text-center">
          <Images className="mx-auto mb-3 text-muted-foreground" size={40} />
          <p className="text-muted-foreground">No images available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header: View mode + Category tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 text-xs rounded-full font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat === "all" ? "All" : categoryLabels[cat as GalleryImage["category"]] || cat}
              <span className="ml-1 opacity-70">
                ({cat === "all" ? images.length : images.filter((i) => i.category === cat).length})
              </span>
            </button>
          ))}
        </div>

        {/* View mode toggles */}
        <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
          {([
            { mode: "grid" as ViewMode, icon: Grid3X3 },
            { mode: "masonry" as ViewMode, icon: LayoutGrid },
            { mode: "carousel" as ViewMode, icon: GalleryHorizontal },
          ]).map(({ mode, icon: Icon }) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === mode ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* Gallery views */}
      <AnimatePresence mode="wait">
        {viewMode === "grid" && (
          <motion.div
            key="grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-2 gap-3"
          >
            {filtered.map((img, i) => (
              <div key={i} className="aspect-video">
                <BlurImage image={img} onClick={() => openLightbox(i)} />
              </div>
            ))}
          </motion.div>
        )}

        {viewMode === "masonry" && (
          <motion.div
            key="masonry"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="columns-2 gap-3 space-y-3"
          >
            {filtered.map((img, i) => (
              <div key={i} className="break-inside-avoid">
                <BlurImage image={img} onClick={() => openLightbox(i)} />
              </div>
            ))}
          </motion.div>
        )}

        {viewMode === "carousel" && (
          <motion.div
            key="carousel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-xl border border-border">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {filtered.map((img, i) => (
                  <div key={i} className="min-w-full aspect-video relative cursor-pointer" onClick={() => openLightbox(i)}>
                    <img
                      src={img.src}
                      alt={img.title || ""}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {img.title && (
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                        <p className="text-foreground text-sm font-medium">{img.title}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel dots */}
            {filtered.length > 1 && (
              <div className="flex justify-center gap-1.5 mt-3">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      i === carouselIndex ? "bg-primary w-6" : "bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image counter */}
      <div className="flex items-center gap-2 text-muted-foreground text-sm">
        <Images size={14} />
        <span>{filtered.length} image{filtered.length !== 1 ? "s" : ""}</span>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={filtered}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};

export default ImageGallery;
