import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    category: string;
    featured: boolean;
    highlights: string[];
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-matrix-dark/50 backdrop-blur-sm rounded-xl overflow-hidden border border-matrix-green/10 hover:border-matrix-green/30 transition-all duration-300 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="h-48 bg-matrix-dark/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-matrix-green/20 text-6xl">
            {project.title.charAt(0)}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-matrix-green transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 bg-matrix-green/10 text-matrix-green text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-white transition-colors"
            >
              GitHub
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-matrix-green hover:text-white transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
