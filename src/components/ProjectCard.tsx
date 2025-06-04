// components/ProjectCard.tsx

import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageSrc, tags }) => {
  return (
    <div className="rounded-xl p-6">
      {/* 16:9 이미지 */}
      <div className="w-full aspect-w-16 aspect-h-9 overflow-hidden rounded mb-4 bg-gray-200">
        <img src={imageSrc} alt={title} className="object-cover w-full h-full" />
      </div>

      <h3 className="text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">{title}</h3>
      <p className="text-base lg:text-xl text-gray-700 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 border border-gray-300 rounded-full text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-800 hover:text-white"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
