import CarouselData from "./CarouselData";
import "./carousel.css";
export function Carousel() {
  const data = [
    {
      image: "https://wallpaper.dog/large/20508493.jpg",
      caption: "GTR",
    },
    {
      image: "https://wallpapercave.com/wp/wp2013221.jpg",
      caption: "GTR",
    },
    {
      image:
        "https://images.hdqwalls.com/wallpapers/nissan-skyline-gt-r-r34-need-for-speed-4k-xy.jpg",
      caption: "GTR",
    },
    {
      image:
        "https://p4.wallpaperbetter.com/wallpaper/3/838/547/nissan-skyline-nismo-nissan-skyline-gt-r-r34-nismo-z-tune-wallpaper-preview.jpg",
      caption: "GTR",
    },
    {
      image: "https://wallpapercave.com/wp/ZtylyXh.jpg",
      caption: "GTR",
    },
    {
      image: "https://wallpaper.dog/large/20498644.jpg",
      caption: "GTR",
    },
    {
      image: "https://www.nawpic.com/media/2020/gtr-nawpic-15.jpg",
      caption: "GTR",
    },
    {
      image: "https://wallpapercave.com/wp/qxJOJ4p.jpg",
      caption: "GTR",
    },
    {
      image:
        "https://cutewallpaper.org/22/nissan-gtr-r34-desktop-wallpapers/1811310111.jpg",
      caption: "GTR",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center", margin: "60px auto" }}>
        <div
          style={{
            margin: "0 auto",
          }}
        >
          <CarouselData
            data={data}
            time={2000}
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="120px"
            showNavBtn={true}
            style={{
              textAlign: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
}
