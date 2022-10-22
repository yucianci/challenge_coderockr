export type InterfacePost = {
  id: string;
  author: string;
  authorEmail?: string;
  title: string;
  article: string;
  date?: string;
  imageUrl: string;
};

export type InterfacePostSize = {
  size: "large" | "small";
};
