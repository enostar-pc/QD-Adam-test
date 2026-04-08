"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const PhotoGallery = ({
  animationDelay = 0.5,
}: {
  animationDelay?: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  const imageSize = isMobile ? 180 : isTablet ? 320 : 380;
  const xOffset = isMobile ? 35 : isTablet ? 140 : 225;

  useEffect(() => {
    // First make the container visible with a fade-in
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay * 1000);

    // Then start the photo animations after a short delay
    const animationTimer = setTimeout(
      () => {
        setIsLoaded(true);
      },
      (animationDelay + 0.4) * 1000
    ); // Add 0.4s for the opacity transition

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(animationTimer);
    };
  }, [animationDelay]);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1, // Reduced from 0.3 to 0.1 since we already have the fade-in delay
      },
    },
  };

  // Animation variants for each photo
  const photoVariants = {
    hidden: () => ({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      // Keep the same z-index throughout animation
    }),
    visible: (custom: { x: any; y: any; order: number }) => ({
      x: custom.x,
      y: custom.y,
      rotate: 0, // No rotation
      scale: 1,
      transition: {
        type: "spring" as any,
        stiffness: 70,
        damping: 12,
        mass: 1,
        delay: custom.order * 0.15, // Explicit delay based on order
      },
    }),
  };

  // Photo positions - horizontal layout with responsive offsets
  const photos = [
    {
      id: 1,
      order: 0,
      x: `-${xOffset * 1.5}px`,
      y: isMobile ? "-10px" : "15px",
      zIndex: 50,
      direction: "left" as Direction,
      src: "https://content.jdmagicbox.com/v2/comp/kanyakumari/n7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-rpe69gaav4-250.jpg?w=640&q=75",
    },
    {
      id: 2,
      order: 1,
      x: `-${xOffset * 0.75}px`,
      y: isMobile ? "15px" : "32px",
      zIndex: 40,
      direction: "left" as Direction,
      src: "https://content.jdmagicbox.com/v2/comp/kanyakumari/n7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-38xdnkr8g5-250.jpg?w=640&q=75",
    },
    {
      id: 3,
      order: 2,
      x: "0px",
      y: isMobile ? "0px" : "8px",
      zIndex: 30,
      direction: "right" as Direction,
      src: "https://content.jdmagicbox.com/v2/comp/kanyakumari/n7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-9q9yni8m6h-250.jpg?w=640&q=75",
    },
    {
      id: 4,
      order: 3,
      x: `${xOffset * 0.75}px`,
      y: isMobile ? "15px" : "22px",
      zIndex: 20,
      direction: "right" as Direction,
      src: "https://content.jdmagicbox.com/v2/comp/kanyakumari/n7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-9g5chjyfmw-250.jpg?w=640&q=75",
    },
    {
      id: 5,
      order: 4,
      x: `${xOffset * 1.5}px`,
      y: isMobile ? "-10px" : "44px",
      zIndex: 10,
      direction: "left" as Direction,
      src: "https://content.jdmagicbox.com/v2/comp/kanyakumari/n7/9999p4653.4653.250514135501.z3n7/catalogue/adams-academy-karungal-kanyakumari-tutorials-wp7dv5d7x1-250.jpg?w=640&q=75",
    },
  ];

  return (
    <div className="mt-40 relative">
       <div className="absolute inset-0 max-md:hidden top-[200px] -z-10 h-[300px] w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] dark:bg-[linear-gradient(to_right,#a8a29e_1px,transparent_1px),linear-gradient(to_bottom,#a8a29e_1px,transparent_1px)]"></div>
      <p className="lg:text-md my-2 text-center text-xs font-light uppercase tracking-widest text-slate-600 dark:text-slate-400">
      A Journey Through Visual Stories
      </p>
      <h3 className="z-20 mx-auto max-w-2xl justify-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text py-3 text-center text-4xl text-transparent dark:bg-gradient-to-r dark:from-slate-100 dark:via-slate-200 dark:to-slate-100 dark:bg-clip-text md:text-7xl font-extrabold tracking-tight">
        Adams Academy <span className="text-rose-500"> Gallery</span>
      </h3>
      <div className="relative mb-8 mt-6 md:mt-10 h-[240px] md:h-[550px] w-full flex items-center justify-center px-4 overflow-visible">
        <motion.div
          className="relative mx-auto flex w-full max-w-7xl justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="relative flex w-full justify-center"
            variants={containerVariants}
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
          >
            <div style={{ height: imageSize, width: imageSize }} className="relative">
              {/* Render photos in reverse order so that higher z-index photos are rendered later in the DOM */}
              {[...photos].reverse().map((photo) => (
                <motion.div
                  key={photo.id}
                  className="absolute left-0 top-0"
                  style={{ zIndex: photo.zIndex }} // Apply z-index directly in style
                  variants={photoVariants}
                  custom={{
                    x: photo.x,
                    y: photo.y,
                    order: photo.order,
                  }}
                >
                  <Photo
                    width={imageSize}
                    height={imageSize}
                    src={photo.src}
                    alt="Academy photo"
                    direction={photo.direction}
                    onClick={() => setSelectedImage(photo.src)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full justify-center mt-2 md:mt-0 mb-12">
      <Button className="px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-900 text-white hover:bg-slate-800 hover:text-white dark:bg-slate-100 dark:text-slate-900">
        View All Stories
      </Button>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md border border-white/20 text-white"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="w-full h-full object-contain shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

function getRandomNumberInRange(min: number, max: number): number {
  if (min >= max) {
    throw new Error("Min value should be less than max value");
  }
  return Math.random() * (max - min) + min;
}

type Direction = "left" | "right";

export const Photo = ({
  src,
  alt,
  className,
  direction,
  width,
  height,
  onClick,
}: {
  src: string;
  alt: string;
  className?: string;
  direction?: Direction;
  width: number;
  height: number;
  onClick?: () => void;
}) => {
  const [rotation, setRotation] = useState<number>(0);
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  useEffect(() => {
    const randomRotation =
      getRandomNumberInRange(1, 4) * (direction === "left" ? -1 : 1);
    setRotation(randomRotation);
  }, [direction]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  const resetMouse = () => {
    x.set(200);
    y.set(200);
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      whileTap={{ scale: 1.2, zIndex: 9999 }}
      whileHover={{
        scale: 1.1,
        rotateZ: 2 * (direction === "left" ? -1 : 1),
        zIndex: 9999,
      }}
      whileDrag={{
        scale: 1.1,
        zIndex: 9999,
      }}
      initial={{ rotate: 0 }}
      animate={{ rotate: rotation }}
      style={{
        width,
        height,
        perspective: 400,
        zIndex: 1,
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      className={cn(
        className,
        "relative mx-auto shrink-0 cursor-grab active:cursor-grabbing"
      )}
      onMouseMove={handleMouse}
      onMouseLeave={resetMouse}
      onClick={onClick}
      draggable={false}
      tabIndex={0}
    >
      <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-300 ring-1 ring-black/5 dark:ring-white/10">
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 z-10 flex items-center justify-center opacity-0 hover:opacity-100">
           <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/40">
             <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
                <div className="w-2 h-2 bg-white rounded-full" />
             </motion.div>
           </div>
        </div>
        <motion.img
          className={cn("rounded-3xl object-cover h-full w-full")}
          src={src}
          alt={alt}
          draggable={false}
        />
      </div>
    </motion.div>
  );
};
