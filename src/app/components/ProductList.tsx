import { BaseComponentProps } from "./registry";

interface ProductListProps extends BaseComponentProps {
  title: string;
}

export default function ProductList({ title, className }: ProductListProps) {
  return (
    <section className={`py-8 ${className || ""}`}>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* This would typically fetch from an API */}
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">Sample Product 1</h3>
          <p className="text-gray-600">Description goes here</p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="font-medium">Sample Product 2</h3>
          <p className="text-gray-600">Description goes here</p>
        </div>
      </div>
    </section>
  );
}
