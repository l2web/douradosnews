export const productsStyles = {
  container: "bg-gradient-to-r from-yellow-100 to-purple-100 py-16",
  contentWrapper: "container mx-auto",
  title: "text-4xl font-bold text-gray-700 text-center mb-12",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
  productsList: "space-y-8",
  productItem: {
    container: "flex items-start gap-3",
    icon: {
      container: "w-10 h-10 bg-[#F97316] rounded-full flex items-center justify-center text-white",
      svg: "w-5 h-5"
    },
    content: {
      title: "text-2xl font-bold",
      description: "text-gray-700"
    }
  },
  iconsGrid: "grid grid-cols-2 gap-4",
  iconContainer: "flex justify-center",
  iconWrapper: {
    container: "w-32 h-32 rounded-full flex items-center justify-center",
    orange: "bg-[#F97316]",
    blue: "bg-blue-500",
    image: "w-20 h-20 object-contain",
    svg: "h-16 w-16 text-white"
  },
  fullWidthIcon: "col-span-2"
}; 