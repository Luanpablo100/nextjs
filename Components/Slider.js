import SimpleImageSlider from "react-simple-image-slider";

export default function Slider({images}) {

  return (
    <div>
      <SimpleImageSlider
        width={400}
        height={200}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}