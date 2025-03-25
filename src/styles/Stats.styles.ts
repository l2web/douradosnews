export const statsStyles = {
  container: "bg-gradient-to-r from-yellow-100 to-purple-100 py-16",
  contentWrapper: "container mx-auto",
  grid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  column: "flex flex-col",
  title: {
    main: "text-4xl font-bold text-gray-700 mb-2",
    sub: "text-2xl font-bold text-blue-500 mb-6",
    small: "text-2xl font-bold text-gray-700 mb-6"
  },
  source: "text-gray-600 mb-8",
  divider: "border-t border-gray-300 pt-6 mb-6",
  featuresGrid: "grid grid-cols-2 gap-6",
  feature: {
    container: "flex items-center gap-3",
    icon: {
      container: "w-12 h-12 rounded-full flex items-center justify-center text-white",
      yellow: "bg-yellow-400",
      orange: "bg-[#F97316]",
      blue: "bg-blue-500"
    },
    text: "text-xl text-gray-700"
  },
  image: {
    container: "mb-4",
    img: "w-full h-auto rounded-lg"
  },
  followers: {
    container: "flex justify-end",
    wrapper: "flex flex-col items-center",
    number: "text-5xl font-bold text-blue-500",
    label: "text-gray-600"
  }
}; 