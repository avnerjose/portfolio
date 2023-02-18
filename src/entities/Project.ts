export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags?: string[];
  imageUrl?: string;
  repoUrl: string;
  webUrl?: string;
}
