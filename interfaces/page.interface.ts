export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopPageAdvantage {
  title: string;
  description: string;
  _id: string;
}

export interface HhDAta {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

export interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface Sravnikus {
  metaTitle: string;
  metaDescription: string;
  _id: string;
}

export interface Learningclub {
  metaTitle: string;
  metaDescription: string;
  _id: string;
}

export interface TopPageModel {
  _id: string;
  tags: string[];
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: number;
  TopPageadvantages: TopPageAdvantage[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh: HhDAta;
  categoryOn: string;
  blog: Blog;
  sravnikus: Sravnikus;
  learningclub: Learningclub;
}
