export type Direction = "horizontal" | "vertical";
export type Data = Array<{
  year: Date;
  title: string;
  description: string;
  image?: string;
  events?: Array<{
    date?: Date;
    title: string;
    description: string;
    image?: string;
  }>;
}>;
