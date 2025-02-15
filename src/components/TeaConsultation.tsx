'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

interface ConsultationType {
  id: string
  name: string
  duration: string
  price: number
  description: string
}

const consultationTypes: ConsultationType[] = [
  {
    id: 'virtual',
    name: 'Virtual Tea Session',
    duration: '45 minutes',
    price: 75,
    description: 'Join Earle for a virtual tea ceremony and creative discussion. Perfect for remote collaboration and mentorship.'
  },
  {
    id: 'in-person',
    name: 'In-Person Tea Experience',
    duration: '90 minutes',
    price: 150,
    description: 'Experience an intimate tea ceremony with Earle in person. Limited to New York City area.'
  }
]

const timeSlots: TimeSlot[] = [
  { id: '1', time: '9:00 AM EST', available: true },
  { id: '2', time: '10:00 AM EST', available: true },
  { id: '3', time: '2:00 PM EST', available: true },
  { id: '4', time: '3:00 PM EST', available: false },
  { id: '5', time: '4:00 PM EST', available: true }
]

export const TeaConsultation = () => {
  const [selectedType, setSelectedType] = useState<ConsultationType | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot | null>(null)

  const handleSchedule = () => {
    if (!selectedType || !selectedDate || !selectedTimeSlot) return

    // Integrate with your preferred scheduling system (e.g., Calendly)
    window.open('https://calendly.com/earle-sebastian/tea-session', '_blank')
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
            TEA WITH EARLE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join Earle for an intimate tea ceremony and creative discussion. Share ideas, seek guidance,
            or simply enjoy a mindful moment together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {consultationTypes.map((type) => (
            <div
              key={type.id}
              className={cn(
                'p-6 rounded-xl border-2 cursor-pointer transition-all',
                selectedType?.id === type.id
                  ? 'border-white bg-neutral-900'
                  : 'border-gray-800 bg-neutral-900/50 hover:border-gray-600'
              )}
              onClick={() => setSelectedType(type)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl text-white mb-1">{type.name}</h3>
                  <p className="text-gray-400 text-sm">{type.duration}</p>
                </div>
                <span className="text-white font-medium">${type.price}</span>
              </div>
              <p className="text-gray-400">{type.description}</p>
            </div>
          ))}
        </div>

        {selectedType && (
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-lg mb-4">Select Date</h3>
              <input
                type="date"
                className="w-full md:w-auto px-4 py-2 bg-neutral-900 border border-gray-800 rounded-lg text-white"
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {selectedDate && (
              <div>
                <h3 className="text-white text-lg mb-4">Select Time</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      className={cn(
                        'px-4 py-2 rounded-lg text-sm transition-colors',
                        slot.available
                          ? selectedTimeSlot?.id === slot.id
                            ? 'bg-white text-black'
                            : 'bg-neutral-900 text-white hover:bg-neutral-800'
                          : 'bg-neutral-900/50 text-gray-500 cursor-not-allowed'
                      )}
                      onClick={() => slot.available && setSelectedTimeSlot(slot)}
                      disabled={!slot.available}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedTimeSlot && (
              <button
                onClick={handleSchedule}
                className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Session
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
