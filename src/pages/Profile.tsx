
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Bell, Calendar, Users } from "lucide-react";
import { motion } from "framer-motion";

// Mock data - In a real app, this would come from an API/database
const pastEvents = [
  {
    id: 1,
    title: "AI Innovation Summit",
    date: "January 15, 2024",
    category: "Tech",
    completed: true,
  },
  {
    id: 2,
    title: "Startup Funding Workshop",
    date: "February 1, 2024",
    category: "Startup",
    completed: true,
  },
];

const achievements = [
  {
    id: 1,
    title: "Early Bird",
    description: "Attended 5 early-bird events",
    icon: "🌅",
  },
  {
    id: 2,
    title: "Tech Enthusiast",
    description: "Participated in 10 tech events",
    icon: "💻",
  },
];

const notifications = [
  {
    id: 1,
    title: "New Tech Event",
    message: "A new AI workshop has been scheduled in your area",
    date: "2 hours ago",
  },
  {
    id: 2,
    title: "Event Reminder",
    message: "Your next event starts in 24 hours",
    date: "5 hours ago",
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold">
              JD
            </div>
            <div>
              <h1 className="text-2xl font-bold">John Doe</h1>
              <p className="text-gray-600">Tech enthusiast & startup founder</p>
            </div>
          </div>

          <Tabs defaultValue="past-events" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
              <TabsTrigger value="past-events">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="achievements">
                <Trophy className="w-4 h-4 mr-2" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="notifications">
                <Bell className="w-4 h-4 mr-2" />
                Alerts
              </TabsTrigger>
              <TabsTrigger value="communities">
                <Users className="w-4 h-4 mr-2" />
                Communities
              </TabsTrigger>
            </TabsList>

            <TabsContent value="past-events" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Past Events</h2>
              <div className="grid gap-4">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-medium">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.date}</p>
                    </div>
                    <Badge variant="secondary">{event.category}</Badge>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Your Achievements</h2>
              <div className="grid gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="bg-white p-4 rounded-lg shadow-sm border flex items-center space-x-4"
                  >
                    <div className="text-2xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Notifications</h2>
              <div className="grid gap-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="bg-white p-4 rounded-lg shadow-sm border"
                  >
                    <h3 className="font-medium">{notification.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {notification.date}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="communities" className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Your Communities</h2>
              <div className="grid gap-4">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h3 className="font-medium">Tech Innovators Network</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Connected with 45 members
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" className="mr-2">
                      View Discussions
                    </Button>
                    <Button>Start a Thread</Button>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h3 className="font-medium">Startup Founders Circle</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Connected with 32 members
                  </p>
                  <div className="mt-4">
                    <Button variant="outline" className="mr-2">
                      View Discussions
                    </Button>
                    <Button>Start a Thread</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
