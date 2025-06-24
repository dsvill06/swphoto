type PictureProps = {
  avif?: string;
  webp?: string;
  src: string;
  alt: string;
  className?: string;
};

const Picture = ({ avif, webp, src, alt, className }: PictureProps) => (
  <picture>
    <source srcSet={avif} type="image/avif" />
    <source srcSet={webp} type="image/webp" />
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
    />
  </picture>
);

export default Picture;
