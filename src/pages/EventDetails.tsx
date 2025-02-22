
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Globe, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// This would typically come from an API or database
const getEventById = (id: number) => {
  return FEATURED_EVENTS.find(event => event.id === id);
};

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
    description: "Join us for the largest gathering of tech startups in San Francisco. Network with founders, investors, and industry leaders while learning about the latest trends in technology and entrepreneurship.",
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
    description: "Learn how to lead digital transformation initiatives in your organization. This workshop covers the latest tools, methodologies, and best practices for successful digital transformation.",
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
    description: "Develop a growth mindset and unlock your full potential. This masterclass combines practical exercises with proven techniques for personal and professional development.",
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = getEventById(Number(id));

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Event not found</h1>
        <Button onClick={() => navigate("/")} className="mt-4">
          <ArrowLeft className="mr-2" />
          Back to Events
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-8 hover:bg-accent/10"
        >
          <ArrowLeft className="mr-2" />
          Back to Events
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-4 right-4 bg-accent text-white">
                {event.category}
              </Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl font-bold">{event.title}</h1>
              
              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="text-accent" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  {event.isOnline ? (
                    <>
                      <Globe className="text-accent" />
                      <span>Virtual Event</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="text-accent" />
                      <span>{event.location}</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {event.description}
              </p>

              <div className="flex items-center justify-between pt-6">
                <span className="text-2xl font-bold text-accent">{event.price}</span>
                <Button className="bg-accent hover:bg-accent/90">
                  Register Now
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventDetails;
