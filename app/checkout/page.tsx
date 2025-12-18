"use client";

import { Addons } from "@/components/components/Addons";
import { BillingAddress } from "@/components/components/BillingAddress";
import { ContactInfo } from "@/components/components/ContactInfo";
import { Header } from "@/components/components/Header";
import Hero from "@/components/components/Hero";
import Navbar from "@/components/components/Navbar";
import { OrderSummary } from "@/components/components/OrderSummary";
import { PaymentMethod } from "@/components/components/PaymentMethod";
import { Stepper } from "@/components/components/Stepper";
import { TravelerDetails } from "@/components/components/TravelerDetails";
import React, { useState, useMemo } from "react";

const INITIAL_TRAVELER: Traveler = {
  id: "1",
  fullName: "",
  dob: "",
  passportNumber: "",
  nationality: "",
  dietary: "",
};

export interface Traveler {
  id: string;
  fullName: string;
  dob: string;
  passportNumber: string;
  nationality: string;
  dietary: string;
}

export interface Addon {
  id: string;
  title: string;
  description: string;
  price: number;
}

export enum PaymentPlan {
  FULL = "FULL",
  PARTIAL = "PARTIAL",
}
const ADDONS_LIST: Addon[] = [
  {
    id: "room",
    title: "Private Room Upgrade",
    description:
      "Guaranteed single occupancy room in Kathmandu and tea houses during the trek.",
    price: 350,
  },
  {
    id: "porter",
    title: "Extra Porter Weight (10kg)",
    description:
      "Increase your luggage allowance. We'll carry the heavy lifting for you.",
    price: 150,
  },
  {
    id: "heli",
    title: "Helicopter Return",
    description:
      "Skip the descent and fly back to Kathmandu with breathtaking aerial views.",
    price: 900,
  },
  {
    id: "transfer",
    title: "Private Luxury Transfer",
    description: "Premium airport pickup and drop-off in a private vehicle.",
    price: 60,
  },
];

const Checkout: React.FC = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([INITIAL_TRAVELER]);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [paymentPlan, setPaymentPlan] = useState<PaymentPlan>(PaymentPlan.FULL);

  const basePricePerPerson = 1200;
  const permitsFees = 100;
  const earlyBirdDiscount = 500;
  const taxRate = 0.1;

  const summary = useMemo(() => {
    const travelerCount = travelers.length;
    const baseTotal = travelerCount * basePricePerPerson;
    const addonsTotal = selectedAddons.reduce((sum, id) => {
      const addon = ADDONS_LIST.find((a) => a.id === id);
      return sum + (addon?.price || 0);
    }, 0);

    const subtotal = baseTotal + permitsFees + addonsTotal - earlyBirdDiscount;
    const taxes = subtotal * taxRate;
    const total = subtotal + taxes;

    return {
      travelerCount,
      baseTotal,
      permitsFees,
      addonsTotal,
      earlyBirdDiscount,
      subtotal,
      taxes,
      total,
    };
  }, [travelers.length, selectedAddons]);

  const handleAddTraveler = () => {
    setTravelers([
      ...travelers,
      { ...INITIAL_TRAVELER, id: Date.now().toString() },
    ]);
  };

  const handleRemoveTraveler = (id: string) => {
    if (travelers.length > 1) {
      setTravelers(travelers.filter((t) => t.id !== id));
    }
  };

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Navbar />
      <Header />
      <main className="flex-grow pt-12 pb-24 px-4 md:px-8 lg:px-16 container mx-auto max-w-7xl">
        <Stepper currentStep={2} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-12">
          <div className="lg:col-span-2 space-y-8">
            <ContactInfo />
            <TravelerDetails
              travelers={travelers}
              onAdd={handleAddTraveler}
              onRemove={handleRemoveTraveler}
            />
            <Addons
              addons={ADDONS_LIST}
              selectedIds={selectedAddons}
              onToggle={toggleAddon}
            />
            <BillingAddress />
            <PaymentMethod
              plan={paymentPlan}
              onPlanChange={setPaymentPlan}
              total={summary.total}
            />
          </div>

          <div className="lg:col-span-1">
            <OrderSummary
              summary={summary}
              addons={ADDONS_LIST}
              selectedAddons={selectedAddons}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Checkout;
