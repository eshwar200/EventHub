
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  isOnline: boolean;
  category: string;
  imageUrl: string;
  price: string;
  onClick: () => void;
}

export const EventCard = ({
  title,
  date,
  location,
  isOnline,
  category,
  imageUrl,
  price,
  onClick,
}: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-4 right-4 bg-accent text-white">
              {category}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              {isOnline ? <Globe size={16} /> : <MapPin size={16} />}
              <span>{location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <span className="font-semibold text-accent">{price}</span>
          <Button onClick={onClick} variant="secondary" className="hover:bg-accent hover:text-white transition-colors">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
