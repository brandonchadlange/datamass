import dynamic from "next/dynamic";
import { ComponentType } from "react";

// Define the base props interface that all components will extend
export interface BaseComponentProps {
  key?: string;
  className?: string;
}

// Component registry type definition
export type ComponentRegistry = {
  [key: string]: ComponentType<any>;
};

// Dynamic imports for all components
const components: ComponentRegistry = {
  Header: dynamic(() => import("./Header")),
  ProductList: dynamic(() => import("./ProductList")),
  ProductGrid: dynamic(() => import("./ProductGrid")),
};

// Component loader function
export function loadComponent(type: string) {
  const Component = components[type];
  if (!Component) {
    console.warn(`Component type "${type}" not found in registry`);
    return null;
  }
  return Component;
}

export default components;
