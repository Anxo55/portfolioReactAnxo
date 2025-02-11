// ImageComponent.js
const ImageComponent = ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      className="w-16 h-16 hover:scale-110 transition-transform duration-300"
    />
  );
  
  export default ImageComponent;
  