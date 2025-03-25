export const pricingTableStyles = {
  container: "bg-gradient-to-r from-blue-100 to-purple-100 py-16",
  contentWrapper: "container mx-auto",
  header: "flex flex-col md:flex-row justify-between items-center mb-12",
  headerTitle: "text-3xl font-bold text-blue-600",
  pricingGrid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  card: "overflow-hidden",
  cardHeader: "bg-[#F97316] text-white text-center py-6",
  cardTitle: "text-xl",
  cardSubtitle: "mt-2 text-sm",
  cardContent: "pt-6",
  pricingList: "space-y-4",
  pricingItem: "flex justify-between items-center pb-4 border-b",
  pricingInfo: {
    title: "font-semibold",
    description: "text-sm text-gray-500"
  },
  pricingValue: "text-right",
  price: "text-xl font-bold",
  discountBadge: "inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium mb-1",
  note: "text-xs text-gray-500 italic",
  cardFooter: "w-full bg-[#F97316] hover:bg-[#F97316]/90",
  featuresList: "space-y-3 mb-6",
  featureItem: "flex items-start gap-2",
  checkIcon: "h-5 w-5 text-green-500 mt-0.5",
  originalPrice: {
    container: "text-center mb-4",
    label: "text-sm text-gray-500",
    price: "text-xl font-bold line-through text-gray-400"
  },
  promotionalPrice: {
    container: "bg-yellow-50 p-4 rounded-lg text-center",
    label: "text-sm",
    price: "text-2xl font-bold text-[#F97316]",
    note: "text-xs text-gray-500"
  },
  bonusContainer: {
    container: "bg-green-50 p-4 rounded-lg mb-6",
    header: "flex justify-between items-center mb-2",
    title: "font-semibold",
    badge: "px-2 py-1 bg-green-500 text-white text-xs rounded-full",
    description: "mb-2",
    note: "text-xs text-center"
  },
  productionCost: {
    container: "flex justify-between items-center mb-6",
    label: "font-medium",
    price: "text-xl font-bold"
  }
}; 