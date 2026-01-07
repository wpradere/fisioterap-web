// components/Dandelion.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DandelionProps {
  autoPlay?: boolean;
  interval?: number;
  size?: number;
}

interface Seed {
  id: number;
  x: number;
  y: number;
  z: number;
  delay: number;
  drift: number;
  scale: number;
  opacity: number;
}

const Dandelion: React.FC<DandelionProps> = ({ 
  autoPlay = true,
  interval = 10000,
  size = 300
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);
  const [seeds, setSeeds] = useState<Seed[]>([]);
  const [allSeeds, setAllSeeds] = useState<Seed[]>([]);

  const generateSeeds = () => {
    const seedArray: Seed[] = [];
    const numSeeds = 80;
    const radius = size * 0.2;
    const phi = Math.PI * (3 - Math.sqrt(5));
    
    for (let i = 0; i < numSeeds; i++) {
      const y = 1 - (i / (numSeeds - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      
      const x = Math.cos(theta) * radiusAtY * radius;
      const z = Math.sin(theta) * radiusAtY * radius;
      const yPos = y * radius;
      
      seedArray.push({
        id: i,
        x,
        y: yPos,
        z,
        delay: Math.random() * 0.5,
        drift: Math.random() * 200 - 100,
        scale: 0.5 + (z + radius) / (radius * 2) * 0.5,
        opacity: 0.3 + (z + radius) / (radius * 2) * 0.4
      });
    }
    
    return seedArray.sort((a, b) => a.z - b.z);
  };

  // Generar semillas solo en el cliente
  useEffect(() => {
    setIsMounted(true);
    setAllSeeds(generateSeeds());
  }, [size]);

  const triggerBlow = () => {
    if (!isBlowing) {
      setIsBlowing(true);
      setSeeds(allSeeds);
      
      setTimeout(() => {
        setIsBlowing(false);
        setSeeds([]);
      }, 5500);
    }
  };

  useEffect(() => {
    if (autoPlay && isMounted) {
      const timer = setInterval(() => {
        triggerBlow();
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, isBlowing, isMounted]);

  const stemHeight = size * 0.5;
  const centerSize = size * 0.1;

  // No renderizar hasta que esté montado en el cliente
  if (!isMounted) {
    return (
      <div 
        className="relative" 
        style={{ width: `${size}px`, height: `${size}px` }}
      />
    );
  }

  return (
    <div 
      className="relative" 
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/* Contenedor del tallo y centro */}
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          transformOrigin: 'bottom center',
          x: '-50%'
        }}
        animate={isBlowing ? { rotate: [0, 5, -2, 0] } : {}}
        transition={{ duration: 1.2 }}
      >
        {/* Tallo */}
        <svg
          width="4"
          height={stemHeight}
          style={{ margin: '0 auto', display: 'block' }}
        >
          <path
            d={`M 2 ${stemHeight} Q 2 ${stemHeight * 0.75}, 2 ${stemHeight * 0.5} Q 2 ${stemHeight * 0.25}, 2 0`}
            stroke="#8B6F5C"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* Centro del diente de león */}
        <div
          className="absolute bg-yellow-200 rounded-full shadow-md"
          style={{
            width: `${centerSize}px`,
            height: `${centerSize}px`,
            top: `-${centerSize / 2}px`,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 50
          }}
        >
          <motion.div
            className="w-full h-full rounded-full bg-amber-50"
            animate={isBlowing ? { scale: [1, 0.95, 1] } : {}}
            transition={{ duration: 1.2 }}
          />
        </div>
      </motion.div>

      {/* Semillas estáticas */}
      {!isBlowing && allSeeds.map((seed) => (
        <motion.div
          key={`static-${seed.id}`}
          className="absolute"
          style={{
            top: '50%',
            left: '50%',
            x: seed.x - 2,
            y: seed.y - 2,
            opacity: seed.opacity,
            transform: `scale(${seed.scale})`,
            zIndex: Math.round(seed.z)
          }}
        >
          <div className="relative">
            <div className="absolute" style={{ top: '-10px', left: '-5px' }}>
              <svg width="12" height="12" viewBox="0 0 12 12">
                <circle cx="6" cy="6" r="4" fill="white" opacity="0.7" />
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 6 + Math.cos(rad) * 2;
                  const y1 = 6 + Math.sin(rad) * 2;
                  const x2 = 6 + Math.cos(rad) * 4;
                  const y2 = 6 + Math.sin(rad) * 4;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="white"
                      strokeWidth="0.5"
                      opacity="0.8"
                    />
                  );
                })}
              </svg>
            </div>
            <div className="w-1 h-1.5 bg-gray-600 rounded-full opacity-60" />
          </div>
        </motion.div>
      ))}

      {/* Semillas volando */}
      <AnimatePresence>
        {isBlowing && seeds.map((seed) => (
          <motion.div
            key={`flying-${seed.id}`}
            className="absolute"
            style={{
              top: '50%',
              left: '50%',
              zIndex: Math.round(seed.z)
            }}
            initial={{
              x: seed.x - 2,
              y: seed.y - 2,
              opacity: seed.opacity,
              scale: seed.scale
            }}
            animate={{
              x: [seed.x, seed.x + seed.drift + 300],
              y: [seed.y, seed.y - 400 + Math.random() * 100],
              opacity: [seed.opacity, seed.opacity * 0.8, 0],
              scale: [seed.scale, seed.scale * 0.8, seed.scale * 0.6],
              rotate: [0, 360 + Math.random() * 180]
            }}
            transition={{
              duration: 5,
              delay: seed.delay,
              ease: "easeOut"
            }}
          >
            <div className="relative">
              <div className="absolute" style={{ top: '-10px', left: '-5px' }}>
                <svg width="12" height="12" viewBox="0 0 12 12">
                  <circle cx="6" cy="6" r="4" fill="white" opacity="0.7" />
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 6 + Math.cos(rad) * 2;
                    const y1 = 6 + Math.sin(rad) * 2;
                    const x2 = 6 + Math.cos(rad) * 4;
                    const y2 = 6 + Math.sin(rad) * 4;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="white"
                        strokeWidth="0.5"
                        opacity="0.8"
                      />
                    );
                  })}
                </svg>
              </div>
              <div className="w-1 h-1.5 bg-gray-600 rounded-full opacity-60" />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Dandelion;