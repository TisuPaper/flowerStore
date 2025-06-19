'use client';
import { Variants } from 'framer-motion';
import ProductCard from './ProductCard';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturedProducts() {
  const products = [
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeGvJVRZQ10p4ZHMqfIGh7olxDeLZVc2bIPfmddnI6O6nyHbZ8JzIXcYFCloaDOt_l9qx1YJ9c9ddJ_DV-kJQeJtjih5QIicU_5b0QTx1ZiEZDIpCS0FTA5vf4m8tPV1Rr0_cxRWHFZO7tOgV3hDD2kl809C0Oal0g2-Atgxes8d4K3dB7PDwicG6Lrjh8tIU9ruzZREsuWbR8dX-GdixtjOyuvF1enlkdsqFscWCFnNxTO3QV9283LqnQzX9XxGlGGQS5TiFLF0tF",
      title: "Classic Rose Bouquet",
      description: "A timeless symbol of love and romance."
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfpBuAwda-82azvGirYjnAF8C7vJBylkGELCREnW1eUBFraZw02HSNrcVAorXO2A2gsuEu2MW-eMc4bK1pKp9JymCkyoRk0eD0zzQSGANilfQFE99-cy_OwPa3yuzXZk4La2qvp6fcUxK5aleeUANf2zZt8Y4mGgY5BKoQWd5qGOWz9DjFFTOgWeSrAv1YakgxIccTDMpHdAFzIgjxNgLUDxo-wlyFd_CfDwukQuAl-99kyD4XZAROd7AOgdRvCto7DnxVuFTR4br",
      title: "Elegant Lily Arrangement",
      description: "Sophisticated and fragrant, perfect for any occasion."
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmlkfanMcm--3jXw_ggrR9Hfsl_xMtt9FDRuqsp8T5jBI2G5uFvF91Riw09cVoQFs-8Eh1sY0UxP0Hzh3GUCU-KzfzxHKJ2DwPo94faFAa6Jh8hGTVmjBR_8Vo9kuD-FsAJGrPeufcx-1BPBzkYVczj-96blT4YDTUpQ5VmF8MZnN4GKVZtyG4Gnc3niY3OQiUp2BZkPTrxYg2NKVy802Xs1FkOLHj7V4oU5a5njwDK-USN0v1lMLQrcDiz9Zncaz3AYpYvwH1wa3S",
      title: "Sunny Sunflower Delight",
      description: "Bring sunshine into their day with this cheerful bouquet."
    }
  ];

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <motion.h2 
        className="text-[#181112] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Products
      </motion.h2>
      <div className="w-full">
        <motion.div 
          className="grid grid-cols-3 gap-6 p-4 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <ProductCard 
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}