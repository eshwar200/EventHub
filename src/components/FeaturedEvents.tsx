
import { EventCard } from "./EventCard";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const FEATURED_EVENTS = [
  {
    id: 1,
    title: "TechStartup Summit 2024",
    date: "March 15, 2024",
    location: "San Francisco",
    isOnline: false,
    category: "Startup",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    price: "$299",
  },
  {
    id: 2,
    title: "Digital Transformation Workshop",
    date: "March 20, 2024",
    location: "Virtual Event",
    isOnline: true,
    category: "Tech",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
    price: "$99",
  },
  {
    id: 3,
    title: "Growth Mindset Masterclass",
    date: "March 25, 2024",
    location: "New York City",
    isOnline: false,
    category: "Personal Growth",
    imageUrl: "https://images.unsplash.com/photo-1552581234-26160f608093",
    price: "$149",
  },
];

export const FeaturedEvents = () => {
  const handleViewDetails = (eventId: number) => {
    console.log("View details for event:", eventId);
    // TODO: Implement navigation to event details page
  };

  return (
    <section className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent hover:bg-accent/20 transition-colors">
              Featured Events
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Upcoming Tech Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most anticipated tech, startup, and personal growth events.
              Connect with industry leaders and like-minded professionals.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_EVENTS.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onClick={() => handleViewDetails(event.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
