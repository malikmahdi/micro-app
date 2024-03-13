interface IArticle {
  title: string;
  slug: string;
  date_published: Date;
  image: string;
  description: string;
  created_at: Date;
  userId: number;
}

export default IArticle;
