import { FileText } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="w-full max-w-2xl mx-auto p-8 text-center">
      <div className="flex justify-center mb-4">
        <FileText className="w-12 h-12 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        Content Coming Soon
      </h3>
      <p className="text-gray-600">
        This section is currently being updated. Please check back later.
      </p>
    </div>
  );
}
