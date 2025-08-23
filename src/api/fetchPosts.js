import wrapPromise from "../utils/wrapPromis";

export default function fetchPosts(url) {
  const response = fetch(url).then((res) => res.json());

  return wrapPromise(response);
}
