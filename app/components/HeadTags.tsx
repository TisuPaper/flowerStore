'use client';

export default function HeadTags() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
      <link
        rel="stylesheet"
        as="style"
        onLoad={() => {
          const link = document.querySelector('link[as="style"]');
          if (link) {
            link.setAttribute('rel', 'stylesheet');
          }
        }}
        href="https://fonts.googleapis.com/css2?display=swap&family=Noto+Sans%3Awght%40400%3B500%3B700%3B900&family=Plus+Jakarta+Sans%3Awght%40400%3B500%3B700%3B800"
      />
      <title>Petal & Bloom - Flower Store</title>
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64," />
    </>
  );
}