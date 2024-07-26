import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="bg-purple-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Crazytime Restobar Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">Crazytime Restobar</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-purple-300">Home</a></li>
              <li><a href="#" className="hover:text-purple-300">Menu</a></li>
              <li><a href="#" className="hover:text-purple-300">Events</a></li>
              <li><a href="#" className="hover:text-purple-300">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px]">
        <img src="/placeholder.svg" alt="Signature Drink" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-2">Discover Our Signature Drinks</h1>
          <p className="text-xl">Indulge in our handcrafted cocktails and unique flavors</p>
        </div>
      </section>

      {/* Featured Drinks Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Crazy Mojito", description: "A twist on the classic with a secret ingredient", price: "$12" },
              { name: "Purple Haze", description: "A mesmerizing blend of gin and lavender", price: "$14" },
              { name: "Tropical Storm", description: "A fruity explosion that will transport you to paradise", price: "$13" },
              { name: "Midnight Mystery", description: "A dark and mysterious concoction for the adventurous", price: "$15" },
              { name: "Fizzy Lifting Drink", description: "Our bubbly house special that will lift your spirits", price: "$11" },
              { name: "Golden Sunset", description: "A smooth and mellow drink perfect for relaxation", price: "$13" },
            ].map((drink, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{drink.name}</CardTitle>
                  <CardDescription>{drink.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src="/placeholder.svg" alt={drink.name} className="w-full h-48 object-cover rounded-md" />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="font-bold">{drink.price}</span>
                  <Button>Order Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="bg-purple-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Special Offers</h2>
          <p className="text-xl mb-6">Join us for Happy Hour every day from 5PM to 7PM</p>
          <div className="bg-white text-purple-700 p-4 rounded-lg inline-block">
            <span className="text-2xl font-bold">50% OFF</span>
            <p>on all cocktails</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Crazytime?</h2>
          <p className="text-xl mb-6">Visit us today or make a reservation for an unforgettable night!</p>
          <Button size="lg">Make a Reservation</Button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><MapPin className="mr-2" /> 123 Party Street, Funtown, FC 12345</li>
              <li className="flex items-center"><Phone className="mr-2" /> (555) 123-4567</li>
              <li className="flex items-center"><Clock className="mr-2" /> Open daily: 4PM - 2AM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><Facebook /></a>
              <a href="#" className="hover:text-purple-400"><Instagram /></a>
              <a href="#" className="hover:text-purple-400"><Twitter /></a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <img src="/placeholder.svg" alt="Map" className="w-full h-32 object-cover rounded-md" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;