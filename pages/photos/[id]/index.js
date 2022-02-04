import Image from "next/image";
import Link from "next/link";

const index = ({ photo }) => {
  const { id, title, url } = photo;
  return (
    <div>
      <h2>image{id}</h2>
      <Image src={url} width={500} height={500} />
      <Link href="/photos">뒤로가기</Link>
    </div>
  );
};

export default index;

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const photos = await res.json();
  const ids = photos.map((photo) => photo.id);

  const paths = ids.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};
