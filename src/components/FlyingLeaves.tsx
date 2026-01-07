import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Leaf {
  id: number;
  x: number;
  delay: number;
  duration: number;
  rotation: number;
  size: number;
  type: number;
}

const FlyingLeaves = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const newLeaves = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
      rotation: Math.random() * 360,
      size: 20 + Math.random() * 30,
      type: Math.floor(Math.random() * 3)
    }));
    
    setLeaves(newLeaves);
  }, []);

  const LeafSVG = ({ type, size }: { type: number; size: number }) => {
    const leafDesigns = [
      <svg key="leaf1" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 3C12 3 6 8 6 14C6 17.31 8.69 20 12 20C15.31 20 18 17.31 18 14C18 8 12 3 12 3Z" fill="#FFB6C1" opacity="0.8"/>
        <path d="M12 3L12 20" stroke="#FFA0B4" strokeWidth="1" opacity="0.6"/>
      </svg>,
      <svg key="leaf2" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2C12 2 7 6 5 12C5 12 7 18 12 22C12 22 17 18 19 12C19 12 17 6 12 2Z" fill="#722F37" opacity="0.8"/>
        <path d="M12 2L12 22" stroke="#5A252B" strokeWidth="1" opacity="0.6"/>
        <path d="M12 8L16 10" stroke="#5A252B" strokeWidth="0.5" opacity="0.5"/>
        <path d="M12 14L16 16" stroke="#5A252B" strokeWidth="0.5" opacity="0.5"/>
      </svg>,
      <svg key="leaf3" width={size} height={size} viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="13" rx="6" ry="9" fill="#FFC0CB" opacity="0.8"/>
        <path d="M12 4L12 22" stroke="#FFB0BD" strokeWidth="1" opacity="0.6"/>
      </svg>
    ];

    return leafDesigns[type];
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{
            left: `${leaf.x}%`,
            bottom: '-50px',
          }}
          animate={{
            y: [0, -1200],
            x: [
              0, 
              Math.sin(leaf.id * 0.5) * 150,
              Math.cos(leaf.id * 0.8) * 200,
              Math.sin(leaf.id * 1.2) * 150,
              Math.cos(leaf.id * 1.5) * 100,
              0
            ],
            rotate: [leaf.rotation, leaf.rotation + 1080],
            opacity: [0, 0.8, 1, 1, 0.6, 0.3, 0],
            scale: [0.5, 1, 1, 0.8, 0.6, 0.4, 0.2]
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            animate={{
              rotate: [0, 20, -20, 15, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <LeafSVG type={leaf.type} size={leaf.size} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FlyingLeaves;