import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { CreditCard, Smartphone, Building2, Heart } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

interface GivingMethodProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  instructions: string[];
}

const GivingMethod: React.FC<GivingMethodProps> = ({ icon, title, description, instructions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="text-church-blue mb-4">
        {icon}
      
      </div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {instructions.map((instruction, index) => (
          <li key={index} className="flex items-start">
            <span className="text-church-gold mr-2">•</span>
            <span className="text-gray-700">{instruction}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const GivingPage: React.FC = () => {
  const givingMethods = [
    /*{
      icon: <CreditCard size={40} />,
      title: "Online Giving",
      description: "Make a secure donation through our online payment system.",
      instructions: [
        "Click the 'Give Now' button below",
        "Enter your donation amount",
        "Fill in your payment details",
        "Receive an instant confirmation"
      ]
    },*/
    {
      icon: <Smartphone size={40} />,
      title: "Tithes and Offrerings",
      description: "Pay your Tithes and Offerings using M-PESA",
      instructions: [
        "Go to M-PESA menu",
        "Select 'Pay Bill'",
        "Enter Business No: 222118",
        "Account: LING#",
        "Enter amount and complete",
        "Or Use Mpesa Send Money To 0114 574 275"
      ]
    },
    {
      icon: <Building2 size={40} />,
      title: "Supporting This Year's Project",
      description: "Support this year's project of buying a GOSPEL TRUCK for evangelism.",
      instructions: [
          "Go to M-PESA menu",
          "Select 'Pay Bill'",
          "Enter Business No: 222118",
          "Account: PREV#",
          "Enter amount and complete"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Give - Prevailing Word Church Ruiru</title>
        <meta name="description" content="Support the ministry of Prevailing Word Church Ruiru through your generous giving. Multiple convenient ways to give and support God's work." />
      </Helmet>

      <PageBanner
        title="Give"
        subtitle="Supporting God's Work Through Generous Giving"
        scriptureText="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
        scriptureReference="2 Corinthians 9:7"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Heart size={48} className="text-church-purple mx-auto mb-6" />
            <h2 className="text-3xl font-serif font-bold text-church-blue mb-4">
              Why We Give
            </h2>
            <p className="text-gray-600">
              Your giving supports our church's mission to spread the Gospel, help those in need, 
              and build God's kingdom. Through your generosity, we can continue to make a difference 
              in our community and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {givingMethods.map((method, index) => (
              <GivingMethod
                key={index}
                icon={method.icon}
                title={method.title}
                description={method.description}
                instructions={method.instructions}
              />
            ))}
          </div>

           <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-serif font-bold text-church-blue mb-6 text-center">
                Give Now
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-gray-700 mb-2">
                    Amount (KES)
                  </label>
                  <input
                    type="number"
                    id="amount"
                    className="input-field"
                    placeholder="Enter amount"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="giving-type" className="block text-gray-700 mb-2">
                    Type of Giving
                  </label>
                  <select id="giving-type" className="input-field">
                    <option value="tithe">Tithe</option>
                    <option value="offering">Offering</option>
                    <option value="project">Church Project</option>
                    <option value="missions">Missions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-field"
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Proceed to Give
                </button>
              </form>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p>Need help with giving? Contact us at:</p>
               <p className="font-semibold">
                    <a href="tel:0114574275" className="text-church-blue hover:underline">0114 574 275</a>
               </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default GivingPage;