'use client';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface Product {
  imageUrl: string;
  title: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {products.map((product, index) => (
        <motion.div key={index} variants={itemVariants}>
          <ProductCard 
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}