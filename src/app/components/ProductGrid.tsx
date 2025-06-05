import { BaseComponentProps } from "./registry";

interface ProductGridProps extends BaseComponentProps {
  columns: number;
  showFilters: boolean;
}

export default function ProductGrid({
  columns,
  showFilters,
  className,
}: ProductGridProps) {
  return (
    <div className={`py-8 ${className || ""}`}>
      <div className="flex gap-6">
        {showFilters && (
          <aside className="w-64">
            <h3 className="text-lg font-medium mb-4">Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Category</label>
                <select className="mt-1 block w-full rounded-md border-gray-300">
                  <option>All Categories</option>
                  <option>Category 1</option>
                  <option>Category 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Price Range</label>
                <select className="mt-1 block w-full rounded-md border-gray-300">
                  <option>All Prices</option>
                  <option>$0 - $50</option>
                  <option>$51 - $100</option>
                  <option>$101+</option>
                </select>
              </div>
            </div>
          </aside>
        )}
        <div
          className={`flex-1 grid gap-4`}
          style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
        >
          {/* This would typically fetch from an API */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className="aspect-square bg-gray-100 rounded-md mb-2" />
              <h3 className="font-medium">Product {i}</h3>
              <p className="text-gray-600">$99.99</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
