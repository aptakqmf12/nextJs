import Head from "next/head";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <>
      <div>
        <h1>wellcome to my blog</h1>
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

/// 서버사이드렌더링 : 페이지에 들어올때마다 서버에 요청해서 데이터를 받아옴(서버에서 만든 html 파일을 그때그때 보여줌)
// 서버데이터를 바꾸고 서버측에서 재start하면 페이지를 새로고침만해도 데이터가 변한게 보인다
// export const getServerSideProps = async () => {
//   const res = await fetch(`http://localhost:8080/api/posts`);
//   const posts = await res.json();

//   return {
//     props: {
//       posts: posts,
//     },
//   };
// };

// 클라이언트 사이드 렌더링
// revalidate의 값에 따라 n초마다 서버에서 새로 조회?
// 빌드를 할때마다 데이터가 갱신된다. 정해진 초 마다 갱신되니까 개꿀
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`
  );
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
    revalidate: 10,
  };
};
