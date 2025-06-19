'use client';
import { useState } from 'react';
import ShopHeader from '../components/ShopHeader';
import SearchBar from '../components/SearchBar';
import FilterSection from '../components/FilterSection';
import ProductGrid from '../components/ProductGrid';
import Pagination from '../components/Pagination';

export default function ShopPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  
  // Sample product data
  const products = [
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeGvJVRZQ10p4ZHMqfIGh7olxDeLZVc2bIPfmddnI6O6nyHbZ8JzIXcYFCloaDOt_l9qx1YJ9c9ddJ_DV-kJQeJtjih5QIicU_5b0QTx1ZiEZDIpCS0FTA5vf4m8tPV1Rr0_cxRWHFZO7tOgV3hDD2kl809C0Oal0g2-Atgxes8d4K3dB7PDwicG6Lrjh8tIU9ruzZREsuWbR8dX-GdixtjOyuvF1enlkdsqFscWCFnNxTO3QV9283LqnQzX9XxGlGGQS5TiFLF0tF",
      title: "Classic Rose Bouquet",
      description: "$49.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfpBuAwda-82azvGirYjnAF8C7vJBylkGELCREnW1eUBFraZw02HSNrcVAorXO2A2gsuEu2MW-eMc4bK1pKp9JymCkyoRk0eD0zzQSGANilfQFE99-cy_OwPa3yuzXZk4La2qvp6fcUxK5aleeUANf2zZt8Y4mGgY5BKoQWd5qGOWz9DjFFTOgWeSrAv1YakgxIccTDMpHdAFzIgjxNgLUDxo-wlyFd_CfDwukQuAl-99kyD4XZAROd7AOgdRvCto7DnxVuFTR4br",
      title: "Elegant Lily Arrangement",
      description: "$59.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmlkfanMcm--3jXw_ggrR9Hfsl_xMtt9FDRuqsp8T5jBI2G5uFvF91Riw09cVoQFs-8Eh1sY0UxP0Hzh3GUCU-KzfzxHKJ2DwPo94faFAa6Jh8hGTVmjBR_8Vo9kuD-FsAJGrPeufcx-1BPBzkYVczj-96blT4YDTUpQ5VmF8MZnN4GKVZtyG4Gnc3niY3OQiUp2BZkPTrxYg2NKVy802Xs1FkOLHj7V4oU5a5njwDK-USN0v1lMLQrcDiz9Zncaz3AYpYvwH1wa3S",
      title: "Sunny Sunflower Delight",
      description: "$44.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeGvJVRZQ10p4ZHMqfIGh7olxDeLZVc2bIPfmddnI6O6nyHbZ8JzIXcYFCloaDOt_l9qx1YJ9c9ddJ_DV-kJQeJtjih5QIicU_5b0QTx1ZiEZDIpCS0FTA5vf4m8tPV1Rr0_cxRWHFZO7tOgV3hDD2kl809C0Oal0g2-Atgxes8d4K3dB7PDwicG6Lrjh8tIU9ruzZREsuWbR8dX-GdixtjOyuvF1enlkdsqFscWCFnNxTO3QV9283LqnQzX9XxGlGGQS5TiFLF0tF",
      title: "Pink Peony Bouquet",
      description: "$54.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfpBuAwda-82azvGirYjnAF8C7vJBylkGELCREnW1eUBFraZw02HSNrcVAorXO2A2gsuEu2MW-eMc4bK1pKp9JymCkyoRk0eD0zzQSGANilfQFE99-cy_OwPa3yuzXZk4La2qvp6fcUxK5aleeUANf2zZt8Y4mGgY5BKoQWd5qGOWz9DjFFTOgWeSrAv1YakgxIccTDMpHdAFzIgjxNgLUDxo-wlyFd_CfDwukQuAl-99kyD4XZAROd7AOgdRvCto7DnxVuFTR4br",
      title: "Orchid Collection",
      description: "$69.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmlkfanMcm--3jXw_ggrR9Hfsl_xMtt9FDRuqsp8T5jBI2G5uFvF91Riw09cVoQFs-8Eh1sY0UxP0Hzh3GUCU-KzfzxHKJ2DwPo94faFAa6Jh8hGTVmjBR_8Vo9kuD-FsAJGrPeufcx-1BPBzkYVczj-96blT4YDTUpQ5VmF8MZnN4GKVZtyG4Gnc3niY3OQiUp2BZkPTrxYg2NKVy802Xs1FkOLHj7V4oU5a5njwDK-USN0v1lMLQrcDiz9Zncaz3AYpYvwH1wa3S",
      title: "Tulip Assortment",
      description: "$39.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeGvJVRZQ10p4ZHMqfIGh7olxDeLZVc2bIPfmddnI6O6nyHbZ8JzIXcYFCloaDOt_l9qx1YJ9c9ddJ_DV-kJQeJtjih5QIicU_5b0QTx1ZiEZDIpCS0FTA5vf4m8tPV1Rr0_cxRWHFZO7tOgV3hDD2kl809C0Oal0g2-Atgxes8d4K3dB7PDwicG6Lrjh8tIU9ruzZREsuWbR8dX-GdixtjOyuvF1enlkdsqFscWCFnNxTO3QV9283LqnQzX9XxGlGGQS5TiFLF0tF",
      title: "Wildflower Mix",
      description: "$45.99"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpfpBuAwda-82azvGirYjnAF8C7vJBylkGELCREnW1eUBFraZw02HSNrcVAorXO2A2gsuEu2MW-eMc4bK1pKp9JymCkyoRk0eD0zzQSGANilfQFE99-cy_OwPa3yuzXZk4La2qvp6fcUxK5aleeUANf2zZt8Y4mGgY5BKoQWd5qGOWz9DjFFTOgWeSrAv1YakgxIccTDMpHdAFzIgjxNgLUDxo-wlyFd_CfDwukQuAl-99kyD4XZAROd7AOgdRvCto7DnxVuFTR4br",
      title: "Dahlia Bouquet",
      description: "$49.99"
    }
  ];
  
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
    style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
    <div className="layout-container flex h-full grow flex-col">
      <ShopHeader />
      <SearchBar />
      <FilterSection />
      <ProductGrid products={products} />
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  </div>
  );
}