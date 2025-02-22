
import { FeaturedEvents } from "@/components/FeaturedEvents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Your Next Tech Event
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join the community of innovators, entrepreneurs, and lifelong learners
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search events..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm"
              />
            </div>
            <Button className="bg-accent hover:bg-accent/90">
              Search Events
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Events Section */}
      <FeaturedEvents />
    </div>
  );
};

export default Index;
