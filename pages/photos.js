import HeadInfo from "../components/HeadInfo";
import Image from "next/image";
import PhotosStyles from "../styles/Photos.module.css";
import Link from "next/link";

const photos = ({ photos }) => {
  return (
    <div>
      <HeadInfo title={"next example photos"} />
      <h1>my photos</h1>

      <ul className={PhotosStyles.photos}>
        {photos.map((photo) => {
          return (
            <li key={photo.id}>
              <Link href={`/photos/${photo.id}`}>
                <a>
                  <span>
                    <Image
                      src={photo.thumbnailUrl}
                      width={100}
                      height={100}
                      alt={photo.title}
                    />
                  </span>
                  <span>{photo.title}</span>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default photos;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();
  return {
    props: {
      photos,
    },
  };
};
