import type { ReactNode } from "react";

export interface CardItem {
  image: string;
  title: string;
  text: string;
}

export interface CheckPassionItem {
  id: number;
  title: string;
}

export interface statisticItem {
  id: number;
  title: string;
  text: string;
}

export interface CompanyLogo {
  id: number;
  name: string;
  icon: string;
}

export interface weDoItItem {
  id: number;
  image: string;
  title: string;
  text: string;
}

export interface TwoBlockSliderData {
  id: number;
  date: string;
  author: string;
  title: string;
  image: string;
}

export interface AnimatedElementProps {
  children: ReactNode;
  duration?: string;
  delay?: string;
  distance?: string;
  className?: string;
}
