export type InterfacePost = {
  id: string;
  author: string;
  authorEmail?: string;
  title: string;
  article: string;
  date?: string;
  imageUrl: string;
};

export type InterfacePostStyle = {
  size: 'large' | 'small';
  side: 'left' | 'right'
};

export type InterfaceContainer = {
  side: 'left' | 'right'
};
